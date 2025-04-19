import React from "react";

import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import EditForm from "./edit-form";

export default function Page({ params }: { params: { product: string } }) {
  return (
    <div className="flex flex-col min-h-screen w-full px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Update your Product for service
        </Title>
        <p className="text-gray-400">
          Here you can add your service to share with other people & also can
          earn money.
        </p>
      </DashTitle>
      <div className="pt-8 w-full">
        <EditForm id={params.product} />
      </div>
    </div>
  );
}
