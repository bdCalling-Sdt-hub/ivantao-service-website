"use client";
import React from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button, Input, Select } from "antd";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import ListingTable from "@/components/ui/listing-table";

export default function Page() {
  const data = [
    {
      pvName: "Md. Abid",
      service: "Cooking",
      category: "In person",
      date: "20-01-2025",
    },
    {
      pvName: "Md. Abid",
      service: "Cooking",
      category: "Virtual",
      date: "20-01-2025",
    },
  ];
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex flex-col min-h-screen md:h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Listing Reportings
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
          className="w-1/2 md:w-1/3 !border-none"
          size="large"
          placeholder="Search service"
        />
        <Select
          placeholder="Filter"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "newest", label: "Newsest" },
            { value: "name", label: "Name" },
            { value: "in_person", label: "In person" },
          ]}
          className="!bg-transparent !border-black"
        />
      </div>
      <div className="flex-grow w-full overflow-y-auto">
        <ListingTable data={data} />
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
