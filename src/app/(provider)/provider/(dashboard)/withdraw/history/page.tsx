import DashTitle from "@/components/ui/dash-title";
import TaskCard from "@/components/ui/task-card";
import Title from "antd/es/typography/Title";
import React from "react";

export default function History() {
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
          {Array.from({ length: 2 }).map((it, i) => (
            <TaskCard key={i} />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Title level={3} className="pt-6 pb-2">
          Previous
        </Title>
        <div className="space-y-4">
          {Array.from({ length: 10 }).map((it, i) => (
            <TaskCard key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
