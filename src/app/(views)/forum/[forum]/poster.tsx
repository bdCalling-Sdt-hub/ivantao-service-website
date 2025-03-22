"use client";
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Form,
  Input,
  message,
  Modal,
  Upload,
  UploadFile,
} from "antd";
import { ChevronLeft, ImageIcon, SendIcon } from "lucide-react";
import { UploadOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import { formPostFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function Poster({ id }: { id: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = Form.useForm();
  const [cookies] = useCookies(["raven"]);
  const navig = useRouter();
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = ({ fileList }: { fileList: any }) =>
    setFileList(fileList);

  const handlePublish = async () => {
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("comment", values.comment);
      formData.append("categories_id", id);

      if (fileList.length > 0 && fileList[0].originFileObj) {
        formData.append("image", fileList[0].originFileObj);
      }

      console.log("Form Data:", Object.fromEntries(formData.entries()));

      const call = await formPostFetcher({
        link: "/forum-post",
        meth: "POST",
        data: formData,
        token: cookies.raven,
      });
      if (!call.status) {
        message.error(call.message);
        return;
      }

      message.success(call.message);
      navig.refresh();
    } catch (error) {
      console.error("Validation Failed:", error);
    }
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
      <div>
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
        onCancel={handleCancel}
        title={null}
        footer={
          <div className="flex flex-row justify-between items-center">
            <Button type="primary">
              <ImageIcon className="!size-4" /> Add Image
            </Button>
            <Upload
              multiple={false}
              fileList={fileList}
              beforeUpload={() => false} // Prevent auto-upload
              onChange={handleChange}
              showUploadList={true}
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
