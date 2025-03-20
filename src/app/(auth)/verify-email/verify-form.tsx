"use client";
import { Input, Form, Button, message } from "antd";
import React, { useState, useEffect } from "react";
import { postFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function VerifyForm() {
  const [waiting, setWaiting] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [countDown, setCountDown] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(false); // Start as false
  const [, setCookies] = useCookies(["raven"]);
  const navig = useRouter();
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countDown > 0 && isResendDisabled) {
      timer = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    } else if (countDown === 0) {
      setIsResendDisabled(false); // Re-enable the resend button after countdown finishes
      setCountDown(60);
    }
    return () => clearInterval(timer);
  }, [countDown, isResendDisabled]);

  const onFinish = async (values: { otp: string }) => {
    console.log("Success:", values);
    setWaiting(true);
    try {
      const call = await postFetcher({
        link: "/auth/verify",
        meth: "POST",
        data: values,
      });
      console.log(call);
      if (call.status) {
        setCookies("raven", call.access_token);
        message.success(call.message);

        navig.push("/create-pass");
      } else {
        console.log(call.error);

        form.setFields([
          {
            name: "otp",
            errors: [call.error],
          },
        ]);
        setWaiting(false);
        return;
      }
    } catch (error) {
      console.error(error);
    }
    setWaiting(false);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  const handleResend = async () => {
    setIsResendDisabled(true);
    setCountDown(60);
    try {
      const tempEmail = localStorage.getItem("forgot_email");
      const call = await postFetcher({
        link: "/auth/resend-otp",
        meth: "POST",
        data: { email: tempEmail },
      });
      console.log(call);

      setIsResendDisabled(true);
      setCountDown(60);
      message.success(call.message);
    } catch (error) {
      console.error(error);
      setIsResendDisabled(false);
    }
  };

  return (
    <Form
      form={form}
      name="verify"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <div className="flex flex-row justify-center items-center">
        <Form.Item
          name="otp"
          rules={[
            { required: true, message: "Please enter the OTP" },
            { len: 6, message: "OTP must be 6 digits" },
          ]}
          validateTrigger="onBlur" // Trigger error when user leaves the input field
        >
          <Input.OTP
            length={6}
            size="large"
            style={{ color: "#F0E8FF" }}
            variant="filled"
          />
        </Form.Item>
      </div>

      <Form.Item>
        <Button
          loading={waiting}
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mt-8 bg-[#7849D4] text-background font-bold hover:!bg-[#58369c]"
        >
          Enter
        </Button>
      </Form.Item>
      <div className="underline text-[#7849D4] text-end">
        <Button
          variant="link"
          type="link"
          className="cursor-pointer text-[#7849D4] underline hover:!text-black transition-colors"
          disabled={isResendDisabled} // Disable the button during countdown
          onClick={handleResend} // Trigger resend logic
        >
          {isResendDisabled
            ? `Resend available in ${countDown} seconds`
            : "Send again"}
        </Button>
      </div>
    </Form>
  );
}
