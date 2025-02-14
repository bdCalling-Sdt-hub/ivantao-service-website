"use client";
import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";
import { useRouter } from "next/navigation";

interface breadType {
  href?: string;
  title: React.ReactNode;
}

export default function BreadcrumbReady({ breads }: { breads: breadType[] }) {
  const nav = useRouter();

  return (
    <div className="flex flex-row justify-center md:justify-start items-center gap-4 md:gap-6 py-4 md:py-6 px-4 md:px-0">
      <Button
        className="!rounded-full h-9 w-9"
        onClick={() => {
          nav.back();
        }}
      >
        <ArrowLeftOutlined />
      </Button>
      <Breadcrumb
        separator={" / "}
        items={breads}
        className="font-semibold text-sm sm:text-base md:text-xl !gap-x-2 md:!gap-x-12"
      />
    </div>
  );
}
