"use client";
import { MailOutlined } from "@ant-design/icons";
import { Button, Form, FormProps } from "antd";

import Input from "antd/es/input";
import React from "react";

type FieldType = {
  email?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function ForgotForm() {
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
          className="bg-[#F0E8FF]"
          placeholder="Please enter your email"
        />
      </Form.Item>
      <Form.Item label={null}>
        <Button
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
