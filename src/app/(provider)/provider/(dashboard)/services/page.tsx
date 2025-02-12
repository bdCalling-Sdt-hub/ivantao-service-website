import React from "react";

import DashTitle from "@/components/ui/dash-title";
import { Hand } from "lucide-react";
import Title from "antd/es/typography/Title";
import { Button } from "antd";

export default function Page() {
  return (
    <div className="flex flex-col h-screen w-full px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Hello, Elena <Hand className="ml-2" size={20} />
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="pt-8 flex flex-row justify-between items-start">
        <div className="">
          <Title className="!m-0" level={3}>
            Service List
          </Title>
        </div>
        <div className="">
          <Button
            href="/provider/services/add"
            className="bg-[#D5C19C] hover:!bg-[#9c8c6e] hover:!text-background font-bold px- border-none"
            size="large"
          >
            + Add new
          </Button>
        </div>
      </div>
    </div>
  );
}
