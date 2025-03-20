"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { useCookies } from "react-cookie";
import { postFetcher } from "@/lib/simplifier";

type FieldType = {
  currPass?: string;
  newPass?: string;
  confPass?: string;
};

export default function ChangePass() {
  const [waiting, setWaiting] = useState<boolean>(false);
  const [cookies] = useCookies(["raven"]);
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setWaiting(true);
    const readyData = {
      current_password: values.currPass,
      new_password: values.newPass,
      new_password_confirmation: values.confPass,
    };
    if (values.newPass != values.confPass) {
      form.setFields([
        {
          name: "confPass",
          errors: ["New password And Confirm password must match"],
        },
      ]);
      setWaiting(false);
      return;
    }
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
      console.error(error);
    }
    setWaiting(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="">
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
            label="Current Password"
            name="currPass"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input.Password size="large" placeholder="********" />
          </Form.Item>

          <Form.Item<FieldType>
            label="New Password"
            name="newPass"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="********" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Confirm Password"
            name="confPass"
            rules={[{ required: true, message: "Please input your password!" }]}
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
      </div>
    </>
  );
}
