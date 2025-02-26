"use client";
import React from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button, Input, Select, Table, TableProps } from "antd";
import {
  CalendarRangeIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
  TrashIcon,
} from "lucide-react";
// import UPTable from "@/components/ui/up-table";

export default function Page() {
  const cols: TableProps["columns"] = [
    {
      title: "Date & Time",
      dataIndex: "date_time",
      key: "date_time",
      render: (texts) => (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <CalendarRangeIcon className="size-5" />
            <span>{texts?.date ?? "N/A"}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Clock className="size-5" />
            <span>{texts?.time ?? "N/A"}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => (
        <div className="flex flex-col justify-center items-start">
          <a>{text ?? "N/A"}</a>
        </div>
      ),
    },
    {
      title: "Action",
      // dataIndex: "email",
      // key: "email",
      render: () => (
        <div className="flex flex-col justify-center items-start">
          <Button
            className="size-10 !bg-red-50 !border-none !p-0"
            variant="filled"
            danger
          >
            <TrashIcon className="size-5" />
          </Button>
        </div>
      ),
    },
  ];
  const data = [
    {
      date_time: { date: "22-02-2025", time: "05:50 PM" },
      email: "example@gmail.com",
    },
    {
      date_time: { date: "22-02-2025", time: "05:50 PM" },
      email: "example@gmail.com",
    },
    {
      date_time: { date: "22-02-2025", time: "05:50 PM" },
      email: "example@gmail.com",
    },
  ];
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex flex-col h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Newsletter
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
          placeholder="Search User"
        />
        <Select
          placeholder="Filter"
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
        <Table columns={cols} dataSource={data} />
      </div>
      <div className="border-t border-black pt-4 flex flex-row justify-between items-center">
        <div className="">Showing 10 user details</div>
        <div className="flex flex-row justify-center items-center gap-2">
          <Button shape="circle">
            <ChevronLeft />
          </Button>
          <Button shape="circle">1</Button>
          <Button shape="circle">2</Button>
          <Button shape="circle">3</Button>
          <Button shape="circle">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
