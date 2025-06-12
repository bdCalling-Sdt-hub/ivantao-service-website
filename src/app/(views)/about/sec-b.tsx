import { Button } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

export default function SectionB() {
  return (
    <section className="py-20 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="grid grid-rows-2 gap-8">
        <div className="p-6 bg-[#7849D4] rounded-2xl flex flex-col justify-start items-start gap-8">
          <Title className="!text-background" level={3}>
            Our Vision
          </Title>

          <p className="text-background text-sm md:text-base">
            {" "}
            {/* Added text size responsiveness */}
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
        <div className="p-6 bg-[#7849D4] rounded-2xl flex flex-col justify-start items-start gap-4">
          <Title className="!text-background" level={3}>
            Our Mission
          </Title>
          <p className="text-background text-sm md:text-base">
            {" "}
            {/* Added text size responsiveness */}
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
        className="bg-cover rounded-3xl relative" // Added relative for absolute positioning
        style={{ backgroundImage: `url('/images/about/plans.webp')` }}
      >
        <div className="h-full w-full backdrop-blur-sm hover:backdrop-blur-none transition-all p-4 md:p-8 py-[40px] md:py-[74px] rounded-3xl flex flex-col justify-between">
          {" "}
          {/* Flex column and justify between */}
          <div>
            {" "}
            {/* Wrap title and description in a div */}
            <Title level={2} className="!text-background text-lg md:text-2xl">
              {" "}
              {/* Added text size responsiveness */}
              Our plan makes you feel more comfortable in ecommerce business
            </Title>
            <p className="!text-background text-sm md:text-base">
              {" "}
              {/* Added text size responsiveness */}
              Lorem ipsum dolor sit amet consectetur. Cursus laoreet ut egestas
              dignissim sed libero. Erat tortor faucibus odio amet placerat sed
              donec phasellus. Tellus facilisis facilisis sed lacus et convallis
              massa non ante. Et aliquet amet nisi eget ac metus ornare.
            </p>
          </div>
          <div className="flex justify-center">
            {" "}
            {/* Center the button */}
            <Button
              className="bg-[#7849D4] !border-none !text-background hover:!bg-[#6640b1] text-base md:text-lg py-4 md:py-6 px-8 md:px-16"
              size="large"
              href="/service"
            >
              Our Categtories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
