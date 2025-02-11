"use client";
import React from "react";
import { Button, Dropdown, MenuProps } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowUpDown } from "lucide-react";

export default function Shop() {
  const items: MenuProps["items"] = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Price
        </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Date Posted
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newest
        </a>
      ),
      key: "2",
    },
  ];

  return (
    <section>
      <div className="px-[7%]">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Title level={2}>Just for you</Title>
          </div>
          <div>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button
                size="large"
                className="text-lg !outline-2 outline-black font-bold"
              >
                Sort by <ArrowUpDown />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </section>
  );
}
