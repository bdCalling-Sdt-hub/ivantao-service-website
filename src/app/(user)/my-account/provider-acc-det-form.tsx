"use client";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import Services from "./services";
import WorkingHrs from "./working-hrs";
import Title from "antd/es/typography/Title";
import { UserType } from "@/types/userType";

type FieldType = {
  full_name?: string;
  email?: string;
  address?: string;
  about_yourself?: string;
};

export default function ProvAccDetForm({ user }: { user: UserType }) {
  const [form] = Form.useForm();
  form.setFields([
    {
      name: "full_name",
      value: user.full_name,
    },
    { name: "email", value: user.email },
    { name: "about_yourself", value: user.address },
    // { name: "address", value: call?.data.address },
    // { name: "address", value: call?.data.address },
    // { name: "address", value: call?.data.address },
    // { name: "address", value: call?.data.address },
    // { name: "address", value: call?.data.address },
  ]);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
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
        name="full_name"
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
        name="about_yourself"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.TextArea
          rows={6}
          size="large"
          placeholder="lorem ipsum dolor sit......"
        />
      </Form.Item>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <Title level={4}>Services</Title>
          <div className="rounded-xl p-6 bg-background h-[400px]">
            <Services />
          </div>
        </div>
        <div className="">
          <Title level={4}>Working Hours</Title>
          <div className="rounded-xl p-6 bg-background h-[400px]">
            <WorkingHrs />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center py-12">
        <Form.Item<FieldType>>
          <Button
            className="bg-[#7849D4] font-bold px-12 py-6 hover:!bg-[#5a37a0] !text-background !border-none"
            size="large"
          >
            Save changes
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
