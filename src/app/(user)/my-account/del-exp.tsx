"use client";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";

export default function DelExp() {
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
      <Button
        onClick={showModal}
        shape="circle"
        className="h-8 w-8 md:h-12 md:w-12 text-red-500"
      >
        <DeleteOutlined />
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="p-6">
          <Title className="text-red-500 text-center">
            <QuestionCircleOutlined className="text-red-500" />
          </Title>
          <Title level={2} className="text-center !text-lg md:!text-3xl">
            Are you sure to <span className="text-red-500">DELETE</span> <br />
            this category ?
          </Title>
          <div className="flex flex-row justify-center items-center gap-6">
            <Button
              className="py-6 px-10 text-xl"
              onClick={handleCancel}
              size="large"
            >
              No
            </Button>
            <Button
              className="py-6 px-10 text-xl bg-red-500 border-none text-background hover:!bg-red-600 hover:!text-background"
              onClick={handleOk}
              size="large"
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
