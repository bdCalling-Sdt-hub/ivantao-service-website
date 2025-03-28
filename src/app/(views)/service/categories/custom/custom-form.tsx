"use client";
import { Button, Form, FormProps } from "antd";
import Input from "antd/es/input";
import React from "react";

type FieldType = {
  info?: string;
  wish?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);

  try {
  } catch (error) {
    console.error(error);
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function CustomForm() {
  return (
    <Form
      name="custom"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <Form.Item<FieldType>
        label={<p className="text-lg font-semibold">Your Contact info</p>}
        name="info"
        rules={[{ required: true, message: "Please enter your contact info" }]}
      >
        <Input size="large" placeholder="Type here..." />
      </Form.Item>
      <Form.Item<FieldType>
        label={<p className="text-lg font-semibold">Your Wish</p>}
        name="wish"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.TextArea
          placeholder="type here...."
          className="resize-none"
          rows={8}
          size="large"
        />
      </Form.Item>
      <Form.Item label={null} className="flex flex-row justify-end">
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="mt-8 text-black font-bold px-10 bg-[#7849D4] !text-background hover:!bg-[#603baa]"
          variant="filled"
        >
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
