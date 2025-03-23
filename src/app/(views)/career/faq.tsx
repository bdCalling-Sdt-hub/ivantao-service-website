"use client";
import { Collapse, CollapseProps } from "antd";
import Title from "antd/es/typography/Title";
import { ChevronDown } from "lucide-react";
import React from "react";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

export default function Faq() {
  return (
    <div className="flex flex-col py-12 justify-center items-center">
      <Title>FAQ</Title>
      <div className="w-full lg:w-2/3">
        <Collapse
          className="!bg-inherit"
          ghost
          bordered={false}
          expandIcon={({ isActive }) => (
            <div className="bg-zinc-100 rounded-full p-1">
              <ChevronDown rotate={isActive ? 90 : 0} />
            </div>
          )}
          expandIconPosition="end"
          accordion
          items={items}
          size="large"
        />
      </div>
    </div>
  );
}
