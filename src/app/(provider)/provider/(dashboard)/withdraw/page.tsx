import React from "react";

import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import { DollarSignIcon } from "lucide-react";
import PaymentForm from "@/components/ui/payment-form";
export default function Page() {
  interface Category {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: React.ComponentType<any>;
    title: string;
  }

  return (
    <>
      <main className="flex flex-col h-screen w-full px-8 py-6 overflow-y-auto">
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
        <div className="grid grid-cols-8 pr-12 gap-12">
          <div className="col-span-3 h-32 space-y-6">
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

          <div className="col-span-5">
            <Title level={3} className="text-center">
              Withdraw your money with{" "}
              <span className="font-black">Stripe</span>
            </Title>
            <PaymentForm />
            <div className="w-full py-4 flex justify-center items-center">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="mt-8 py-6 w-1/2 text-lg px-8 bg-[#C5AD81] text-black font-bold hover:!bg-[#C4A77D]"
              >
                Withdraw
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
