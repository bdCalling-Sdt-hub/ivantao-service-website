"use client";
import DashTitle from "@/components/ui/dash-title";
import DeletePopover from "@/components/ui/delete-popover";
import { CheckCircleFilled } from "@ant-design/icons";
import { Avatar, Button, Modal, Table, TableProps } from "antd";
import Title from "antd/es/typography/Title";
import { Check } from "lucide-react";
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
        <div className="px-4 py-2 bg-[#F5F1FC] w-min rounded-full">{text}</div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <>
          <div className="flex flex-row justify-start items-center gap-3">
            <Button
              onClick={showModal}
              type="primary"
              className="p-2 bg-green-300 hover:!bg-green-600 !text-green-700"
            >
              {text}
            </Button>
            <DeletePopover
              messaged="Are you sure delete this offer ?"
              type={"custom-order"}
              id={record.id} // 🟢 here you use the row's ID
            />
          </div>
          <Modal
            title={null}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon={null}
            footer={
              <Button
                size="large"
                onClick={handleOk}
                className="bg-green-500 hover:!bg-green-600 !text-background w-full !border-none"
              >
                Okay
              </Button>
            }
          >
            <div className="h-[200px] w-full flex flex-col justify-center items-center gap-6">
              <CheckCircleFilled className="text-green-500 text-6xl" />
              <p className="text-2xl text-green-500 font-semibold">
                Offer accepted
              </p>
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
      status: "Pending",
      // provider: "lol",
      action: <Check key={23} size={16} />,
    },
    {
      key: 2,
      uname: "Seikh Alib",
      sname: "Cleaning like a pro.",
      price: "$454.00",
      status: "Pending",
      // provider: "lol",
      action: <Check key={23} size={16} />,
    },
    {
      key: 3,
      uname: "Seikh Alib",
      sname: "Cleaning like a pro.",
      price: "$454.00",
      status: "Pending",
      // provider: "lol",
      action: <Check key={23} size={16} />,
    },
    {
      key: 4,
      uname: "Seikh Alib",
      sname: "Cleaning like a pro.",
      price: "$454.00",
      status: "Pending",
      // provider: "lol",
      action: <Check key={23} size={16} />,
    },
    {
      key: 5,
      uname: "Seikh Alib",
      sname: "Cleaning like a pro.",
      price: "$454.00",
      status: "Pending",
      // provider: "lol",
      action: <Check key={23} size={16} />,
    },
  ];
  return (
    <main className="flex flex-col md:h-screen w-full px-4 md:px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Custom Order
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="">
        <div className="w-full py-2 px-4 bg-[#7849D4] !text-background text-base rounded-t-lg">
          Custom offers
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </main>
  );
}
