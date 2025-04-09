"use server";
import React from "react";
import Image from "next/image";
import { Avatar, Button } from "antd";
import Title from "antd/es/typography/Title";
import { StarIcon } from "lucide-react";
import { ServiceBrief } from "@/types/Services";
import { getFetcher } from "@/lib/simplifier";
import { ProviderType } from "@/types/userType";
import ReportListModal from "./report-list-modal";
export default async function ProductData({
  data,
  token,
}: {
  data: ServiceBrief;
  token: string | undefined;
}) {
  if (!token) {
    return (
      <>
        <Image
          src={data.image ? data.image : "https://placehold.co/1000x600"}
          width={699}
          height={416}
          className="w-full rounded-2xl"
          alt="thumbnail"
        />
        <div className="p-4 w-full text-center text-muted-foreground">
          Login to see more data
        </div>
      </>
    );
  }

  const call = await getFetcher({
    link: `/provider-profile/${data.provider_id}`,
    token: token,
  });

  if (!call.status) {
    return <>Something is wrong..</>;
  }

  const providerdata: ProviderType = call.data;

  return (
    <>
      <Image
        src={data.image ? data.image : "https://placehold.co/1000x600"}
        width={699}
        height={416}
        className="w-full rounded-2xl"
        alt="thumbnail"
      />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full flex flex-row items-center py-6">
          <Avatar size="large" className="h-16 w-16 mr-4" />
          <div className="flex flex-col">
            <Title level={5} className="!mb-0">
              {providerdata.full_name}
            </Title>
            {/* Added margin to Title */}
            <div className="flex flex-row items-center gap-3">
              {/* Used Array.from to dynamically render stars for easier modification */}
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" fill="" /> // Added key and styling
              ))}
              <span className="font-bold">
                4.9 <span className="text-gray-500">(226)</span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-row gap-2 justify-end">
          <ReportListModal token={token} servId={data.id} />
          <Button
            href="/chat"
            className="bg-[#7849D4] hover:!bg-[#57369b] font-bold !text-background !border-none"
          >
            Send message
          </Button>
        </div>
      </div>
    </>
  );
}
