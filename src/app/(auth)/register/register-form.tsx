"use client";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { App, Button, Form, FormProps } from "antd";

import Input from "antd/es/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type FieldType = {
  name?: string;
  email?: string;
  service?: string;
  password?: string;
};
export default function RegisterForm({ user }: { user: string }) {
  const { message } = App.useApp();
  const navig = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    message.success("Succesfully registered");

    if (user == "provider") {
      navig.push("/my-account");
    } else {
      navig.push("/");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
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
        label="Full name"
        name="name"
        rules={[{ required: true, message: "Please enter your full name" }]}
      >
        <Input
          prefix={<UserOutlined />}
          size="large"
          className="bg-[#F0E8FF]"
          placeholder="Please enter your full name"
        />
      </Form.Item>
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
      <Form.Item<FieldType>
        label="What service you want to provide?"
        name="service"
        rules={[{ required: true, message: "This field is required to fill" }]}
      >
        <Input
          size="large"
          className="bg-[#F0E8FF]"
          placeholder="Type here...."
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
          className="bg-[#F0E8FF]"
          placeholder="Please enter your password"
        />
      </Form.Item>
      <div className="text-center font-semibold text-base pt-8">
        Have an account?{" "}
        <Link className="text-[#7849D4] underline" href={`/login?type=${user}`}>
          Login
        </Link>
      </div>
      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mt-8 bg-[#7849D4] text-background font-bold 
             hover:!bg-[#573797]"
          variant="filled"
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
