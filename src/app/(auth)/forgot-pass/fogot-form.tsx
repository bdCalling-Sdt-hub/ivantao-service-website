"use client";
import { postFetcher } from "@/lib/simplifier";
import { MailOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, message } from "antd";

import Input from "antd/es/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type FieldType = {
  email?: string;
};

export default function ForgotForm() {
  const [waiting, setWaiting] = useState<boolean>(false);
  const [form] = Form.useForm();
  const navig = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);

    try {
      setWaiting(true);
      const call = await postFetcher({
        link: "/auth/forgot-password",
        meth: "POST",
        data: values,
      });

      if (call.status) {
        if (values.email) {
          localStorage.setItem("forgot_email", values.email);
        } else {
          throw new Error("Email is empty or invalid");
        }
        message.success("OTP sent to your email.");
        navig.push("/verify-email");
        // console.log(call);
      } else {
        message.error("Please enter your correct email");
      }
    } catch (error) {
      console.error(error);
    }
    setWaiting(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      name="login"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input
          prefix={<MailOutlined />}
          size="large"
          className="bg-[#F0E8FF]"
          placeholder="Please enter your email"
        />
      </Form.Item>
      <Form.Item label={null}>
        <Button
          loading={waiting}
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mt-8 bg-[#7849D4] text-background font-bold 
             hover:!bg-[#583799]"
          variant="filled"
        >
          Enter
        </Button>
      </Form.Item>
    </Form>
  );
}
