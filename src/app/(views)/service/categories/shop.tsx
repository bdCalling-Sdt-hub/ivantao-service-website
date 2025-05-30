"use client";
import React from "react";
import { Button, Dropdown, MenuProps } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowUpDown } from "lucide-react";
// import { products } from "../serviceData";
import ProductCard from "@/components/ui/product-card";
import { ServiceType } from "@/types/Services";

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
      label: (
        <a href="#" target="_blank" rel="noopener noreferrer">
          Price
        </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="#" target="_blank" rel="noopener noreferrer">
          Date Posted
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },

    {
      label: (
        <a href="#" target="_blank" rel="noopener noreferrer">
          Newest
        </a>
      ),
      key: "2",
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
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Button
                    size="large"
                    className="text-xs sm:text-sm md:text-lg !outline-2 outline-black font-bold"
                  >
                    Both
                    <ArrowUpDown className="h-3 w-3 sm:h-4 sm:w-4 md:w-6 md:h-6" />
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
                    Sort by{" "}
                    <ArrowUpDown className="h-3 w-3 sm:h-4 sm:w-4 md:w-6 md:h-6" />
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
