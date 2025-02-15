"use client";

import { EyeFilled } from "@ant-design/icons";
import { Avatar, Button, Modal } from "antd";
import React, { useState } from "react";

export default function ViewUser() {
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

  const userData = {
    name: "Md. Abid Hasan",
    email: "example@gmail.com",
    contact: "+93215789654",
    userId: "#5689758",
    boughtProduct: "23",
    address: "New work",
  };

  return (
    <>
      <Button className="border-none bg-orange-100 !p-2" onClick={showModal}>
        <EyeFilled className="text-xl text-[#F96D10]" />
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div key={102} className="w-full">
            <Button
              className="w-full bg-[#D5C19C] hover:!bg-[#928469] !text-background"
              size="large"
              type="primary"
              onClick={handleCancel}
            >
              CLOSE
            </Button>
          </div>,
        ]} // Remove default footer buttons
      >
        <div className="py-4 flex flex-col justify-center items-strech w-full">
          <div className="flex justify-center items-center w-full">
            <Avatar className="h-[100px] w-[100px] " shape="square" />
          </div>
          <div className="user-info text-base space-y-4 pt-12">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">Name</p>
              <p>{userData.name}</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">Email</p>
              <p>{userData.email}</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">Contact</p>
              <p>{userData.contact}</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">User ID</p>
              <p>{userData.userId}</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">Bought Product</p>
              <p>{userData.boughtProduct}</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">Address</p>
              <p>{userData.address}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
