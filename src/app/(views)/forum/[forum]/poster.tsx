"use client";
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Form,
  Input,
  Modal,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { ChevronLeft, ImageIcon, SendIcon } from "lucide-react";
import { UploadOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

export default function Poster() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    let newFileList = [...info.fileList];

    newFileList = newFileList.slice(-2);

    // Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Assuming file.response contains the URL
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
  };

  const handlePublish = () => {
    form.validateFields().then((values) => {
      console.log("Form Data:", values);
      console.log("Uploaded Files:", fileList);

      // Add the image URL to the form data if there's an uploaded file
      const formData = {
        ...values,
        image: fileList.length > 0 ? fileList[0].url : null,
      };

      console.log("Final Data:", formData);
    });
  };

  return (
    <section className="flex flex-row justify-start items-center gap-3">
      <Button
        className="!text-black !bg-zinc-200"
        type="primary"
        shape="circle"
      >
        <ChevronLeft />
      </Button>
      <div className="">
        <Avatar size="large" className="!size-9 aspect-square" />
      </div>
      <Input
        size="large"
        className="bg-gray-200 !border-none"
        placeholder="What's on your mind?"
        readOnly
        onClick={showModal}
      />
      <Modal
        className="!w-[70%] h-auto"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={null}
        footer={
          <div className="flex flex-row justify-between items-center">
            <Button type="primary">
              <ImageIcon className="!size-4" /> Add Image
            </Button>
            <Upload
              multiple={false}
              onChange={handleChange}
              fileList={fileList}
              action="/upload" // Placeholder for actual upload URL
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <Button
              type="primary"
              className="bg-[#F48023] hover:!bg-[#e08b45]"
              onClick={handlePublish}
            >
              <SendIcon className="!size-4" /> Publish
            </Button>
          </div>
        }
      >
        <div className="pt-12">
          <Form form={form} layout="vertical">
            <FormItem
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Input placeholder="Title" />
            </FormItem>
            <FormItem
              name="comment"
              label="Comment"
              rules={[
                { required: true, message: "Please input your comment!" },
              ]}
            >
              <Input.TextArea placeholder="Type your comment" rows={12} />
            </FormItem>
          </Form>
        </div>
      </Modal>
      <Button
        onClick={showModal}
        size="large"
        className="bg-[#7849D4] hover:!bg-[#5d39a5] !text-background !border-none"
      >
        Create post
      </Button>
    </section>
  );
}
