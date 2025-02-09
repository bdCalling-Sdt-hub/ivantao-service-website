import Title from "antd/es/typography/Title";
import { HandCoins, HandHeart } from "lucide-react";
import React from "react";
import PartA from "./part-a";
import Image from "next/image";

export default function Page() {
  return (
    <main className="py-12 px-[7%]">
      <section>
        <PartA />
      </section>
      <div className="bg-[#BBA782] py-6 flex flex-row justify-center items-center gap-6 my-12">
        <div className="flex flex-row justify-start items-start gap-4 text-background">
          <div className="p-4 rounded-lg bg-[#D0BFA0]">
            <HandHeart />
          </div>
          <div className="">
            <p className="text-lg font-bold">100M</p>
            <p>Helped people</p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start gap-4 text-background">
          <div className="p-4 rounded-lg bg-[#D0BFA0]">
            <HandCoins />
          </div>
          <div className="">
            <p className="text-lg font-bold">500M</p>
            <p>Fund Raised</p>
          </div>
        </div>
      </div>
      <section className="py-12">
        <Title className="text-center">Fund raising Events</Title>
        <div className="py-12 flex flex-row justify-center items-center gap-6">
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
