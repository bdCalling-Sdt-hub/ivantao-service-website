import React from "react";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
export default function SectionA() {
  return (
    <section className="py-20 grid grid-cols-2 gap-6">
      <div className="grid grid-cols-2 gap-10">
        <div
          className="bg-purple-300 rounded-2xl bg-cover"
          style={{ backgroundImage: `url('/images/about/about-a.png')` }}
        ></div>
        <div className="grid grid-rows-12 gap-8 rounded-2xl">
          <div
            className="row-span-9 bg-yellow-300 rounded-2xl bg-cover"
            style={{ backgroundImage: `url('/images/about/about-b.png')` }}
          ></div>
          <div className="row-span-3 bg-[#6F5B36] rounded-2xl text-center flex flex-col justify-center items-center">
            <Title level={2} className="!m-0 !text-background">
              25+
            </Title>
            <Title level={4} className="!m-0 !text-background !font-normal">
              Years of experience
            </Title>
          </div>
        </div>
      </div>
      <div className="space-y-8 flex flex-col justify-center items-start bg-[#F7F3EB] p-8 py-[100px] h-full rounded-xl">
        <Title level={5}>About Tawun</Title>
        <Title level={2} className="!mt-2">
          The best e-commerce platform in town since 2022
        </Title>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Varius vel pharetra lobortis
          nulla. Imperdiet mattis nam velit urna auctor quis nullam pellentesque
          in. Eu condimentum pulvinar scelerisque dolor volutpat. Platea eget
          vestibulum velit in. Lorem ipsum dolor sit amet consectetur. Varius
          vel pharetra lobortis nulla. Imperdiet mattis nam velit urna auctor
          quis nullam pellentesque in. Eu condimentum pulvinar scelerisque dolor
          volutpat. Platea eget vestibulum velit in. Lorem ipsum dolor sit amet
          consectetur. Varius vel pharetra lobortis nulla. Imperdiet mattis nam
          velit urna auctor quis nullam pellentesque in. Eu condimentum pulvinar
          scelerisque dolor volutpat.
        </p>
        <Button
          className="bg-[#D5C19C] hover:!bg-[#a8987b] text-lg py-6 px-16"
          size="large"
        >
          Our Categtories
        </Button>
      </div>
    </section>
  );
}
