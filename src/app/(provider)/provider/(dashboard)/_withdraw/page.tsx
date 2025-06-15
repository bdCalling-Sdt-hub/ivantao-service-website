import React from "react";

import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import { DollarSignIcon } from "lucide-react";

import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
import { UserType } from "@/types/userType";
import AccConector from "./acc-connector";
import WithdrawPayout from "@/components/ui/withdraw-form";
export default async function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Category {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: React.ComponentType<any>;
    title: string;
  }
  const token = cookies().get("raven")?.value;
  const call = await getFetcher({ link: "/auth/own-profile", token });
  if (!call.status) {
    return <>SOMETHING WENT WRONG..</>;
  }
  const userData: UserType = call.data;
  return (
    <>
      <main className="flex flex-col min-h-screen w-full px-2 md:px-8 py-6 overflow-y-auto">
        <DashTitle>
          <Title level={3} className="flex items-center text-2xl">
            Withdraw
          </Title>
          <p className="text-gray-400">
            Admin with access to this workspace can promote or demote user
            maintain business insights
          </p>
        </DashTitle>
        <div className="w-full">
          <div className="w-full flex justify-end items-center">
            <Button
              href="/provider/withdraw/history"
              shape="circle"
              className="text-xl p-4 bg-gray-300"
            >
              <HistoryOutlined />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-8 md:pr-12 md:gap-12">
          <div className="col-span-3 mt-6 md:mt-0 md:h-32 space-y-6">
            <div className="bg-background rounded-xl flex flex-col justify-center items-center gap-3 p-6">
              <div className="h-16 w-16 rounded-full bg-[#FBBC04] flex justify-center items-center">
                <DollarSignIcon size={28} className="text-background" />
              </div>
              <p className="text-lg">Available balance</p>
              <Title level={2} className="!m-0">
                $1500.00
              </Title>
            </div>
            <div className="bg-background rounded-xl p-8">
              <div className="space-y-6">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <Title level={5} className="!m-0">
                        Cleaning like a pro
                      </Title>
                      <p className="text-gray-400">Abid Hasan</p>
                    </div>
                    <Title level={5} className="!m-0 !text-emerald-600">
                      + $550.00
                    </Title>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-5 mt-8 md:mt-0">
            {userData.stripe_connect_id ? (
              <>
                <Title level={3} className="text-center">
                  Make an <span className="font-black">Withdraw</span> Request
                </Title>
                {token && <WithdrawPayout token={token} />}
              </>
            ) : (
              <div className="h-[200px] w-full flex justify-center items-center border rounded-lg">
                {token && <AccConector token={token} user={userData} />}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
