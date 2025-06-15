/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { formPostFetcher } from "@/lib/simplifier";
import { InboxOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import { Button, Form, message, UploadFile, Input } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type FieldType = {
  image?: string;
  name?: string;
};

export default function EditSubCatForm({ item }: { item: any }) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = Form.useForm();
  const [cookies] = useCookies(["raven"]);
  useEffect(() => {
    form.setFields([{ name: "name", value: item.name }]);
  }, [item]);

  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const formData = new FormData();
      if (fileList.length > 0 && fileList[0].originFileObj) {
        formData.append("image", fileList[0].originFileObj);
      }
      formData.append("name", values.name || "");

      console.log("Form Data:", Object.fromEntries(formData.entries()));

      const call = await formPostFetcher({
        link: `/update-subcategory/${item.id}`,
        token: cookies.raven,
        data: formData,
        meth: "POST",
      });
      console.log(call);
      if (!call.status) {
        message.error(call.message);
        return;
      }
      message.success(call.message);
    } catch (error) {
      console.error(error);
    }

    // message.success("Form submitted successfully!");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="p-6 px-[7%]">
      <div>
        <Form
          form={form}
          name="edit-sub"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
          className="w-full"
        >
          <Form.Item<FieldType>
            name="image"
            rules={[{ required: true, message: "Please upload an image!" }]}
          >
            <Dragger
              multiple={false}
              fileList={fileList}
              beforeUpload={() => false}
              onChange={handleFileChange}
              showUploadList={true}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-hint">Click to upload</p>
            </Dragger>
          </Form.Item>

          <Form.Item<FieldType>
            label="Sub Category"
            name="name"
            rules={[{ required: true, message: "Please input a subcategory!" }]}
          >
            <Input className="w-full" placeholder="Type here.." />
          </Form.Item>

          <div className="w-full h-auto flex flex-row justify-center items-center px-[7%]">
            <Button
              size="large"
              htmlType="submit"
              className="w-full bg-[#7849D4] hover:!bg-[#533392] !text-background border-none"
            >
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
