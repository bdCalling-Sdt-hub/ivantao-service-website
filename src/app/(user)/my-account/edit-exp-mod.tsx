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
        shape="round"
        onClick={showModal}
        size="large"
        className="h-12 w-12 text-green-600"
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
              className="w-full bg-[#E9DABB] hover:!bg-[#b8aa8f] hover:!text-background border-none"
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
