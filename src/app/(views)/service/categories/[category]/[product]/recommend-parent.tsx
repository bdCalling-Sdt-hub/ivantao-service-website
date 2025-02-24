"use client";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button, Switch } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import Recommends from "./recommends";

export default function RecommendParent() {
  const [rec, setRec] = useState<boolean>(true);

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center">
        <Title className="!m-0 !text-base md:!text-2xl" level={3}>
          Recommended for you
        </Title>
        <div className="hidden lg:flex flex-row justify-end items-center gap-2">
          <Button className="rounded-full h-9 w-9 border-2 border-[#D5C19C]">
            <CaretLeftOutlined />
          </Button>
          <Button className="rounded-full h-9 w-9 bg-[#D5C19C]">
            <CaretRightOutlined />
          </Button>
        </div>
        {/* For mobile, switch to toggle recommendations */}
        <div className="flex lg:hidden flex-row justify-end items-center gap-2">
          <Switch
            checked={rec}
            onChange={setRec}
            checkedChildren="Open"
            unCheckedChildren="Close"
            defaultChecked
          />
        </div>
      </div>
      {rec && (
        <div className="rounded-xl md:p-8 bg-background mt-6 w-full overflow-x-auto">
          <div className="flex flex-nowrap md:grid grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6">
            <Recommends />
          </div>
        </div>
      )}
    </>
  );
}
