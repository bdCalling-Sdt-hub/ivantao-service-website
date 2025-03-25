"use client";
import React, { useEffect, useState } from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button, Input, Select, Spin, message } from "antd";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import ListingTable from "@/components/ui/listing-table";
import { getFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { ReportType } from "@/types/others";

export default function Page() {
  const [cookies] = useCookies(["raven"]);
  const [reportList, setReportList] = useState<ReportType[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchReportList = async (selectedFilter = "") => {
    setLoading(true);
    try {
      const link = selectedFilter
        ? `/reportlist?filter=${selectedFilter}`
        : "/reportlist";
      const call = await getFetcher({ link: link, token: cookies.raven });

      setReportList(call.data.data);
    } catch (error) {
      message.error("Failed to fetch report list");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReportList();
  }, []);

  const handleChange = (value: string) => {
    setFilter(value);
    fetchReportList(value);
  };

  return (
    <div className="flex flex-col min-h-screen md:h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Listing Reportings
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can view and manage listing
          reports.
        </p>
      </DashTitle>
      <div className="py-2 flex flex-row justify-between items-center">
        <Input
          suffix={
            <Search className="text-xl text-gray-400 hover:text-gray-500 cursor-pointer transition-colors" />
          }
          className="w-1/2 md:w-1/3 !border-none"
          size="large"
          placeholder="Search report"
        />
        <Select
          placeholder="Filter"
          value={filter || undefined}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "reportId", label: "Report ID" },
            { value: "serviceName", label: "Service Name" },
            { value: "reporterName", label: "Reporter Name" },
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
          <ListingTable data={reportList} />
        )}
      </div>
      <div className="border-t border-black pt-4 flex flex-row justify-between items-center">
        <div className="">Showing {reportList.length} report details</div>
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
