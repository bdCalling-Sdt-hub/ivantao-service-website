/* eslint-disable @typescript-eslint/no-explicit-any */
import DashTitle from "@/components/ui/dash-title";
import TaskCard from "@/components/ui/task-card";
import { getFetcher } from "@/lib/simplifier";
import Title from "antd/es/typography/Title";
import { cookies } from "next/headers";
import React from "react";

interface Provider {
  id: number;
  full_name: string;
}

export interface Transaction {
  id: string;
  provider_id: number;
  amount: string;
  status: string;
  created_at: string;
  updated_at: string;
  provider: Provider;
  order: any | null;
}

export default async function History() {
  const token = cookies().get("raven")?.value;
  const call = await getFetcher({ link: "/withdraw-history", token });
  console.log(call.recent_withdrawals);

  if (!call.status) {
    return <>{call.message}</>;
  }
  const recents: Transaction[] = call.recent_withdrawals;
  const prevs: Transaction[] = call.previous_withdrawals;
  return (
    <main className="flex flex-col min-h-screen w-full px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Withdraw
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="mt-12">
        <Title level={3} className="pt-6 pb-2">
          Recent
        </Title>
        <div className="space-y-4">
          {recents.map((it) => (
            <TaskCard item={it} key={it.id} />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Title level={3} className="pt-6 pb-2">
          Previous
        </Title>
        <div className="space-y-4">
          {prevs.map((it) => (
            <TaskCard item={it} key={it.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
