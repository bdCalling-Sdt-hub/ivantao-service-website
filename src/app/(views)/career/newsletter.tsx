"use client";
import React from "react";
import Title from "antd/es/typography/Title";
import { Button, Form, FormProps, Input, message } from "antd";
import { postFetcher } from "@/lib/simplifier";

type FieldType = {
  email?: string;
};

export default function Newsletter() {
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);

    try {
      const call = await postFetcher({
        link: "/auth/subscribe-join",
        data: values,
      });
      if (!call.status) {
        message.error(call.message.email[0]);
        return;
      }
      message.success(call.message);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="newsletter-section bg-[#7849D4] py-12 mb-12">
      <div className="container mx-auto px-4 text-center space-y-8">
        <Title
          level={2}
          className="!text-background text-center !text-base md:!text-3xl"
        >
          Subscribe to our newsletter to get news
          <br />
          about our latest job opportunities
        </Title>
        <Form
          className="w-full"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <div className="px-0 md:px-12 w-full md:w-1/2 mx-auto flex flex-row justify-center items-center gap-6">
            <Form.Item<FieldType>
              name="email"
              className="w-full"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                className="w-full"
                placeholder="Example@gmail.com"
                size="large"
              />
            </Form.Item>
            <Form.Item label={null}>
              <Button
                className="bg-[#FFFFFF] hover:!text-[#7849D4] border-none font-semibold"
                size="large"
                htmlType="submit"
              >
                Subscribe
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
}
