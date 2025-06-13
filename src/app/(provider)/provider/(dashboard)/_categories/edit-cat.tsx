"use client";
import { Modal } from "antd";
import React, { useState } from "react";
import { PencilIcon } from "lucide-react";
import EditCatForm from "./edit-cat-form";
import Title from "antd/es/typography/Title";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EditCat({ item }: { item: any }) {
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
        footer={null}
      >
        <EditCatForm item={item} />
      </Modal>
    </>
  );
}
