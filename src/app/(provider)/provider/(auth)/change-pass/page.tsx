"use client";
import Title from "antd/es/typography/Title";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  password?: string;
  repass?: string;
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
            Set a new password
          </Title>
          <p className="text-center mb-6 text-[#5C5C5C] w-1/2 mx-auto">
            Create a new password. Ensure it differs from previous ones for
            security
          </p>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
            className="w-full px-12"
          >
            <Form.Item<FieldType>
              label="New Password"
              name="password"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="********"
                className="bg-[#F0E8FF]"
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Confirm New Password"
              name="repass"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="*********"
                className="bg-[#F0E8FF]"
              />
            </Form.Item>

            <div className="flex flex-row justify-center items-center">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-[#7849D4] px-6 py-6"
                  size="large"
                >
                  Update Password
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}
