"use client";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { UserType } from "@/types/userType";

type FieldType = {
  full_name?: string;
  email?: string;
  address?: string;
  about_yourself?: string;
};

export default function UserAccDetForm({ user }: { user: UserType }) {
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
