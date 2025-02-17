"use client";
import { Button, Input, Modal } from "antd";
import React, { useState } from "react";

export default function BuyModal() {
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
        className="col-span-1 md:col-span-2 w-full hover:text-background font-bold"
        size="large"
        variant="outlined"
      >
        Make an offer
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="py-8 space-y-2">
          <p>Offer price</p>
          <Input
            placeholder="Enter your asking price"
            className="w-full !bg-background"
            size="large"
            type="number"
          />
          <div className="py-2 grid grid-cols-2 gap-6">
            <Button
              onClick={handleCancel}
              className="border-2 border-[#a5967a] hover:!border-red-500 hover:!text-red-500"
              size="large"
            >
              Cancel
            </Button>
            <Button
              href="/service/categories/categories/cleaning/payment"
              size="large"
              type="primary"
              className="bg-[#D5C19C] hover:!bg-[#a5967a] !border-none"
            >
              Send
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

// href={`/service/categories/categories`}
