import DashTitle from "@/components/ui/dash-title";
import { Table } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

export default function Page() {
  const columns = [
    {
      title: "User name",
      dataIndex: "uname",
      key: "uname",
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
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
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
        <Table columns={columns} />
      </div>
    </main>
  );
}
