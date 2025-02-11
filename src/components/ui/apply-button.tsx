import { Button } from "antd";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function ApplyButton({ to }: { to?: string }) {
  return (
    <Button
      href={to}
      shape="round"
      className="relative bg-[#FFF5E3] border-none overflow-hidden font-bold !text-sm md:!text-base"
    >
      Apply <ArrowUpRight />
      <div className="absolute -right-5 -bottom-5 h-10 w-10 rounded-full bg-[#88744F]"></div>
    </Button>
  );
}
