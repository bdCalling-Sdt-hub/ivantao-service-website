import { InboxOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import { Form, Select } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React from "react";

type FieldType = {
  company?: string;
  role?: string;
  join?: string;
  resign?: string;
};
const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function EditSubCatForm() {
  return (
    <>
      <div className="p-6 px-[7%]">
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
              name="company"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Dragger>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-hint">Click to upload</p>
              </Dragger>
            </Form.Item>

            <Form.Item<FieldType>
              label="Sub Category"
              name="role"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Tags Mode"
                onChange={handleChange}
                size="large"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
