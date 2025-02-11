"use client";
import { Button, Form, FormProps } from "antd";

import Input from "antd/es/input";
import { SendIcon } from "lucide-react";
import React from "react";

type FieldType = {
  name?: string;
  email?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function LoginForm() {
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
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input size="large" placeholder="" />
      </Form.Item>{" "}
      <Form.Item<FieldType>
        name="email"
        label="Email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input size="large" placeholder="" />
      </Form.Item>
      <div className="flex flex-row justify-center items-center">
        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full mt-8 bg-[#B85E3A] text-background text-sm font-bold 
             hover:!bg-[#7a412a]"
            variant="filled"
          >
            SEND <SendIcon className="h-4 w-4" />
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
