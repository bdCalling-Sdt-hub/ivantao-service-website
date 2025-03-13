import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import EditExp from "./editexp";

export default function EditExpMod() {
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
        shape="circle"
        onClick={showModal}
        // size="large"
        className="h-8 w-8 md:h-12 md:w-12 text-green-600"
      >
        <EditOutlined />
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
              className="w-full !bg-[#7849D4] hover:bg-[#50308f] !text-background border-none"
            >
              Save
            </Button>
          </div>,
        ]}
      >
        <EditExp />
      </Modal>
    </>
  );
}
