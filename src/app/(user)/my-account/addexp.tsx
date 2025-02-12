import type { DatePickerProps, FormProps } from "antd";
import { DatePicker, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

type FieldType = {
  company?: string;
  role?: string;
  join?: string;
  resign?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

export default function Addexp() {
  return (
    <>
      <div className="p-6 px-[7%]">
        <Title level={4} className="text-center">
          Add your experience
        </Title>
        <div className="">
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
              label="Company name"
              name="company"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Your role"
              name="role"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-2 sm:gap-4">
              <Form.Item<FieldType>
                label="Joining Date"
                name="join"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <DatePicker
                  onChange={onChange}
                  size="large"
                  className="w-full"
                />
              </Form.Item>
              <Form.Item<FieldType>
                label="Resign Date"
                name="resign"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <DatePicker
                  onChange={onChange}
                  size="large"
                  className="w-full"
                />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
