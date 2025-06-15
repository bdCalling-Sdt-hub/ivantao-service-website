"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import AddCatForm from "./add-cat-form";
export default function AddCat() {
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
      <div className="w-full grid md:grid-cols-4 gap-4">
        <Button
          onClick={showModal}
          type="primary"
          htmlType="submit"
          size="large"
          className="mt-8 py-6 text-lg px-8 bg-[#7849D4] hover:!bg-[#533392] text-background font-bold "
          variant="filled"
        >
          + Add Item
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <AddCatForm />
      </Modal>
    </>
  );
}
