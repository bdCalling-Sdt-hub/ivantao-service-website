import DashTitle from "@/components/ui/dash-title";
import { Button, Input } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowUpRight, Search } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <>
      <main className="h-full w-full flex flex-col justify-start items-start p-4 overflow-y-auto">
        <DashTitle admin>
          <Title level={3} className="flex items-center text-2xl">
            Community Forum
          </Title>
          <p className="text-gray-400">
            Admin with access to this workspace can promote or demote user
            maintain business insights
          </p>
        </DashTitle>
        <div className="flex-grow w-full flex flex-col justify-start items-stretch">
          <div className="py-4 flex flex-row justify-between items-center">
            <Input
              suffix={
                <Search className="text-xl text-gray-400 hover:text-gray-500 cursor-pointer transition-colors" />
              }
              className="md:w-1/3 !border-none"
              size="large"
              placeholder="Search service"
            />
          </div>
          <Title level={3} className="py-4">
            Service categories
          </Title>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index}>
                <div className="h-[200px] w-full rounded-xl shadow-md bg-background relative p-2">
                  <div className="h-2/3 w-full bg-gray-300 rounded-lg"></div>
                  <div className="h-1/3 w-full flex flex-row justify-between items-center px-3">
                    <div className="">
                      <Title className="!m-0" level={5}>
                        Cleaning like a pro
                      </Title>
                      <span className="text-gray-400">23 Posts</span>
                    </div>
                    <Button
                      className="h-10 w-10"
                      shape="circle"
                      href="/admin/forum/post"
                    >
                      <ArrowUpRight />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
