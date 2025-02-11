import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

import React from "react";

export default function CoreVal() {
  const cores = [
    { title: "Honesty", icon: "Users" },
    { title: "Responsibility", icon: "Shield" },
    { title: "Kindness", icon: "Heart" },
    { title: "Honesty", icon: "Users" },
    { title: "Responsibility", icon: "Shield" },
    { title: "Kindness", icon: "Heart" },
  ];
  return (
    <section
      className="core-values"
      style={{ backgroundImage: "url('/images/categories/custom.jfif')" }}
    >
      <div className="w-full h-full backdrop-blur-sm py-[94px]">
        <div className="text-center mb-16">
          <Title level={1} className="!text-white">
            Our core values
          </Title>
          <Paragraph className="text-white/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. At aliquam tristique
            maecenas neque.
          </Paragraph>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6">
          {cores.map((item) => (
            <div
              className="flex flex-row justify-between items-center py-4 px-6 bg-white"
              key={item.title}
            >
              <div className="">{item.icon}</div>
              <div className="">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
