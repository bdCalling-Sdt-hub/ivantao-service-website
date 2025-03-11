"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { PencilIcon } from "lucide-react";
import EditCatForm from "./edit-cat-form";
import Title from "antd/es/typography/Title";
export default function EditCat() {
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
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="space-x-2 flex flex-row justify-center items-center font-semibold"
        onClick={showModal}
      >
        <span>Edit</span> <PencilIcon size={16} />
      </a>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={
          <Title level={4} className="text-center">
            Edit Category
          </Title>
        }
        footer={[
          <div
            key={10}
            className="w-full h-auto flex flex-row justify-center items-center px-[7%]"
          >
            <Button
              size="large"
              className="w-full bg-[#7849D4] hover:!bg-[#533392] !text-background border-none"
            >
              Save
            </Button>
          </div>,
        ]}
      >
        <EditCatForm />
      </Modal>
    </>
  );
}
