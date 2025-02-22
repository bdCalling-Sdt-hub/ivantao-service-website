"use client";
import { Button, Checkbox, Form, FormProps } from "antd";

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

export default function ComingSoonForm() {
  return (
    <>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item<FieldType>
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input size="large" placeholder="Please enter your email" />
        </Form.Item>
        <Form.Item<FieldType>>
          <Checkbox>Yes, subscribed me to your newsletter</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full mt-8 bg-[#FD5724] text-background font-bold 
      hover:!bg-[#e0693a] hover:shadow-md"
            variant="filled"
          >
            Join
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
