import React from "react";
import BreadcrumbReady from "@/components/ui/breadcrumReady";
import { HomeFilled } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

import { Button } from "antd";
import { StarIcon } from "lucide-react";
import Reviews from "./reviews";
import ProductData from "./product_data";
import RecommendParent from "./recommend-parent";
// import BuyModal from "./buyModal";

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
    <main className="py-0 md:py-12 px-4 md:px-[7%]">
      <BreadcrumbReady breads={breads} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-8 mb-12">
        <div className="md:col-span-7 w-full grid grid-cols-1 gap-y-5 content-start">
          <div className="order-2 lg:order-1 pb-12 w-full col-span-1 h-min">
            <ProductData />
          </div>
          <div className="order-1 lg:order-2 w-full pb-8 md:pb-0">
            <RecommendParent />
          </div>
        </div>
        <div className="md:col-span-4 w-full">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <Button
                href="/service/categories/sub-categories/cleaning/payment"
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
