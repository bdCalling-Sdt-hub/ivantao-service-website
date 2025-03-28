"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, InputNumber, message } from "antd";
import { postFetcher } from "@/lib/simplifier";

type FieldType = {
  amount?: string;
};

export default function WithdrawPayout({ token }: { token: string }) {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const call = await postFetcher({
        link: "/request-withdraw",
        meth: "POST",
        data: values,
        token,
      });
      if (!call.status) {
        message.error(call.message);
        return;
      }
      message.success(call.message);
      form.resetFields();
    } catch (error) {
      console.error(error);
    }

    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <Form
          form={form}
          name="withdraw"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className="w-full flex flex-col justify-center items-center"
        >
          <Form.Item label={"Withdraw amount"} name="amount" className="w-full">
            <InputNumber
              placeholder="Withdraw amount"
              className="w-full bg-[#F0E8FF]"
              size="large"
            />
          </Form.Item>
          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#7849D4] !text-background hover:!bg-[#603baa]"
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
