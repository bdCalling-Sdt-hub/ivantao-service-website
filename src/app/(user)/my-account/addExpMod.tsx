"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import Addexp from "./addexp";

export default function AddExpMod() {
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
        className="bg-[#E9DABB] font-bold px-12 py-6 hover:!bg-[#b6a88c] hover:!text-background !border-none"
        size="large"
      >
        Add more
      </Button>

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
        <Addexp />
      </Modal>
    </>
  );
}
