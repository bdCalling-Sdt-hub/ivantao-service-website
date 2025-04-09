import { Button, Checkbox, Input } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

export default function SecB() {
  const contactInfo = [
    {
      icon: "📞", // Replace with your phone icon component
      label: "+93545646515",
    },
    {
      icon: "📠", // Replace with your fax icon component
      label: "+13545646515",
    },
    {
      icon: "✉️", // Replace with your email icon component
      label: "example@gmail.com",
    },
  ];
  const checkboxes = [
    "End of day stock quote",
    "SEC Filings",
    "IR Events",
    "Press Releases",
    "Presentations",
    "Weekly Summary",
  ];
  return (
    <section className="px-[7%] grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
      <div className="">
        <Title>
          Let’s Talk About{" "}
          <span className="text-[#7849D4]">
            Your <br /> Next Investment
          </span>
        </Title>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur. Platea est aliquet eu tortor
          eu. Leo urna eros arcu cursus in scelerisque dictumst faucibus. At
          facilisi mauris ut commodo quis. Id in a integer fringilla lacinia
          dignissim lacus vitae eu. Suspendisse sed diam porttitor quis massa
          ac. Netus nisi congue
        </p>
        <div className="flex flex-col justify-start items-start gap-y-6 pt-8 text-lg font-semibold">
          {contactInfo.map((item) => (
            <p key={item.label.toLocaleLowerCase()}>
              <span>{item.icon}</span> {item.label}
            </p>
          ))}
        </div>
      </div>
      <div className="w--full md:w-[70%]">
        <Title level={3}>Get latest email by subscribe our newsletter</Title>
        <div className="w-full py-12 grid grid-col-1 md:grid-cols-2">
          {checkboxes.map((item) => (
            <Checkbox key={item.trim().toLocaleLowerCase()} className="text-xl">
              {item}
            </Checkbox>
          ))}
        </div>
        <Input size="large" placeholder="Email" />
        <Button
          className="bg-[#7849D4] hover:!bg-[#5a389e] !text-background !rounded-lg !border-none px-8 py-6 mt-8"
          size="large"
        >
          Subscribe
        </Button>
      </div>
    </section>
  );
}
