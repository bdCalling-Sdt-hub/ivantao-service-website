"use client";
import { EditOutlined } from "@ant-design/icons";
import { Button, Modal, Space, TimePicker } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";

export default function WorkingHrs() {
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
  const dailyHours = [
    { from: "8am", to: "1pm" },
    { from: "2pm", to: "7pm" },
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
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Title level={4} className="!m-0">
            Weekly - <span className="font-semibold">6 days</span>
          </Title>
        </div>
        <div>
          <Button
            icon={<EditOutlined />}
            onClick={showModal}
            shape="circle"
            size="large"
            className="text-gray-500"
          />
          <Modal
            title={null}
            footer
            closeIcon={null}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="p-2 bg-blue-500 text-xl font-bold text-background text-center rounded-lg">
              Weekly
            </div>
            <div className="flex flex-row justify-center items-center gap-4 flex-wrap mb-4 py-8">
              {days.map((day) => (
                <Button
                  key={day}
                  className="rounded-full border-2 border-black px-3 py-3 text-sm font-medium h-12 w-12 flex justify-center items-center"
                >
                  {day}
                </Button>
              ))}
            </div>
            <div className="p-2 bg-blue-500 text-xl font-bold text-background text-center rounded-lg">
              Daily
            </div>
            <div className="grid grid-cols-2 gap-6 py-4">
              <TimePicker size="large" placeholder="Start time" />
              <TimePicker size="large" placeholder="End time" />
            </div>
            <div className="grid grid-cols-6 gap-6 pt-12">
              <Button
                size="large"
                className="col-span-2"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                variant="filled"
                size="large"
                className="col-span-4"
                onClick={handleOk}
              >
                Save Changes
              </Button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="flex flex-row gap-4 flex-wrap mb-4">
        {days.map((day) => (
          <div
            key={day}
            className="rounded-full border-2 border-black px-3 py-3 text-sm font-medium h-12 w-12 flex justify-center items-center"
          >
            {day}
          </div>
        ))}
      </div>
      <div>
        <div className="mb-2">
          <span className="font-medium">Daily - 10 hours</span>
        </div>
        <Space>
          {/* Use Space for consistent spacing between buttons */}
          {dailyHours.map((hours, index) => (
            <Button
              key={index}
              size="large"
              className="bg-background border-2 border-black text-gray-700 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200"
            >
              {hours.from} - {hours.to}
            </Button>
          ))}
        </Space>
      </div>
    </div>
  );
}
