"use client";
import { ProvDashboardType } from "@/types/dashboard";
import { Select } from "antd";
import Title from "antd/es/typography/Title";
import {
  BanknoteIcon,
  BarChartBigIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  User2Icon,
} from "lucide-react";
import React from "react";

type OverviewProps = {
  data: ProvDashboardType;
  refetcher: (arg1: string) => void;
};

export default function Overview({ data, refetcher }: OverviewProps) {
  if (!data) {
    return <div>Loading...</div>; // Or some other loading state
  }

  const dataSet = [
    {
      total: data.consumers.total,
      growth: data.consumers.growth,
      status: data.consumers.status,
      icon: User2Icon,
      title: "Total Buyers",
    },
    {
      total: data.transactions.total,
      growth: data.transactions.growth,
      status: data.transactions.status,
      icon: BarChartBigIcon,
      title: "Total Transactions",
    },
    {
      total: data.earnings.total,
      growth: data.earnings.growth,
      status: data.earnings.status,
      icon: BanknoteIcon,
      title: "Total Revenue",
    },
  ];

  function trending(x: string) {
    const isIncrease = x === "up";
    return {
      icon: isIncrease ? (
        <TrendingUpIcon size={18} className="text-green-600" />
      ) : (
        <TrendingDownIcon size={18} className="text-red-600" />
      ),
    };
  }

  return (
    <div className="w-full space-y-3">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3">
        <Title className="!m-0" level={4}>
          Overview
        </Title>
        <Select
          style={{ width: 120 }}
          popupMatchSelectWidth={false}
          placement="bottomRight"
          defaultValue="weekly"
          variant="borderless"
          className="!border-none w-min"
          onChange={(val) => refetcher(val)}
          options={[
            { value: "weekly", label: "Weekly" },
            { value: "monthly", label: "Monthly" },
            { value: "yearly", label: "Yearly" },
          ]}
        />
      </div>
      <p className="text-sm text-gray-400">Activities summary at a glance</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataSet.map((item, index) => (
          <div
            key={index}
            className="p-4 space-y-6 flex flex-col justify-around items-start rounded-xl border border-gray-300 bg-white shadow-sm"
          >
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-row items-center gap-3">
                <Title className="!m-0" level={1}>
                  {item.total}
                </Title>
                {trending(item.growth).icon}
              </div>
              <div className="p-2 rounded-lg bg-gray-200">
                <item.icon />
              </div>
            </div>
            <p className="font-semibold text-base">{item.title}</p>
            <p className="text-gray-400 text-xs">
              {item.growth && `${item.growth} than ${data.period}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
