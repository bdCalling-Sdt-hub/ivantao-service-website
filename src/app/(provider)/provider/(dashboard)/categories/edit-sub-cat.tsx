/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Modal } from "antd";
import React, { useState } from "react";
import { PencilIcon } from "lucide-react";
import EditSubCatForm from "./edit-sub-cat-form";
import Title from "antd/es/typography/Title";
export default function EditSubCat({ item }: { item: any }) {
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
            Edit Sub Category
          </Title>
        }
        footer={null}
      >
        <EditSubCatForm item={item} />
      </Modal>
    </>
  );
}
