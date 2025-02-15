import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import React from "react";
import OrderNotification from "./order-notification";

export default function Page() {
  return (
    <main className="flex flex-col h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Notification
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="flex-grow w-full overflow-y-auto space-y-2">
        {Array.from({ length: 10 }).map((it, i) => (
          <OrderNotification key={i} />
        ))}
      </div>
    </main>
  );
}
