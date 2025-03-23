"use client";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, Upload } from "antd";
import Input from "antd/es/input";
import React from "react";
import BackText from "@/components/ui/back-text";
import Title from "antd/es/typography/Title";

type FieldType = {
  name?: string;
  email?: string;
  cover_letter?: string;
  upload_resume?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const normFile = (e: unknown) => {
  //   console.log("Upload event:", e);
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e?.fileList;
};

export default function Page() {
  return (
    <main className="py-12 px-[7%]">
      <BackText text={"Back"} />
      <section>
        <Title className="text-center" level={3}>
          Applying for UI-UX Designer
        </Title>
        <div className="px-[5%] md:px-[20%] lg:px-[30%]">
          <Form
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item<FieldType>
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input size="large" placeholder="Abid Hasan" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input size="large" placeholder="example@gmail.com" />
            </Form.Item>
            <Form.Item<FieldType> label="Cover Letter" name="cover_letter">
              <Input.TextArea
                size="large"
                className=""
                rows={8}
                placeholder="Type here"
              />
            </Form.Item>
            <Form.Item label="Upload your resume">
              <Form.Item
                name="upload_resume"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined className="!text-[#7849D4]" />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">Max 10 MB</p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
            <Form.Item label={null}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full mt-8 text-background !bg-[#7849D4] hover:!bg-[#5d39a5]  font-bold"
                variant="filled"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </main>
  );
}
