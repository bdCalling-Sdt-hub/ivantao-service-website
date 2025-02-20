import { Button } from "antd";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function ApplyButton({ to }: { to?: string }) {
  return (
    <Button
      href={to}
      shape="round"
      className="relative bg-[#FFF5E3] border-none overflow-hidden font-bold !text-sm md:!text-base group hover:!text-black"
    >
      <span className="flex flex-row justify-center items-center z-30 group-hover:!text-background transition-colors duration-500">
        Apply <ArrowUpRight />
      </span>
      <div className=" group-hover:-right-1 group-hover:-bottom-1 group-hover:h-[140%] group-hover:w-[110%] transition-all duration-500 absolute -right-5 -bottom-5 h-10 w-10 rounded-full bg-[#88744F]"></div>
    </Button>
  );
}
