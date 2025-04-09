"use client";
import { getFetcher, postFetcher } from "@/lib/simplifier";
import { UserType } from "@/types/userType";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const { TextArea } = Input;

export default function ContactForm() {
  const [form] = Form.useForm();
  const [cookies] = useCookies(["raven"]);
  const [waiting, setWaiting] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      setWaiting(true);
      if (cookies.raven) {
        const call = await getFetcher({
          link: "/auth/own-profile",
          token: cookies.raven,
        });
        console.log(call.data);

        if (!call.status) {
          console.log("server couldnt retrive user data");
        }
        const user: UserType = call.data;
        form.setFields([
          { name: "name", value: user.full_name },
          { name: "email", value: user.email },
          { name: "phone", value: user.contact },
        ]);
        setWaiting(false);
      }
      setWaiting(false);
    }
    getData();
  }, []);

  const onFinish = async (values: {
    email: string;
    message: string;
    name: string;
    phone: string;
    subject: string;
  }) => {
    console.log("Form values:", values);
    setWaiting(true);

    try {
      const call = await postFetcher({
        link: "/contact-message",
        meth: "POST",
        token: cookies.raven,
        data: values,
      });
      if (!call.status) {
        message.error(call.message);
      }
      message.success(call.message);
      form.resetFields();
      setWaiting(false);
    } catch (error) {
      console.error(error);
    }
    setWaiting(false);
  };
  if (!cookies.raven) {
    return (
      <div className="h-[300px] w-full flex justify-center items-center !space-x-1">
        <span>Please</span>{" "}
        <span className="hover:underline">
          <Link href="/login?type=user" className="!text-black">
            {" "}
            log in{" "}
          </Link>
        </span>{" "}
        <span>first</span>
      </div>
    );
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="max-w-4xl mx-auto p-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-6">
        {" "}
        {/* Added responsive grid */}
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input size="large" placeholder="Your name" className="rounded-md" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input size="large" placeholder="Your email" className="rounded-md" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input size="large" placeholder="Phone" className="rounded-md" />
        </Form.Item>
        <Form.Item
          name="subject"
          rules={[{ required: true, message: "Please enter a subject" }]}
        >
          <Input size="large" placeholder="Subject" className="rounded-md" />
        </Form.Item>
      </div>

      <Form.Item
        name="message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <TextArea
          size="large"
          placeholder="Message"
          rows={6}
          className="rounded-md"
        />
      </Form.Item>

      <Form.Item className="flex justify-center">
        <Button
          loading={waiting}
          htmlType="submit"
          size="large"
          className="bg-[#7849D4] hover:!bg-[#543396] border-none font-semibold px-12 md:px-20 rounded-md h-12 !text-background w-full md:w-auto" // Added responsive button width
        >
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
