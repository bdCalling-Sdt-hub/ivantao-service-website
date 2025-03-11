"use client";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, FormProps } from "antd";

import Input from "antd/es/input";
// import Link from "next/link";
import React from "react";

type FieldType = {
  password?: string;
  repass?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function PassForm() {
  return (
    <Form
      name="login"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <Form.Item<FieldType>
        label="Enter a new password"
        name="password"
        rules={[{ required: true, message: "Please Enter a new password" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          size="large"
          className="bg-[#F0E8FF]"
          placeholder="Enter your new password"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label="Retype a new password"
        name="repass"
        rules={[{ required: true, message: "Please re-type your new email" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          size="large"
          className="bg-[#F0E8FF]"
          placeholder="Re type your password"
        />
      </Form.Item>
      {/* <div className="text-right text-[#DAC7A0] underline">
        <Link href="/forgot-pass">Forgot password?</Link>
      </div> */}
      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mt-8 bg-[#7849D4] text-background font-bold 
             hover:!bg-[#4f318b]"
          variant="filled"
        >
          Update & Login
        </Button>

        {/* <div className="text-center font-semibold text-base pt-8">
          New user?{" "}
          <Link className="text-[#DAC7A0] underline" href="/register">
            Register
          </Link>
        </div> */}
      </Form.Item>
    </Form>
  );
}
