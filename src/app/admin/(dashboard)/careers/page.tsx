"use client";
import React from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button, Input, Select } from "antd";
import { Search } from "lucide-react";
import CareerTable from "@/components/ui/career-table";

export default function Page() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const data = [
    {
      title: "UI-UX Design",
      category: "Design",
      start: "15-01-2025",
      end: "31-01-2025",
      applicants: 553,
      link: "/admin/careers/applicants",
    },
    {
      title: "Graphic Design",
      category: "Design",
      start: "15-01-2025",
      end: "31-01-2025",
      applicants: 553,
      link: "/admin/careers/applicants",
    },
    {
      title: "React Native",
      category: "Development",
      start: "15-01-2025",
      end: "31-01-2025",
      applicants: 553,
      link: "/admin/careers/applicants",
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Careers
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
        <CareerTable data={data} />
        <div className="pt-8">
          <Button
            className="w-full md:w-[300px] bg-[#7849D4] hover:!bg-[#533392] !border-none !text-background"
            size="large"
          >
            + Add new
          </Button>
        </div>
      </div>
    </div>
  );
}
