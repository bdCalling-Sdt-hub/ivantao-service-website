import ApplyButton from "@/components/ui/apply-button";
import { SearchOutlined } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

export default function Opportunities() {
  const opportunities = [
    {
      role: "Design",
      opens: [
        {
          role: "UI-UX Designer",
          location: "Banasree, Dhaka",
          category: "Design",
        },
        {
          role: "Graphic Designer",
          location: "Banasree, Dhaka",
          category: "Design",
        },
      ],
    },
    {
      role: "Development",
      opens: [
        {
          role: "React native developer",
          location: "Banasree, Dhaka",
          category: "Development",
        },
      ],
    },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto">
        <div className="px-[7%] bg-background py-20 relative">
          <div className="absolute top-6 right-0 mr-[7%] px-6 py-2 rounded-full border-2 border-[#88744F]">
            3 open positions
          </div>
          <Title level={2} className="mb-0 text-center">
            Career opportunities
          </Title>
          <Paragraph className="text-gray-600 mb-8 text-center text-sm md:text-lg">
            Explore our open roles for working totally remotely, from the office
            or somewhere in between.
          </Paragraph>
          <div className="px-12 flex flex-row justify-center items-center mt-12">
            <div className="border flex flex-row justify-between items-center w-full sm:w-4/5 md:w-1/2">
              <input
                type="text"
                className="flex-1 p-3"
                placeholder="Search opportunities"
              />
              <button className="p-3 px-4 bg-[#88744F]">
                <SearchOutlined className="text-background" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-12 px-[7%]">
          {opportunities.map((item, i) => (
            <div className="pt-12" key={i}>
              <div className="h-[120px] flex justify-center items-center">
                <div className="asbolute left-0bg-[#FBF9F5] p-1">
                  <div className=" bg-[#88744F] px-2 md:px-4 py-2 rounded-full font-bold text-background text-xs md:text-base">
                    {item.role}
                  </div>
                </div>
                <div className="w-full h-[2px] bg-[#88744F]"></div>
              </div>
              <div className="space-y-6">
                {item.opens.map((item, i) => (
                  <div
                    className="py-6 px-8 flex flex-row justify-between items-center font-semibold rounded-xl bg-background"
                    key={item.role + i}
                  >
                    <div className="">
                      <Title level={5} className="!m-0 !text-sm md:!text-base">
                        {item.role}
                      </Title>
                    </div>
                    <div className="!text-sm md:!text-base">
                      {item.location}
                    </div>
                    <ApplyButton to="/career/about-opportunity" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
