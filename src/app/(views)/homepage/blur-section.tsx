"use client";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { CircleArrowOutUpRight } from "lucide-react";
import React from "react";

export default function BlurSection() {
  return (
    <div
      className="w-full h-[400px] bg-red-200 bg-cover flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/images/blur-section.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center">
        <Title className="!text-background !mt-0 text-center !text-lg sm:!text-4xl">
          From Everyday Essentials to Specialized <br /> Solutions Find It All
          On-
        </Title>
        <Title className="!text-background !mt-0 !text-4xl sm:!text-6xl">
          TAWUN
        </Title>
        <Button
          href="/service/categories"
          className="text-lg px-12 !py-6 bg-[#7849D4] hover:!bg-[#57349c] !text-[#ffffff] !border-none"
          size="large"
        >
          Browse all{" "}
          <span>
            <CircleArrowOutUpRight className="h-4 w-4" />
          </span>
        </Button>
      </div>
    </div>
  );
}
