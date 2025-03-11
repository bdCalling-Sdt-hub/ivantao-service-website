"use client";
import { Button, Form, Input } from "antd";
import React from "react";

export default function VerifyForm() {
  const onFinish = (values: { otp: string }) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="verify"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <div className="flex flex-row justify-center items-center">
        <Form.Item<{ otp: string }>
          name="otp"
          rules={[
            { required: true, message: "Please enter the OTP" },
            { len: 4, message: "OTP must be 4 digits" },
          ]}
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
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mt-8 bg-[#7849D4] text-background font-bold hover:!bg-[#58369c]"
        >
          Enter
        </Button>
      </Form.Item>
      <div className="underline text-[#7849D4] text-end">
        <span className="cursor-pointer hover:text-black transition-colors">
          Send Again
        </span>
      </div>
    </Form>
  );
}
