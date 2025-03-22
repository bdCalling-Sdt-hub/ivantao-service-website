"use client";
import { Finalizer, postFetcher } from "@/lib/simplifier";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { App, Button, Form, FormProps } from "antd";

import Input from "antd/es/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

type FieldType = {
  full_name?: string;
  email?: string;
  provider_description?: string;
  password?: string;
};
export default function RegisterForm({ user }: { user: string }) {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const navig = useRouter();
  const [pookies, setPookie] = useCookies(["raven"]);
  const [waiting, setWaiting] = useState<boolean>(false);
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setWaiting(true);
    try {
      console.log(values);

      const call = await postFetcher({
        link: "/auth/register",
        meth: "POST",
        token: pookies.raven,
        data: values,
      });
      console.log(call);
      if (!call.status) {
        const nameErrors = call.message.full_name || [];
        const serviceErrors = call.message.provider_description || [];
        const emailErrors = call.message.email || [];
        const passwordErrors = call.message.password || [];

        // Set errors individually for email and password fields
        form.setFields([
          {
            name: "full_name",
            errors: nameErrors.length > 0 ? nameErrors : [],
          },
          {
            name: "email",
            errors: emailErrors.length > 0 ? emailErrors : [],
          },
          {
            name: "password",
            errors: passwordErrors,
          },
          {
            name: "service",
            errors: serviceErrors.length > 0 ? serviceErrors : [],
          },
        ]);
        setWaiting(false);
        return;
      } else {
        setPookie("raven", call.access_token);
        Finalizer(message, call.status, call.message);
      }
    } catch (error) {
      setWaiting(false);
      console.error(error);
      return;
    }
    if (user == "provider") {
      navig.push("/my-account");
    } else {
      navig.push("/");
    }
    setWaiting(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
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
        name="full_name"
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
      {user == "provider" && (
        <Form.Item<FieldType>
          label="What service you want to provide?"
          name="provider_description"
          rules={[
            { required: true, message: "This field is required to fill" },
          ]}
        >
          <Input
            size="large"
            className="bg-[#F0E8FF]"
            placeholder="Type here...."
          />
        </Form.Item>
      )}
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
          loading={waiting}
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
