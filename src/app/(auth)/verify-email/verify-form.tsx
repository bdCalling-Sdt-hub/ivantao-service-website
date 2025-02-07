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
            length={4}
            size="large"
            style={{ color: "#DAC7A0" }}
            variant="filled"
          />
        </Form.Item>
      </div>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mt-8 bg-[#DAC7A0] text-black font-bold hover:!bg-[#C4A77D]"
        >
          Enter
        </Button>
      </Form.Item>
      <div className="underline text-[#DAC7A0] text-end">
        <span className="cursor-pointer hover:text-black transition-colors">
          Send Again
        </span>
      </div>
    </Form>
  );
}
