"use client";

import { EyeFilled } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Modal } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";

export default function ViewModal({
  image,
  provider,
  name,
  category,
  date,
  reason,
  description,
}: {
  image: string;
  provider: string;
  name: string;
  category: string;
  date: string;
  reason: string;
  description: string;
}) {
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
      <Button className="border-none bg-orange-100 !p-2" onClick={showModal}>
        <EyeFilled className="text-xl text-[#F96D10]" />
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="py-6 flex flex-col justify-start items-center ">
          <Avatar className="w-[100px] h-[100px]" src={image} />
          <Title level={4} className="!m-0 pt-2">
            {provider}
          </Title>

          <Form layout="vertical" requiredMark={false} className="w-4/5">
            <Form.Item label="Service name">
              <Input size="large" value={name} readOnly />
            </Form.Item>

            <Form.Item label="Category">
              <Input size="large" value={category} readOnly />
            </Form.Item>

            <Form.Item label="Date">
              <Input size="large" value={date} readOnly />
            </Form.Item>
            <Form.Item label="Reason">
              <Input size="large" value={reason} readOnly />
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea
                className="text-xs"
                size="large"
                value={description}
                rows={8}
                readOnly
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
}
