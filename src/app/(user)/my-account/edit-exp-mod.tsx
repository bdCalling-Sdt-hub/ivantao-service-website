import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import EditExp from "./editexp";
import { experienceType } from "@/types/others";

export default function EditExpMod({
  id,
  token,
  item,
}: {
  id: string;
  token: string;
  item: experienceType;
}) {
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
        footer={null}
      >
        <EditExp id={id} token={token} item={item} />
      </Modal>
    </>
  );
}
