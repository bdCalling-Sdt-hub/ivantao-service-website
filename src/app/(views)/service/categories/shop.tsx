"use client";
import React from "react";
import { Button, Dropdown, MenuProps } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowUpDown } from "lucide-react";
// import { products } from "../serviceData";
import ProductCard from "@/components/ui/product-card";
import { ServiceType } from "@/types/Services";
import Link from "next/link";

export default function Shop({
  data,
  title,
  sorter,
}: {
  data: ServiceType[];
  title: string;
  sorter?: boolean;
}) {
  const items: MenuProps["items"] = [
    {
      label: <Link href="#">Price</Link>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <Link href="#">Date Posted</Link>,
      key: "1",
    },
    {
      type: "divider",
    },

    {
      label: <Link href="#">Newest</Link>,
      key: "2",
    },
  ];

  const bothItems: MenuProps["items"] = [
    {
      label: <Link href="#">Physical</Link>,
      key: "6",
    },
    {
      type: "divider",
    },
    {
      label: <Link href="#">Virtual</Link>,
      key: "7",
    },
    {
      type: "divider",
    },

    {
      label: <Link href="#">Both</Link>,
      key: "8",
    },
  ];

  return (
    <section>
      <div className="px-[7%]">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Title level={2} className="!text-lg md:!text-3xl !m-0">
              {title}
            </Title>
          </div>
          <div>
            {sorter ? (
              <>
                <Dropdown menu={{ items: bothItems }} trigger={["click"]}>
                  <Button
                    size="large"
                    className="text-xs sm:text-sm md:text-lg !outline-2 outline-black font-bold"
                  >
                    <span className="flex items-center gap-1">
                      {" "}
                      {/* Added flex classes here */}
                      Both{" "}
                      <ArrowUpDown className="h-3 w-3 sm:h-4 sm:w-4 md:w-6 md:h-6" />
                    </span>
                  </Button>
                </Dropdown>
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  className="!ml-4"
                >
                  <Button
                    size="large"
                    className="text-xs sm:text-sm md:text-lg !bg-[#7849D4] !text-background !outline-2 outline-black font-bold"
                  >
                    <span className="flex items-center gap-1">
                      {" "}
                      {/* Added flex classes here */}
                      Sort by{" "}
                      <ArrowUpDown className="h-3 w-3 sm:h-4 sm:w-4 md:w-6 md:h-6" />
                    </span>
                  </Button>
                </Dropdown>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="px-[7%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12 gap-6">
        {data.map((item, i) => (
          <ProductCard key={i} product={item} />
        ))}
      </div>
    </section>
  );
}
