"use client";
import { Select } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { ChartPart } from "./chart-part";
import { ProvDashboardType } from "@/types/dashboard";

type OverviewProps = {
  data: ProvDashboardType;
};

export default function Chart({ data }: OverviewProps) {
  return (
    <div className="p-6 h-full flex flex-col justify-start items-start w-full">
      <div className="flex flex-row justify-between items-start w-full">
        <p className="text-lg text-gray-400">Statics Analytics</p>
        <Select
          style={{ width: 120 }}
          popupMatchSelectWidth={false}
          placement="bottomRight"
          defaultValue="revenue"
          variant="borderless"
          className="!border-none w-min"
          disabled
          options={[
            {
              value: "revenue",
              label: "Revenues",
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
      <Title className="!m-0 py-2">Revenues</Title>
      <div className="flex-grow w-full">
        <div className="h-[400px] w-full overflow-hidden">
          <ChartPart data={data} />
        </div>
      </div>
    </div>
  );
}
