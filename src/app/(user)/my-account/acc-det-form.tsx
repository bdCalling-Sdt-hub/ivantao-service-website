import React from "react";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import Services from "./services";
import WorkingHrs from "./working-hrs";

type FieldType = {
  name?: string;
  email?: string;
  address?: string;
  about?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function AccDetForm() {
  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
      className="w-full"
    >
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input size="large" placeholder="Seint Josef" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input size="large" placeholder="abidhasan@gmail.com" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input size="large" placeholder="lorem ipsum dolor sit......" />
      </Form.Item>
      <Form.Item<FieldType>
        label="About Yourself"
        name="about"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.TextArea
          rows={6}
          size="large"
          placeholder="lorem ipsum dolor sit......"
        />
      </Form.Item>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl p-6 bg-background h-[400px]">
          <Services />
        </div>
        <div className="rounded-xl p-6 bg-background h-[400px]">
          <WorkingHrs />
        </div>
      </div>
    </Form>
  );
}
