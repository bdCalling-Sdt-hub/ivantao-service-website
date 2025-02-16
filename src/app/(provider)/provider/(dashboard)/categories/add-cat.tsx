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
          className="mt-8 py-8 text-lg px-8 bg-[#C5AD81] text-backgroundfont-bold hover:!bg-[#C4A77D]"
          variant="filled"
        >
          + Add Item
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div
            key={10}
            className="w-full h-auto flex flex-row justify-center items-center px-[7%]"
          >
            <Button
              size="large"
              className="w-full bg-[#E9DABB] hover:!bg-[#b8aa8f] hover:!text-background border-none"
            >
              Save
            </Button>
          </div>,
        ]}
      >
        <AddCatForm />
      </Modal>
    </>
  );
}
