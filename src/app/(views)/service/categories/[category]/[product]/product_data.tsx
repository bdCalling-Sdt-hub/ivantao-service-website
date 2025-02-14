import React from "react";
import Image from "next/image";
import { Avatar, Button } from "antd";
import Title from "antd/es/typography/Title";
import { StarIcon } from "lucide-react";
export default function ProductData() {
  return (
    <>
      <Image
        src="/images/categories/laundry.jfif"
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
              Md. Hasan
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
        <div className="w-full md:w-auto flex flex-row justify-end">
          <Button className="bg-[#DAC7A0] font-bold hover:!bg-[#aa9a79] hover:!text-background !border-none">
            Send message
          </Button>
        </div>
      </div>
    </>
  );
}
