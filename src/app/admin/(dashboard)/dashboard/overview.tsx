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

  function getTrendInfo(increase: number) {
    const isIncrease = increase > 0;
    return {
      icon: isIncrease ? (
        <TrendingUpIcon size={18} className="text-green-600" />
      ) : (
        <TrendingDownIcon size={18} className="text-red-600" />
      ),
      trendText: isIncrease ? "increase" : "decrease",
    };
  }

  const trend = getTrendInfo(buyerData.increase);

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
          options={[
            { value: "weekly", label: "Weekly" },
            { value: "monthly", label: "Monthly" },
            { value: "yearly", label: "Yearly" },
          ]}
        />
      </div>
      <p className="text-sm text-gray-400">Activities summary at a glance</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Total Buyers",
            icon: <User2Icon size={20} />,
          },
          {
            title: "Transactions",
            icon: <BanknoteIcon size={20} />,
          },
          {
            title: "Revenue",
            icon: <BarChartBigIcon size={20} />,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="p-4 flex flex-col justify-around items-start rounded-xl border border-gray-300 bg-white shadow-sm"
          >
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-row items-center gap-3">
                <Title className="!m-0" level={1}>
                  {formatNumber(buyerData.totalBuyers)}
                </Title>
                {trend.icon}
              </div>
              <div className="p-2 rounded-lg bg-gray-200">{card.icon}</div>
            </div>
            <p className="font-semibold text-base">{card.title}</p>
            <p className="text-gray-400 text-xs">
              {formatNumber(Math.abs(buyerData.increase / 1000))}k{" "}
              {trend.trendText} than {buyerData.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
