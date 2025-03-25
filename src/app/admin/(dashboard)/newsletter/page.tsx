"use client";
import React, { useEffect, useState } from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button, Input, Select, Table, TableProps, Spin, message } from "antd";
import {
  CalendarRangeIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
  TrashIcon,
} from "lucide-react";
import { getFetcher, deleteFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { newsLetter } from "@/types/others";

export default function Page() {
  const [cookies] = useCookies(["raven"]);
  const [newsletterList, setNewsletterList] = useState<newsLetter[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNewsletterList = async (selectedFilter = "") => {
    setLoading(true);
    try {
      const link = selectedFilter
        ? `/subscribe-list?filter=${selectedFilter}`
        : "/subscribe-list";
      const call = await getFetcher({ link, token: cookies.raven });
      setNewsletterList(call.data.data);
    } catch (error) {
      message.error("Failed to fetch newsletter list");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    try {
      await deleteFetcher({
        link: `/subscribe-delete/${id}`,
        token: cookies.raven,
      });
      message.success("Newsletter subscription deleted successfully");
      fetchNewsletterList(filter); // Refresh the list
    } catch (error) {
      message.error("Failed to delete newsletter subscription");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsletterList();
  }, []);

  const handleChange = (value: string) => {
    setFilter(value);
    fetchNewsletterList(value);
  };

  const cols: TableProps<newsLetter>["columns"] = [
    {
      title: "Date & Time",
      dataIndex: "date_time",
      key: "date_time",
      render: (_, record) => (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <CalendarRangeIcon className="size-5" />
            <span>{record.date ?? "N/A"}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Clock className="size-5" />
            <span>{record.time ?? "N/A"}</span>
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
      render: (_, record) => (
        <div className="flex flex-col justify-center items-start">
          <Button
            className="size-10 !bg-red-50 !border-none !p-0"
            variant="filled"
            danger
            onClick={() => handleDelete(record.id)}
          >
            <TrashIcon className="size-5" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Newsletter
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can manage newsletter
          subscriptions.
        </p>
      </DashTitle>
      <div className="py-2 flex flex-row justify-between items-center">
        <Input
          suffix={
            <Search className="text-xl text-gray-400 hover:text-gray-500 cursor-pointer transition-colors" />
          }
          className="w-1/3 !border-none"
          size="large"
          placeholder="Search Email"
        />
        <Select
          placeholder="Filter"
          value={filter || undefined}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "email", label: "Email" },
            { value: "date", label: "Date" },
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
          <Table columns={cols} dataSource={newsletterList} rowKey="id" />
        )}
      </div>
      <div className="border-t border-black pt-4 flex flex-row justify-between items-center">
        {newsletterList ? (
          <div className="">Showing {newsletterList.length} subscriptions</div>
        ) : (
          ""
        )}
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
