"use client";
import BackText from "@/components/ui/back-text";
import OrderInfoCard from "./order-info-card";
import BillingCard from "./billing-card";
import { ProviderCard } from "./provider-card";
import Title from "antd/es/typography/Title";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { message } from "antd";

export interface DataItem {
  label?: string;
  value?: string;
  copiable?: boolean;
  currency?: boolean;
  divide?: boolean;
}

interface OrderData {
  order_id: string;
  time: string;
  date: string;
  service: string;
  cost: number;
  fee: number;
  total: number;
  provider_name?: string;
  provider_services: string[];
  service_provided_count: number;
  provider_id: string;
}

export default function Page() {
  const id = useSearchParams().get("access");
  const [cookies] = useCookies(["raven"]);
  const [orderDatas, setOrderDatas] = useState<OrderData | null>(null);

  useEffect(() => {
    async function getOrderData() {
      const call = await getFetcher({
        link: `/order-details/${id}`,
        token: cookies.raven,
      });
      if (!call.status) {
        message.error(call.message);
        return;
      }
      setOrderDatas(call.data);
    }

    getOrderData();
  }, [id, cookies.raven]);

  if (!orderDatas) {
    return <div>Loading...</div>;
  }

  const orderData: DataItem[] = [
    { label: "Order Id:", value: orderDatas.order_id, copiable: true },
    { label: "Time: ", value: orderDatas.time },
    { label: "Date: ", value: orderDatas.date },
    { label: "Delivery Time: ", value: orderDatas.time },
    { label: "Payment Method: ", value: "Credit Card" },
    { label: "Service: ", value: orderDatas.service },
  ];

  const billingData: DataItem[] = [
    { label: "Cost: ", value: orderDatas.cost.toString() },
    { label: "Fee: ", value: orderDatas.fee.toString(), currency: true },
    { divide: true },
    { label: "Total: ", value: orderDatas.total.toString() },
  ];

  const providerData: DataItem[] = [
    {
      label: "Name:",
      value: orderDatas.provider_name ? orderDatas.provider_name : "Not found",
    },
    { label: "Services:", value: orderDatas.provider_services.join(", ") },
    {
      label: "Service provided:",
      value: orderDatas.service_provided_count.toString(),
    },
  ];

  return (
    <main className="px-[7%]">
      <BackText text="Order info" />
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-background">
          <OrderInfoCard data={orderData} />
          <BillingCard data={billingData} />
        </div>
        <div className="">
          <div className="p-6 rounded-xl bg-background">
            <ProviderCard
              data={providerData}
              providerId={orderDatas.provider_id}
            />
          </div>
        </div>
      </div>
      <Title className="my-12 mt-[100px]">Other Services Available</Title>
    </main>
  );
}
