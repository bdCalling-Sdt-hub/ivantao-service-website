"use client";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

import AddExpMod from "./addExpMod";
import EditExpMod from "./edit-exp-mod";

export default function Exp() {
  const exps = [
    {
      jobTitle: "Business Development Executive",
      employmentType: "On-site",
      company: "bdCalling IT LTD",
      startDate: "Dec 2020",
      endDate: "June 2023",
    },
    {
      jobTitle: "Business Development Executive",
      employmentType: "On-site",
      company: "bdCalling IT LTD",
      startDate: "Dec 2020",
      endDate: "June 2023",
    },
  ];

  return (
    <div className="py-12">
      <Title level={4}>Experience & Qualifications</Title>
      <div className="py-12 space-y-6">
        {exps.map((item, index) => (
          <div
            key={item.jobTitle + index}
            className="py-6 px-8 bg-background rounded-xl flex flex-row justify-between items-center"
          >
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-row justify-start items-start gap-4">
                <Title level={5}>{item.jobTitle}</Title>
                <p>({item.employmentType})</p>
              </div>
              <div className="space-x-2 flex flex-row justify-start items-start">
                <p className="font-semibold">bdCalling IT LTD</p>
                <p className="text-gray-400">Dec 2020 - June 2023</p>
              </div>
            </div>
            <div className="flex flex-row justify-end items-center gap-4">
              <EditExpMod />
              <Button
                shape="round"
                size="large"
                className="h-12 w-12 text-red-500"
              >
                <DeleteOutlined />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <AddExpMod />
      </div>
    </div>
  );
}
