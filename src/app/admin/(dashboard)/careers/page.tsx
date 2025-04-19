import React from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Input, Select } from "antd";
import { Search } from "lucide-react";
import CareerTable from "@/components/ui/career-table";
import AddJob from "./add-job";
import { cookies } from "next/headers";
import { getFetcher } from "@/lib/simplifier";

export default async function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get("raven")?.value;

  const call = await getFetcher({ link: "/list-career", token: token });

  if (!call.status) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        {call.message}
      </div>
    );
  }
  const data = call.data.data;

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
          placeholder="Search Career"
        />
        <Select
          placeholder="Sort by"
          style={{ width: 120 }}
          // onChange={handleChange}
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
          <AddJob />
        </div>
      </div>
    </div>
  );
}
