import Title from "antd/es/typography/Title";
import React from "react";
import { services } from "./serviceData";
import Image from "next/image";

export default function Page() {
  return (
    <main className="py-16 px-[7%]">
      <Title>Services we are provided</Title>
      <div className="grid grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-background h-auto w-full p-6 rounded-xl hover:shadow-lg cursor-pointer transition-shadow"
          >
            <div className="">
              <div className="">
                <Image
                  src={item.image}
                  alt="thumbnail"
                  width={400}
                  height={200}
                  className="h-[200px] w-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="pt-6">
              <Title level={4} className="text-center pb-4">
                {item.title}
              </Title>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
