"use client";
import React from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Input, Select, Table } from "antd";
import { Search } from "lucide-react";

export default function Page() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const columns = [
    {
      title: "Sr. no",
      dataIndex: "srno", // Assuming you'll have a serial number in your data
      key: "srno",
    },
    {
      title: "Applicants name",
      dataIndex: "name", // Keep the 'name' dataIndex
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email", // Assuming you'll have an 'email' field in your data
      key: "email",
    },
    {
      title: "Action",
      key: "action", // No dataIndex needed for action buttons/links
    },
  ];
  return (
    <main className="flex flex-col h-screen w-full px-8 py-8">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Appplicants
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="py-2 flex flex-row justify-between items-center">
        <Input
          suffix={
            <Search className="text-xl text-gray-400 hover:text-gray-500 cursor-pointer transition-colors" />
          }
          className="w-1/3 !border-none"
          size="large"
          placeholder="Search Provider"
        />
        <Select
          placeholder="Sort by"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "newest", label: "Name" },
            { value: "name", label: "Email" },
            { value: "in_person", label: "User ID " },
          ]}
          className="!bg-transparent !border-black"
        />
      </div>
      <div className="flex-grow w-full overflow-y-auto">
        <Table columns={columns} />
      </div>
    </main>
  );
}
