import React from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import TransactionTable, {
  ListingItem,
} from "@/components/ui/transaction-table";
import { Button } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Page() {
  const data: ListingItem[] = [
    {
      sr: 1,
      service: "Cleaning like a pro",
      pvName: "Abid Hasan",
      csName: "Abid Hasan 2",
      price: 250,
      percentage: 5,
      percAmm: 12.5,
    },
    {
      sr: 2,
      service: "Cleaning like a pro",
      pvName: "Abid Hasan",
      csName: "Abid Hasan 2",
      price: 250,
      percentage: 5,
      percAmm: 12.5,
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Transactions
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="flex-grow w-full overflow-y-auto">
        <TransactionTable data={data} />
      </div>
      <div className="border-t border-black pt-4 flex flex-row justify-between items-center">
        <div className="">Showing 10 user details</div>
        <div className="flex flex-row justify-center items-center gap-2">
          <Button shape="circle">
            <ChevronLeft />
          </Button>
          <Button shape="circle">1</Button>
          <Button shape="circle">2</Button>
          <Button shape="circle">3</Button>
          <Button shape="circle">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
