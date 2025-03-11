"use client";
import { Button, Modal } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";

export default function CongModal() {
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
        type="primary"
        htmlType="submit"
        className="w-full bg-[#7849D4] hover:!bg-[#5b38a1] px-8 py-6"
        size="large"
      >
        Pay $29.00
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        <div className="py-8 space-y-2">
          <Title className="text-center !m-0">
            <span className="!text-8xl">🎉</span> <br /> Congratulations! <br />{" "}
            Your purchase is done
          </Title>
          <p className="text-gray-400 text-xl text-center">
            Thank you for make purchase with us
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button
            href="/service/categories/categories/cleaning/order-summery"
            size="large"
            type="primary"
            className="bg-[#7849D4] hover:!bg-[#57349c] !text-background !border-none w-full text-xl font-semibold py-6"
          >
            Done
          </Button>
        </div>
      </Modal>
    </>
  );
}
