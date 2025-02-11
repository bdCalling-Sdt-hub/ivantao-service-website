"use client";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";

export default function Exp() {
  const exps = [
    {
      jobTitle: "Business Development Executive",
      employmentType: "On-site",
      company: "bdCalling IT LTD",
      startDate: "Dec 2020",
      endDate: "June 2023",
    },
    {
      jobTitle: "Business Development Executive",
      employmentType: "On-site",
      company: "bdCalling IT LTD",
      startDate: "Dec 2020",
      endDate: "June 2023",
    },
  ];
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
    <div className="py-12">
      <Title level={4}>Experience & Qualifications</Title>
      <div className="py-12 space-y-6">
        {exps.map((item, index) => (
          <div
            key={item.jobTitle + index}
            className="py-6 px-8 bg-background rounded-xl flex flex-row justify-between items-center"
          >
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-row justify-start items-start gap-4">
                <Title level={5}>{item.jobTitle}</Title>
                <p>({item.employmentType})</p>
              </div>
              <div className="space-x-2 flex flex-row justify-start items-start">
                <p className="font-semibold">bdCalling IT LTD</p>{" "}
                <p className="text-gray-400">Dec 2020 - June 2023</p>
              </div>
            </div>
            <div className="flex flex-row justify-end items-center gap-4">
              <Button
                shape="round"
                size="large"
                className="h-12 w-12 text-green-600"
              >
                <EditOutlined />
              </Button>
              <Button
                shape="round"
                size="large"
                className="h-12 w-12 text-red-500"
              >
                <DeleteOutlined />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <Button
          onClick={showModal}
          className="bg-[#E9DABB] font-bold px-12 py-6 hover:!bg-[#b6a88c] hover:!text-background !border-none"
          size="large"
        >
          Add more
        </Button>

        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="p-6">
            {" "}
            <Title level={4} className="text-center">
              Add your experience
            </Title>
          </div>
        </Modal>
      </div>
    </div>
  );
}
