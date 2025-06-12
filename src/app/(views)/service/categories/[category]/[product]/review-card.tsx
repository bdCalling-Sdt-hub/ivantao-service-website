"use server";
import { getFetcher } from "@/lib/simplifier";
import { ReviewType } from "@/types/others";
import { ProviderType } from "@/types/userType";
import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { StarIcon } from "lucide-react";
import React from "react";

export default async function ReviewCard({ item }: { item: ReviewType }) {
  const call = await getFetcher({
    link: `/provider-profile/${item.user_id}`,
  });

  const user: ProviderType = call?.data;

  return (
    <div className="p-6 bg-background shadow-md rounded-xl w-full">
      <div className="flex flex-col md:flex-row justify-between gap-6 pt-0">
        <div className="flex flex-col md:flex-row justify-start items-center gap-2">
          <Avatar size="large" />
          <Title className="!m-0 !text-lg" level={4}>
            {user?.full_name}
          </Title>
        </div>
        <div className="flex flex-row justify-end md:justify-start items-center gap-2 text-sm md:text-lg">
          <StarIcon className="h-4 w-4 md:h-6 md:w-6" fill="" />
          <span>{item?.rating}</span>
        </div>
      </div>
      <p className="text-gray-500 font-semibold text-sm pt-4">
        {item?.comment}
      </p>
    </div>
  );
}
