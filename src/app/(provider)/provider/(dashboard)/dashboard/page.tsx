import React from "react";
import Overview from "./overview";
import Chart from "./chart";
import DashTitle from "@/components/ui/dash-title";
import { Hand } from "lucide-react";
import Title from "antd/es/typography/Title";

export default function Page() {
  return (
    <div className="flex flex-col md:h-screen w-full px-4 md:px-8 py-6">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Hello, Elena <Hand className="ml-2" size={20} />
        </Title>
      </DashTitle>
      <div className="md:flex-grow w-full">
        <div className="h-full w-full grid grid-rows-1 md:grid-rows-6 gap-12">
          <div className="row-span-1 md:row-span-2 w-full bg-background h-full rounded-2xl">
            <div className="h-full w-full p-4 gap-2 flex flex-col justify-start items-start">
              <Overview />
            </div>
          </div>
          <div className="row-span-1 md:row-span-4 w-full bg-background rounded-2xl">
            <div className="h-full">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
