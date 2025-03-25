"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { useCookies } from "react-cookie";
import { postFetcher } from "@/lib/simplifier"; // Assuming you have a postFetcher utility

type FieldType = {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

export default function AdminChangePassForm() {
  const [waiting, setWaiting] = useState<boolean>(false);
  const [cookies] = useCookies(["raven"]);
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setWaiting(true);

    if (values.newPassword !== values.confirmPassword) {
      form.setFields([
        {
          name: "confirmPassword",
          errors: ["New password and confirm password must match"],
        },
      ]);
      setWaiting(false);
      return;
    }

    const readyData = {
      current_password: values.currentPassword,
      new_password: values.newPassword,
      new_password_confirmation: values.confirmPassword,
    };

    try {
      const call = await postFetcher({
        link: "/auth/change-password",
        data: readyData,
        meth: "POST",
        token: cookies.raven,
      });

      console.log(call);

      if (!call.status) {
        message.error(call.message);
        setWaiting(false);
        return;
      }

      message.success(call.message);
      form.resetFields();
    } catch (error) {
      console.error("Error changing admin password:", error);
      message.error("An error occurred while changing the password.");
    } finally {
      setWaiting(false);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="adminChangePassword"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
      className="w-full"
    >
      <Form.Item<FieldType>
        label="Current Password"
        name="currentPassword"
        rules={[
          { required: true, message: "Please input your current password!" },
        ]}
      >
        <Input.Password size="large" placeholder="********" />
      </Form.Item>

      <Form.Item<FieldType>
        label="New Password"
        name="newPassword"
        rules={[{ required: true, message: "Please input your new password!" }]}
      >
        <Input.Password size="large" placeholder="********" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Confirm New Password"
        name="confirmPassword"
        rules={[
          { required: true, message: "Please confirm your new password!" },
        ]}
      >
        <Input.Password size="large" placeholder="********" />
      </Form.Item>

      <div className="flex flex-row justify-center items-center py-12">
        <Form.Item<FieldType>>
          <Button
            loading={waiting}
            className="bg-[#7849D4] font-bold px-12 py-6 hover:!bg-[#5a37a0] !text-background !border-none"
            size="large"
            htmlType="submit"
          >
            Save changes
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
