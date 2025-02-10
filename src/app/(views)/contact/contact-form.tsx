"use client";
import { Button, Form, Input } from "antd";

const { TextArea } = Input;

export default function ContactForm() {
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

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
          htmlType="submit"
          size="large"
          className="bg-[#D2BC9B] hover:!bg-[#c5af8f] border-none font-semibold px-12 md:px-20 rounded-md h-12 text-black hover:!text-[#6b5e49] w-full md:w-auto" // Added responsive button width
        >
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
