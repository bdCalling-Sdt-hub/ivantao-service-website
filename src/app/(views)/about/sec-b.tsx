import { Button } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
export default function SectionB() {
  return (
    <section className="py-20 grid grid-cols-2 gap-8">
      <div className="grid grid-rows-2 gap-8">
        <div className="p-6 bg-[#F7F3EB] rounded-2xl flex flex-col justify-start items-start gap-8">
          <Button
            className="text-black bg-background font-bold py-6 px-8 !border-none"
            size="large"
          >
            Our Vision
          </Button>
          <p className="text-[#888888]">
            Lorem ipsum dolor sit amet consectetur. Molestie nibh nibh porttitor
            pulvinar nisl vestibulum. Ultricies augue semper eu pulvinar
            adipiscing et. Pharetra ultrices elit orci amet. Duis hac quis
            tellus leo augue donec in quam sem. Lorem ipsum dolor sit amet
            consectetur. Molestie nibh nibh porttitor pulvinar nisl vestibulum.
            Ultricies augue semper eu pulvinar adipiscing et. Pharetra ultrices
            elit orci amet. Duis hac quis tellus leo augue donec in quam sem.
            orttitor pulvinar nisl vestibulum. Ultricies augue semper eu
            pulvinar adipiscing et. Pharetra ultrices elit orci amet. Duis hac
            quis tellus leo augue donec in quam sem.
          </p>
        </div>
        <div className="p-6 bg-[#F7F3EB] rounded-2xl flex flex-col justify-start items-start gap-8">
          <Button
            className="text-black bg-background font-bold py-6 px-8 !border-none"
            size="large"
          >
            Our Mission
          </Button>
          <p className="text-[#888888]">
            Lorem ipsum dolor sit amet consectetur. Molestie nibh nibh porttitor
            pulvinar nisl vestibulum. Ultricies augue semper eu pulvinar
            adipiscing et. Pharetra ultrices elit orci amet. Duis hac quis
            tellus leo augue donec in quam sem. Lorem ipsum dolor sit amet
            consectetur. Molestie nibh nibh porttitor pulvinar nisl vestibulum.
            Ultricies augue semper eu pulvinar adipiscing et. Pharetra ultrices
            elit orci amet. Duis hac quis tellus leo augue donec in quam sem.
            orttitor pulvinar nisl vestibulum. Ultricies augue semper eu
            pulvinar adipiscing et. Pharetra ultrices elit orci amet. Duis hac
            quis tellus leo augue donec in quam sem.
          </p>
        </div>
      </div>
      <div
        className="bg-cover rounded-3xl"
        style={{ backgroundImage: `url('/images/about/plans.png')` }}
      >
        <div className="h-full w-full backdrop-blur-sm p-8 py-[74px] rounded-3xl">
          <Title level={2} className="!text-background">
            Our plan makes you feel more comfortable in ecommerce business
          </Title>
          <p className="!text-background text-sm">
            Lorem ipsum dolor sit amet consectetur. Cursus laoreet ut egestas
            dignissim sed libero. Erat tortor faucibus odio amet placerat sed
            donec phasellus. Tellus facilisis facilisis sed lacus et convallis
            massa non ante. Et aliquet amet nisi eget ac metus ornare.
          </p>
          <div className="h-[300px]"></div>
          <Button
            className="bg-[#D5C19C] !border-none hover:!bg-[#a8987b] text-lg py-6 px-16"
            size="large"
          >
            Our Categtories
          </Button>
        </div>
      </div>
    </section>
  );
}
