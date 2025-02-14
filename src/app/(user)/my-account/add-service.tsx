"use client";
import { Button, Modal, Select } from "antd";
import React, { useState } from "react";

export default function AddService() {
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
  //select
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Button
        className="col-span-2 font-semibold"
        size="large"
        type="primary"
        onClick={showModal}
      >
        + Add new
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={[
          <div key={12} className="w-full pt-8">
            <div className="w-full text-center py-2 rounded-md bg-blue-600 text-background">
              Add new service
            </div>
          </div>,
        ]}
        footer={null}
      >
        <div className="w-full p-6 flex flex-col justify-start items-center">
          <Select
            placeholder="-select-"
            size="large"
            className="w-4/5"
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-6">
          <Button variant="outlined" size="large">
            Cancel
          </Button>
          <Button size="large" variant="filled" type="primary">
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
}
