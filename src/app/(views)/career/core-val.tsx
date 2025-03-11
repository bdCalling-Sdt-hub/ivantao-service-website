import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image from "next/image";

import React from "react";

interface coresType {
  title: string;
  icon: string;
}
export default function CoreVal() {
  const cores: coresType[] = [
    { title: "Honesty", icon: "1" },
    { title: "Responsibility", icon: "2" },
    { title: "Kindness", icon: "3" },
    { title: "Innovation", icon: "4" },
    { title: "Collaboration", icon: "5" },
    { title: "Growth", icon: "6" },
  ];

  return (
    <section
      className="core-values bg-cover"
      style={{ backgroundImage: "url('/images/career/core-val.jpg')" }}
    >
      <div className="w-full h-full backdrop-blur-sm backdrop-brightness-75 py-[94px]">
        <div className="text-center mb-16">
          <Title level={1} className="!text-white">
            Our core values
          </Title>
          <Paragraph className="text-white/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. At aliquam tristique
            maecenas neque.
          </Paragraph>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {cores.map((item) => (
            <div
              className="flex flex-row justify-center gap-6 items-center py-4 px-6 "
              key={item.title}
            >
              <div className="">
                <Image
                  height={64}
                  width={64}
                  className="size-8 md:size-12"
                  alt="icon"
                  src={`/images/icons/core_vals/${item.icon}.png`}
                />
              </div>
              <div className="text-background text-sm md:text-lg">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
