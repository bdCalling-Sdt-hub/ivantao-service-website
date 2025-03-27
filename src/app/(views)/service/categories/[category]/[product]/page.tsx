"use server";
import React from "react";
import BreadcrumbReady from "@/components/ui/breadcrumReady";
import { HomeFilled } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

import { Button } from "antd";
import { StarIcon } from "lucide-react";
import Reviews from "./reviews";
import ProductData from "./product_data";
import RecommendParent from "./recommend-parent";
import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
import { ServiceDetailedType } from "@/types/Services";

// import BuyModal from "./buyModal";

export default async function Page({
  params,
}: {
  params: Promise<{
    category: string;
    product: string;
  }>;
}) {
  const cookieStore = cookies();
  const getToken = cookieStore.get("raven");

  if (!getToken?.value) {
    return (
      <div className="h-[200px] w-full flex justify-center items-center">
        You must be logged in to see this content
      </div>
    );
  }

  const call = await getFetcher({
    link: `/get-services-details/${(await params).product}`,
    token: getToken?.value,
  });

  if (!call.status) {
    return (
      <>
        <main className="!p-8 h-[300px] w-full flex justify-center items-center">
          <Title level={3}>{call.message}</Title>
        </main>
      </>
    );
  }
  const data: ServiceDetailedType = call.data;
  const service = call.data.service;

  const breads = [
    {
      href: "/",
      title: <HomeFilled className="!text-xl" />,
    },
    {
      href: `/${(await params).category}`,
      title: (await params).category.replace(/\b\w/g, (char) =>
        char.toUpperCase()
      ),
    },
    {
      title: service.title,
    },
  ];
  console.log(call);

  return (
    <main className="py-0 md:py-12 px-4 md:px-[7%]">
      <BreadcrumbReady breads={breads} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-8 mb-12">
        <div className="md:col-span-7 w-full grid grid-cols-1 gap-y-5 content-start">
          <div className="order-2 lg:order-1 pb-12 w-full col-span-1 h-min">
            <ProductData data={service} token={getToken?.value} />
          </div>
          <div className="order-1 lg:order-2 w-full pb-8 md:pb-0  whitespace-nowrap overflow-x-scroll">
            <RecommendParent data={call.data.recommended} />
          </div>
        </div>
        <div className="md:col-span-4 w-full">
          <div className="p-6 bg-background rounded-xl">
            <Title level={3}>{service.title}</Title>
            <p className="font-semibold text-gray-500">66 order in queue</p>
            <p className="py-4">{service.description}</p>
            <p className="text-cl font-bold">
              ${parseInt(service.price).toFixed(2)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <Button
                href={`/service/categories/sub-categories/${service.id}/payment`}
                className="w-full bg-[#7849D4] hover:bg-[#5f3aaa] text-sm md:text-xs xl:text-base text-background font-bold"
                size="large"
              >
                Purchase in person
              </Button>
              <Button
                className="w-full bg-[#7849D4] hover:bg-[#58359e] text-sm md:text-xs xl:text-base text-background font-bold"
                size="large"
              >
                Purchase virtual
              </Button>
              {/* <BuyModal /> */}
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center py-6">
            <Title className="!m-0" level={4}>
              Reviews
            </Title>
            <div className="flex flex-row justify-end items-center gap-2 flex-1">
              <div className="flex flex-row justify-end items-center">
                {Array.from({ length: parseInt(data.average_rating) }).map(
                  (_, i) => (
                    <StarIcon key={i} className="h-4 w-4" fill="" /> // Added key and styling
                  )
                )}
              </div>
              <span className="font-bold">
                {parseInt(data.average_rating)}{" "}
                <span className="text-gray-500">({data.total_reviews})</span>
              </span>
            </div>
          </div>
          <div className="py-6 space-y-6">
            <Reviews data={data.reviews} />
          </div>
        </div>
      </div>
    </main>
  );
}
