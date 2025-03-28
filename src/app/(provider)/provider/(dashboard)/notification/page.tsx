import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import React from "react";
import OrderNotification from "./order-notification";
import { cookies } from "next/headers";
import { getFetcher } from "@/lib/simplifier";
interface NewOrderNotification {
  id: string;
  type: string;
  notifiable_type: string;
  notifiable_id: number;
  data: {
    message: string;
    order_id: number;
    time: string; // Keeping the invalid format for accuracy
    service_title: string;
    user_name: string;
    address: string;
  };
  read_at: string | null;
  created_at: string;
  updated_at: string;
}

export default async function Page() {
  const token = cookies().get("raven")?.value;
  const call = await getFetcher({ link: "/get-notification", token });

  if (!call.status) {
    return <>{call.message}</>;
  }

  const data: NewOrderNotification[] = call.notifications.data;
  console.log(data);
  return (
    <main className="flex flex-col min-h-screen w-full px-8 py-6">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Notification
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="flex-grow w-full space-y-2">
        {data.map((it) => (
          <OrderNotification data={it} key={it.id} />
        ))}
      </div>
    </main>
  );
}
