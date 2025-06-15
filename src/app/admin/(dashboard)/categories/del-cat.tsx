"use client";
import { Button, message, Modal } from "antd";
import React, { useState } from "react";
import { Trash2Icon } from "lucide-react";
import Title from "antd/es/typography/Title";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { deleteFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
export default function DelCat({ id }: { id: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookies] = useCookies(["raven"]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const call = await deleteFetcher({
        link: `/delete-category/${id}`,
        token: cookies.raven,
      });
      if (!call.status) {
        message.error(call.messsage);
      }
      message.success(call.message);
    } catch (error) {
      console.error(error);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="space-x-2 flex flex-row justify-center items-center font-semibold"
        onClick={showModal}
      >
        <span>Delete</span> <Trash2Icon size={16} />
      </a>
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
          <Title level={2} className="text-center">
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
