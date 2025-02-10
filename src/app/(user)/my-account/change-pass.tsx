import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  currPass?: string;
  newPass?: string;
  confPass?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function ChangePass() {
  return (
    <>
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
            label="Current Password"
            name="currPass"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input.Password size="large" placeholder="********" />
          </Form.Item>

          <Form.Item<FieldType>
            label="New Password"
            name="newPass"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="********" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Confirm Password"
            name="confPass"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="********" />
          </Form.Item>
          <div className="flex flex-row justify-center items-center py-12">
            <Form.Item<FieldType>>
              <Button
                className="bg-[#E9DABB] font-bold px-12 py-6 hover:!bg-[#b6a88c] hover:!text-background !border-none"
                size="large"
              >
                Save changes
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
}
