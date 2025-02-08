import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  RiseOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

export default function Overview() {
  const data = [
    {
      icon: <RiseOutlined />, // Replace with your actual icon component or SVG
      title: "Revenue",
      para: "$5.6B",
    },
    {
      icon: <TeamOutlined />, // Replace with your actual icon component or SVG
      title: "Associates",
      para: "20,000 +",
    },
    {
      icon: <ClockCircleOutlined />, // Replace with your actual icon component or SVG
      title: "Providing Insights",
      para: "4 years +",
    },
    {
      icon: <GlobalOutlined />, // Replace with your actual icon component or SVG
      title: "Countries Served",
      para: "90",
    },
  ];
  return (
    <section className="bg-[#BBA782] py-8 text-background p-12 text-center mt-8">
      <Title level={3} className="!text-background text-center !mb-8">
        Tawun Overview
      </Title>
      <p className="text-lg font-light px-[10%]">
        Lorem ipsum dolor sit amet consectetur. Platea est aliquet eu tortor eu.
        Leo urna eros arcu cursus in scelerisque dictumst faucibus. At facilisi
        mauris ut commodo quis. Id in a integer fringilla lacinia dignissim
        lacus vitae eu. Suspendisse sed diam porttitor quis massa ac. Netus nisi
        congue id pellentesque. Vitae mi netus sodales ultrices ipsum varius.
        Tristique massa malesuada tortor semper viverra. Tristique donec id
        nulla elementum fringilla cursus orci.
      </p>
      <div className="grid grid-cols-4 gap-12 px-[10%] pt-12">
        {data.map((item) => (
          <div
            className="flex flex-row justify-start items-center p-4 bg-[#FFF9EE] gap-6 rounded-2xl"
            key={item.title.trim().toLocaleLowerCase()}
          >
            <div className="flex justify-center items-center h-12 w-12 text-3xl bg-background rounded-lg text-[#4285F4]">
              {item.icon}
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <Title level={5} className="!m-0">
                {item.title}
              </Title>
              <Title level={3} className="!m-0">
                {item.para}
              </Title>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-8">
        <Button
          className="px-8 py-6 bg-[#FFF9EE] hover:bg-[#ece2cf] !font-semibold"
          size="large"
        >
          Learn More <ArrowRightOutlined />
        </Button>
      </div>
    </section>
  );
}
