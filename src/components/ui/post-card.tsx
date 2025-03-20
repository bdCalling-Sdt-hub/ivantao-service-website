"use client";
import { postType } from "@/types/forums";
import { MoreOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Modal, Select } from "antd";
import Title from "antd/es/typography/Title";
import { AlertOctagon } from "lucide-react";
import React, { useState } from "react";

export default function PostCard({ title, time_ago, user, comment }: postType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="p-6 mb-4 rounded-lg bg-background shadow-sm flex flex-row justify-between items-start">
        {/* Added mb-4 for spacing */}
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row justify-start items-center gap-4">
            <Avatar size="large" src={user.image} />
            <div className="">
              <Title className="!m-0" level={5}>
                {title}
              </Title>
              <p>{time_ago}</p> {/* Display time */}
            </div>
          </div>
          <div className="py-4">
            <Title level={5}>{title}</Title>
            <p className="text-sm md:text-lg font-light">{comment}</p>
          </div>
        </div>
        <div className="">
          <Button shape="circle" variant="text" type="text" onClick={showModal}>
            <MoreOutlined className="cursor-pointer" />
          </Button>
        </div>
      </div>
      <Modal
        title={
          <Title
            level={4}
            className="text-center w-full !m-0 flex flex-row justify-center items-center gap-2"
          >
            <AlertOctagon className="text-red-500" />
            <span className="!font-normal">
              Report <span className="font-bold">this post</span>
            </span>
          </Title>
        }
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="basic" requiredMark={false} layout="vertical">
          <Form.Item
            label="Reason"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Select
              size="large"
              placeholder="-select-"
              options={[
                { value: "jack", label: "Fraud" },
                { value: "lucy", label: "Spreading misinformation" },
                { value: "Yiminghe", label: "Illegal goods or services" },
                { value: "disabled", label: "Sexually explicit content" },
                { value: "disabled", label: "Promoting violence" },
                { value: "disabled", label: "Hate group contains" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Reason"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input.TextArea
              rows={6}
              className="!resize-none"
              placeholder="type here..."
            />
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              className="w-full bg-[#7849D4] hover:!bg-[#58369c] !text-background !border-none"
              onClick={handleOk}
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
