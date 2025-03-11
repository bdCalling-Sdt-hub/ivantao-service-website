"use client";
import Title from "antd/es/typography/Title";
import { Button, Form, Input, type FormProps } from "antd";

type FieldType = {
  email?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Page() {
  return (
    <main className="h-dvh w-dvw flex flex-row justify-center items-center">
      <div className="w-[80dvh] aspect-square p-8 border-2 rounded-2xl flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <Title level={2} className="mb-2">
            Forgot password?
          </Title>
          <Form
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
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                size="large"
                placeholder="abidhasan@gmail.com"
                className="bg-[#F0E8FF]"
              />
            </Form.Item>

            <div className="flex flex-row justify-center items-center">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-[#7849D4] px-8 py-6"
                  size="large"
                >
                  Send Code
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}
