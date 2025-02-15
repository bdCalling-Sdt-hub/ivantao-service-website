"use client";
import React from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button, Input, Select } from "antd";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import UPTable from "@/components/ui/up-table";

export default function Page() {
  const data = [
    {
      sr: 1, // You can add sr if needed, but it's not in the image
      name: "Md. Abid Hasan", // From "Name"
      email: "example@gmail.com", // From "Email"
      contact: "+93215789654", // From "Contact"
      id: "#5689758", // From "User ID"
      brought: "23", // From "Bought product" (assuming this means quantity)
      address: "New work", // From "Address"
    },
    {
      sr: 2, // You can add sr if needed, but it's not in the image
      name: "Md. Abid Hasan", // From "Name"
      email: "example@gmail.com", // From "Email"
      contact: "+93215789654", // From "Contact"
      id: "#5689758", // From "User ID"
      brought: "23", // From "Bought product" (assuming this means quantity)
      address: "New work", // From "Address"
    },
    {
      sr: 3, // You can add sr if needed, but it's not in the image
      name: "Md. Abid Hasan", // From "Name"
      email: "example@gmail.com", // From "Email"
      contact: "+93215789654", // From "Contact"
      id: "#5689758", // From "User ID"
      brought: "23", // From "Bought product" (assuming this means quantity)
      address: "New work", // From "Address"
    },
  ];
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex flex-col h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Providers
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
        <UPTable data={data} provider />
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
