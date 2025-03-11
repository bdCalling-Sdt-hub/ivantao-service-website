"use client";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, message, Select, UploadProps } from "antd";

import Input from "antd/es/input";
import Dragger from "antd/es/upload/Dragger";
import React from "react";

type FieldType = {
  category?: string;
  subCategory?: string;
  img?: string;
  title?: string;
  description?: string;
  price?: string;
  email?: string; // Added email field
  password?: string; // Added password field
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const handleChangeA = (value: string) => {
  console.log(`selected ${value}`);
};

export default function AddForm() {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Form
      name="add-item" // Changed name for clarity
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <Form.Item<FieldType>
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please enter the category" }]}
      >
        <Select
          placeholder="Select your product category"
          size="large"
          onChange={handleChangeA}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Sub Category"
        name="subCategory"
        rules={[{ required: true, message: "Please enter the sub category" }]}
      >
        <Select
          placeholder="Select your product sub category"
          onChange={handleChangeA}
          size="large"
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>
      <div className="p-6 bg-background rounded-xl">
        <Form.Item<FieldType>
          label="Image URL"
          name="img"
          rules={[{ required: true, message: "Please enter the image URL" }]}
        >
          <Dragger {...props} className="bg-transparent">
            <p className="ant-upload-drag-icon !text-[#7849D4]">
              <InboxOutlined className="" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </Form.Item>

        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input size="large" placeholder="Title" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea
            size="large"
            placeholder="Description"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter the price" }]}
        >
          <Input type="number" size="large" placeholder="Price" />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full mt-8 bg-[#7849D4] text-background font-bold hover:!bg-[#5d38a7]"
            variant="filled"
          >
            Add Item
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
