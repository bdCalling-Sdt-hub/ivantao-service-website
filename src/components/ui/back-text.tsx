"use client";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackText({
  text,
  butt,
}: {
  text: string;
  butt?: boolean;
}) {
  const navig = useRouter();
  return (
    <div className="w-full flex flex-row justify-start items-center gap-4 py-6">
      <Button
        shape="circle"
        className={
          butt
            ? "!border-none !bg-gray-200"
            : "!border-none !outline-none !bg-gray-200"
        }
        onClick={() => {
          navig.back();
        }}
      >
        <LeftOutlined className="cursor-pointer" />
      </Button>
      <span className="text-xl font-bold">{text}</span>
    </div>
  );
}
