import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

export default function User() {
  return (
    <div className="flex flex-row justify-between items-start hover:bg-gray-50 cursor-pointer active:scale-95 transition-transform">
      <div className="w-full flex flex-row justify-start items-start gap-2 px-6 py-4">
        <div className="">
          <Avatar size="large" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <Title level={5} className="!m-0">
            Bill Kuphal
          </Title>
          <p className="text-ellipsis line-clamp-1 text-sm">
            The weather will be perfect for the announcement we're going to make
          </p>
        </div>
      </div>
      <div className="h-full flex flex-col justify-end items-end px-6 py-4">
        <p className="text-sm whitespace-nowrap font-semibold">9:41 AM</p>
      </div>
    </div>
  );
}
