"use state";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { SearchIcon } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Search({
  func,
}: {
  func?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="w-full md:w-full px-4 py-2 rounded-full flex flex-row justify-between items-center bg-[#F1F1F1]">
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
