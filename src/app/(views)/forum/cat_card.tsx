"use server";
import { getFetcher } from "@/lib/simplifier";
import { Category } from "@/types/Services";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function CatCard({
  item,
  token,
}: {
  item: Category;
  token: string | undefined;
}) {
  const call = await getFetcher({
    link: `/forum-list?categories_id=${item.id}`,
    token: token,
  });

  let totalForums: number;
  if (!call.status) {
    totalForums = 0;
  } else {
    totalForums = call.data.total;
  }

  return (
    <div className="w-[300px] h-[300px] overflow-hidden shadow-sm bg-background flex-shrink-0 rounded-xl">
      <Image
        src={item.icon}
        height={800}
        width={400}
        alt="thumbnail"
        className="w-full h-[200px]"
      />
      <div className="flex flex-row justify-between items-center h-[100px] px-4">
        <div className="">
          <Title level={4}>{item.name}</Title>
          <p>{totalForums} posts</p>
        </div>
        <div className="">
          <Button
            shape="circle"
            size="large"
            className="bg-gray-300"
            href={`/forum/${item.id}`}
          >
            <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
