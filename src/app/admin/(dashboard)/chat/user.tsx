import { UserType } from "@/types/userType";
import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

export default function User({
  data,
  reCall,
}: {
  data: UserType;
  reCall: (id: string) => Promise<void>;
}) {
  return (
    <div
      className="flex flex-row justify-between items-start hover:bg-gray-50 cursor-pointer active:scale-95 transition-transform"
      onClick={() => {
        reCall(data.id);
      }}
    >
      <div className="w-full flex flex-row justify-start items-start gap-2 px-6 py-4">
        <div className="">
          <Avatar size="large" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <Title level={5} className="!m-0">
            {data.full_name}
          </Title>
          <p className="text-ellipsis line-clamp-1 text-sm">
            {data.about_yourself}
          </p>
        </div>
      </div>
      <div className="h-full flex flex-col justify-end items-end px-6 py-4">
        <p className="text-sm whitespace-nowrap font-semibold">{}</p>
      </div>
    </div>
  );
}
