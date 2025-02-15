"use client";
import { Button, Form, FormProps } from "antd";

import Input from "antd/es/input";
import { useRouter } from "next/navigation";
import React from "react";

type FieldType = {
  email?: string;
  password?: string;
};

export default function ProfileForm() {
  const navig = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    navig.push("/");
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
        label="Name"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input size="large" placeholder="Jhon Doe" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input size="large" placeholder="example@gmail.com" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Contact info"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input size="large" placeholder="+96589632147" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Address"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input size="large" placeholder="lorem ipsum dolor sit" />
      </Form.Item>
      <div className="flex flex-row justify-center items-center">
        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="bg-[#B7A481] text-lg px-12 py-4 !text-background text-black font-bold 
             hover:!bg-[#C4A77D]"
            variant="filled"
          >
            Save
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
