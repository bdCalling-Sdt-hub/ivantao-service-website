"use client";
import DashTitle from "@/components/ui/dash-title";
import { Avatar, Button, Modal, Radio, Table, TableProps } from "antd";
import Title from "antd/es/typography/Title";
import { PencilLineIcon } from "lucide-react";
import React, { useState } from "react";

export default function Page() {
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

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  };

  const columns: TableProps["columns"] = [
    {
      title: "User name",
      dataIndex: "uname",
      key: "uname",
      render: (text) => (
        <div className="gap-2 flex flex-row justify-start items-center">
          <Avatar /> <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Service name",
      dataIndex: "sname",
      key: "sname",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    // {
    //   title: "Provider",
    //   dataIndex: "provider",
    //   key: "provider",
    // },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <div className="px-4 py-2 bg-[#FEF2F2] w-min rounded-full">{text}</div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text) => (
        <>
          <Button
            onClick={showModal}
            type="text"
            className="px-4 py-2 !text-black w-min"
          >
            {text}
          </Button>
          <Modal
            title="Change Status"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon={null}
            footer={
              <Button
                size="large"
                onClick={handleOk}
                className="bg-[#7849D4] hover:!bg-[#533392] !text-background w-full !border-none"
              >
                Done
              </Button>
            }
          >
            <div className="p-4">
              <Radio.Group
                style={style}
                options={[
                  { value: 1, label: "Pending" },
                  { value: 2, label: "Completed" },
                  { value: 3, label: "Canceled" },
                ]}
              />
            </div>
          </Modal>
        </>
      ),
    },
  ];
  const data = [
    {
      key: 1,
      uname: "Seikh Alib",
      sname: "Cleaning like a pro.",
      price: "$454.00",
      status: "Canceled",
      // provider: "lol",
      action: <PencilLineIcon size={16} />,
    },
  ];
  return (
    <main className="flex flex-col md:h-screen w-full px-4 md:px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          List of your order
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="">
        <Table columns={columns} dataSource={data} />
      </div>
    </main>
  );
}
