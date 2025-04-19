"use client";
import React, { useEffect, useState } from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button, Input, Select, Spin, message } from "antd";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import UPTable from "@/components/ui/up-table";
import { getFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { UserType } from "@/types/userType"; // Assuming providers use the same UserType structure or create a ProviderType if needed

export default function Page() {
  const [cookies] = useCookies(["raven"]);
  const [providerList, setProviderList] = useState<UserType[]>([]); // Assuming ProviderType or UserType
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProviderList = async (selectedFilter = "") => {
    setLoading(true);
    try {
      const link = selectedFilter
        ? `/provider-list?filter=${selectedFilter}`
        : "/provider-list";
      const call = await getFetcher({ link, token: cookies.raven });
      setProviderList(call.data);
    } catch (error) {
      message.error("Failed to fetch provider list");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProviderList();
  }, []);

  const handleChange = (value: string) => {
    setFilter(value);
    fetchProviderList(value);
  };

  return (
    <div className="flex flex-col h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Providers
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can manage provider details and
          maintain business insights.
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
          placeholder="Filter"
          value={filter || undefined}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "name", label: "Name" },
            { value: "email", label: "Email" },
            { value: "id", label: "Provider ID" },
          ]}
          className="!bg-transparent !border-black"
        />
      </div>
      <div className="flex-grow w-full overflow-y-auto">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spin size="large" />
          </div>
        ) : (
          <UPTable
            data={providerList}
            provider={true}
            messageTo="/admin/chat"
          />
        )}
      </div>
      <div className="border-t border-black pt-4 flex flex-row justify-between items-center">
        <div className="">Showing {providerList.length} provider details</div>
        <div className="flex flex-row justify-center items-center gap-2">
          <Button shape="circle" disabled>
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
