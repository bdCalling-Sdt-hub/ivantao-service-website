"use client";
import { StarFilled } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Input, Modal, Rate } from "antd";
import Title from "antd/es/typography/Title";

export default function ReviewMod() {
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
        className="!text-background bg-[#7849D4] hover:!bg-[#553499]"
        type="primary"
      >
        <StarFilled /> Make a review
      </Button>
      <Modal
        closeIcon={null}
        title={
          <Title className="!m-0 text-center" level={3}>
            Add your rating and review
          </Title>
        }
        footer={
          <div className="flex justify-end items-end gap-4">
            <Button
              onClick={handleCancel}
              className="hover:!border-[#7849D4] hover:!text-[#7849D4] px-6"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              className="bg-[#7849D4] hover:!bg-[#59379e] hover:!text-background px-6"
              onClick={handleOk}
            >
              Submit
            </Button>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="p-4 py-8 flex flex-col justify-center items-center">
          <Rate style={{ fontSize: 34 }} />
          <p className="py-4 text-base text-gray-300">Tap to add your rating</p>
        </div>
        <Input.TextArea
          rows={5}
          className="!resize-none p-2"
          placeholder="Add your review"
        />
      </Modal>
    </>
  );
}
