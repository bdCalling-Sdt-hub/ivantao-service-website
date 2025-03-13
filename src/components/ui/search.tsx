"use state";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { SearchIcon } from "lucide-react";
import React from "react";

export default function Search({
  func,
  className,
  ...props
}: {
  func?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) {
  return (
    <div
      className={`px-6 lg:px-0 lg:pl-8 w-full flex flex-row justify-between items-center ${className}`}
      {...props}
    >
      <div className="w-full md:w-full px-4 py-2 rounded-full flex flex-row justify-between items-center bg-[#F0E8FF]">
        <input
          placeholder="Search"
          className="w-full outline-none bg-transparent"
        />
        <div className="text-gray-500 cursor-pointer">
          <SearchIcon />
        </div>
      </div>
      {func ? (
        <div className="flex md:hidden ml-8 flex-shrink-0">
          <Button
            shape="circle"
            className="z-50"
            onClick={() => func(false)}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <CloseOutlined />
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
