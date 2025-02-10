"use client";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackText({ text }: { text: string }) {
  const navig = useRouter();
  return (
    <div className="w-full flex flex-row justify-start items-center gap-2 py-6">
      <LeftOutlined
        className="cursor-pointer"
        onClick={() => {
          navig.back();
        }}
      />
      <span className="text-2xl font-bold">{text}</span>
    </div>
  );
}
