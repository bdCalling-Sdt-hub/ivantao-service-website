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

export default function Overview() {
  const buyerData = {
    totalBuyers: 37000,
    increase: 500, // Can be positive or negative
    period: "last 7 days", // Could be "last 30 days", etc.
  };
  function formatNumber(number: number) {
    return number.toLocaleString();
  }

  // Function to determine trend icon and color
  function getTrendInfo(increase: number) {
    const isIncrease = increase > 0;
    const icon = isIncrease ? (
      <TrendingUpIcon size={18} className="text-green-600" />
    ) : (
      <TrendingDownIcon size={18} className="text-red-600" />
    );
    const trendText = isIncrease ? "increase" : "decrease";
    return { icon, trendText };
  }

  // Get trend details
  const trend = getTrendInfo(buyerData.increase);

  return (
    <>
      <div className="flex flex-row justify-between items-center w-full">
        <Title className="!m-0" level={4}>
          Overview
        </Title>
        <Select
          style={{ width: 120, border: "none" }}
          popupMatchSelectWidth={false}
          placement="bottomRight"
          defaultValue="weekly"
          variant="borderless"
          className="!border-none w-min"
          options={[
            {
              value: "weekly",
              label: "Weekly",
            },
            {
              value: "monthly",
              label: "Monthly",
            },
            {
              value: "yearly",
              label: "Yearly",
            },
          ]}
        />
      </div>
      <p className="text-sm text-gray-400">Activities summary at a glance</p>
      <div className="w-full grid grid-cols-3 flex-grow gap-6">
        {/* First Card */}
        <div className="h-full w-full px-4 flex flex-col justify-around items-start rounded-xl border-[#A8A8A8] border">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-row justify-start items-center gap-3">
              <Title className="!m-0" level={1}>
                {formatNumber(buyerData.totalBuyers)}
              </Title>
              {trend.icon}
            </div>
            <div className="p-2 rounded-lg bg-gray-200 w-min">
              <User2Icon size={20} />
            </div>
          </div>
          <p className="font-semibold text-base">Total buyer</p>
          <p className={`text-gray-400 text-xs`}>
            {formatNumber(Math.abs(buyerData.increase / 1000))}k
            {trend.trendText} than {buyerData.period}
          </p>
        </div>
        {/* Second Card */}
        <div className="h-full w-full px-4 flex flex-col justify-around items-start rounded-xl border-[#A8A8A8] border">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-row justify-start items-center gap-3">
              <Title className="!m-0" level={1}>
                {formatNumber(buyerData.totalBuyers)}
              </Title>
              {trend.icon}
            </div>
            <div className="p-2 rounded-lg bg-gray-200 w-min">
              <BanknoteIcon size={20} />
            </div>
          </div>
          <p className="font-semibold text-base">Transactions</p>
          <p className={`text-gray-400 text-xs`}>
            {formatNumber(Math.abs(buyerData.increase / 1000))}k
            {trend.trendText} than {buyerData.period}
          </p>
        </div>
        {/* Last Card */}
        <div className="h-full w-full px-4 flex flex-col justify-around items-start rounded-xl border-[#A8A8A8] border">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-row justify-start items-center gap-3">
              <Title className="!m-0" level={1}>
                {formatNumber(buyerData.totalBuyers)}
              </Title>
              {trend.icon}
            </div>
            <div className="p-2 rounded-lg bg-gray-200 w-min">
              <BarChartBigIcon size={20} />
            </div>
          </div>
          <p className="font-semibold text-base">Transactions</p>
          <p className={`text-gray-400 text-xs`}>
            {formatNumber(Math.abs(buyerData.increase / 1000))}k
            {trend.trendText} than {buyerData.period}
          </p>
        </div>
      </div>
    </>
  );
}
