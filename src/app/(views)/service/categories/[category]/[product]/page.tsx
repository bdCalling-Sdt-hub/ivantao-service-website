import React from "react";
import BreadcrumbReady from "@/components/ui/breadcrumReady";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  HomeFilled,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

import Recommends from "./recommends";
import { Button } from "antd";
import { StarIcon } from "lucide-react";
import Reviews from "./reviews";
import ProductData from "./product_data";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
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
      title: (await params).product.replace(/\b\w/g, (char) =>
        char.toUpperCase()
      ),
    },
  ];

  return (
    <main className="py-12 px-[7%]">
      <BreadcrumbReady breads={breads} />
      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-7 w-full">
          <ProductData />
          <div className="w-full flex flex-row justify-between items-center ">
            <Title className="!m-0" level={3}>
              Recommended for you
            </Title>
            <div className="flex flex-row justify-end items-center gap-2">
              <Button className="rounded-full h-9 w-9 border-2 border-[#D5C19C]">
                <CaretLeftOutlined />
              </Button>
              <Button className="rounded-full h-9 w-9 bg-[#D5C19C]">
                <CaretRightOutlined />
              </Button>
            </div>
          </div>
          <div className="rounded-xl p-8 bg-background mt-6">
            <div className="grid grid-cols-2 gap-6">
              <Recommends />
            </div>
          </div>
        </div>
        <div className="col-span-4 w-full">
          <div className="p-6 bg-background rounded-xl">
            <Title level={3}>Share cleaning service as pro.</Title>
            <p className="font-semibold text-gray-500">66 order in queue</p>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur. Dictum cras facilisi nunc
              facilisis. Eleifend vel sed donec felis libero. In imperdiet
              pellentesque at urna velit in massa potenti. Id eleifend nulla
              odio dignissim malesuada est egestas congue arcu.
            </p>
            <p className="text-cl font-bold">$5200.00</p>
            <div className="grid grid-cols-2 gap-6">
              <Button
                className="w-full bg-[#DAC7A0] hover:bg-[#DAC7A0] hover:text-background font-bold"
                size="large"
              >
                Purchase in person
              </Button>
              <Button
                className="w-full bg-[#DAC7A0] hover:bg-[#DAC7A0] hover:text-background font-bold"
                size="large"
              >
                Purchase virtual
              </Button>
              <Button
                className="col-span-2 w-full hover:text-background font-bold"
                size="large"
                variant="outlined"
              >
                Make an offer
              </Button>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center py-6">
            <Title className="!m-0" level={4}>
              Reviews
            </Title>
            <div className="flex flex-row justify-end items-center gap-2 flex-1">
              <div className="flex flex-row justify-end items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" fill="" /> // Added key and styling
                ))}
              </div>
              <span className="font-bold">
                4.9 <span className="text-gray-500">(226)</span>
              </span>
            </div>
          </div>
          <div className="py-6 space-y-6">
            <Reviews />
          </div>
        </div>
      </div>
    </main>
  );
}
