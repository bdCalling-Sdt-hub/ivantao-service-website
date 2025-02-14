import Title from "antd/es/typography/Title";
import { HandCoins, HandHeart } from "lucide-react";
import React from "react";
import PartA from "./part-a";
import Image from "next/image";

export default function Page() {
  return (
    <main className="py-4 md:py-12 px-2 md:px-[7%]">
      <section>
        <PartA />
      </section>
      <div className="bg-[#BBA782] py-6 flex flex-col md:flex-row justify-center items-center gap-6 my-12 px-4 md:px-0">
        {/* Responsive flex direction and padding */}
        <div className="flex flex-row justify-start items-center gap-4 text-background">
          {/* Align items center vertically */}
          <div className="p-4 rounded-lg bg-[#D0BFA0] flex items-center justify-center">
            {/* Center icon within the circle */}
            <HandHeart className="h-6 w-6" /> {/* Control icon size */}
          </div>
          <div>
            <p className="text-lg font-bold md:text-xl">100M</p>
            {/* Responsive font size */}
            <p className="text-sm md:text-base">Helped people</p>
            {/* Responsive font size */}
          </div>
        </div>
        <div className="flex flex-row justify-start items-center gap-4 text-background">
          {/* Align items center vertically */}
          <div className="p-4 rounded-lg bg-[#D0BFA0] flex items-center justify-center">
            {/* Center icon within the circle */}
            <HandCoins className="h-6 w-6" /> {/* Control icon size */}
          </div>
          <div>
            <p className="text-lg font-bold md:text-xl">500M</p>
            {/* Responsive font size */}
            <p className="text-sm md:text-base">Fund Raised</p>
            {/* Responsive font size */}
          </div>
        </div>
      </div>
      <section className="py-12">
        <Title className="text-center">Fund raising Events</Title>
        <div className="py-12 flex flex-col md:flex-row justify-center items-center gap-6">
          <Image
            src="/images/others/charity-block-a.png"
            height={1000}
            width={400}
            alt="thumbnail"
            className="h-[550px] w-[400px]"
          />
          <Image
            src="/images/others/charity-block-b.png"
            height={1000}
            width={400}
            alt="thumbnail"
            className="h-[550px] w-[400px]"
          />
          <Image
            src="/images/others/charity-block-c.png"
            height={1000}
            width={400}
            alt="thumbnail"
            className="h-[550px] w-[400px]"
          />
        </div>
      </section>
    </main>
  );
}
