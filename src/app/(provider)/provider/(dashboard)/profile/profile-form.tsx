"use client";
import { postFetcher } from "@/lib/simplifier";
import { UserType } from "@/types/userType";
import { Button, Form, FormProps, message } from "antd";
import Input from "antd/es/input";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type FieldType = {
  full_name?: string;
  email?: string;
  contact?: string;
  address?: string;
};

export default function ProfileForm({ data }: { data?: UserType }) {
  const navig = useRouter();
  const [form] = Form.useForm();
  const [waiting, setWaiting] = useState<boolean>(false);
  const [cookies] = useCookies(["raven"]);
  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        full_name: data.full_name,
        email: data.email,
        contact: data.contact,
        address: data.address,
      });
    }
  }, [data, form]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    setWaiting(true);

    try {
      const call = await postFetcher({
        link: "/auth/profile-update",
        meth: "POST",
        data: values,
        token: cookies.raven,
      });
      console.log(call);
      if (call.status) {
        message.success(call.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setWaiting(false);
    }

    navig.refresh();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="profile_form"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <Form.Item<FieldType>
        label="Name"
        name="full_name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input size="large" placeholder="John Doe" />
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
        name="contact"
        rules={[{ required: true, message: "Please enter your contact info" }]}
      >
        <Input size="large" placeholder="+96589632147" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please enter your address" }]}
      >
        <Input size="large" placeholder="Lorem ipsum dolor sit" />
      </Form.Item>

      <div className="flex flex-row justify-center items-center">
        <Form.Item label={null}>
          <Button
            loading={waiting}
            type="primary"
            htmlType="submit"
            size="large"
            className="bg-[#7849D4] hover:!bg-[#533392] !text-background text-lg px-12 py-4 font-bold"
            variant="filled"
          >
            Save
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
