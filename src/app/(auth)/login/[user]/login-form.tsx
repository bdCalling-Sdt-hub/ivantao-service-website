"use client";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, FormProps } from "antd";

import Input from "antd/es/input";
import Link from "next/link";
import React from "react";

type FieldType = {
  email?: string;
  password?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function LoginForm({ user }: { user: string }) {
  return (
    <Form
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
          className="bg-[#F2ECE1]"
          placeholder="Please enter your email"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          size="large"
          className="bg-[#F2ECE1]"
          placeholder="Please enter your password"
        />
      </Form.Item>
      <div className="text-right text-[#DAC7A0] underline">
        <Link href="/forgot-pass">Forgot password?</Link>
      </div>
      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mt-8 bg-[#DAC7A0] text-black font-bold 
             hover:!bg-[#C4A77D]"
          variant="filled"
        >
          Log in
        </Button>

        <div className="text-center font-semibold text-base pt-8">
          New user?{" "}
          <Link className="text-[#DAC7A0] underline" href={`/register/${user}`}>
            Register
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
}
