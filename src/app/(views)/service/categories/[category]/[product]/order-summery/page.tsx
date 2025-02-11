import BackText from "@/components/ui/back-text";
import OrderInfoCard from "./order-info-card";
import BillingCard from "./billing-card";
import { ProviderCard } from "./provider-card";
import Title from "antd/es/typography/Title";
export interface DataItem {
  label?: string;
  value?: string;
  copiable?: boolean;
  currency?: boolean;
  divide?: boolean;
}
export default function Page() {
  const orderData: DataItem[] = [
    { label: "Order Id:", value: "#735839347", copiable: true },
    { label: "Time: ", value: "12.00 PM" },
    { label: "Date: ", value: "12.00 PM" },
    { label: "Delivery Time: ", value: "12-12-2024" },
    { label: "Payment Method: ", value: "Credit Card" },
    { label: "Service: ", value: "Cleaning like a pro" },
  ];

  const billingData: DataItem[] = [
    { label: "Cost: ", value: "250", currency: true },
    { label: "Fee: ", value: "10", currency: true },
    { divide: true },
    { label: "Total: ", value: "260", currency: true },
  ];
  const providerData: DataItem[] = [
    { label: "Name:", value: "John Doe" },
    { label: "Services:", value: "Cleaning, Cooking, Baby sitting." },
    { label: "Service provided:", value: "200+" },
    { label: "More info:", value: "See profile" },
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
            <ProviderCard data={providerData} />
          </div>
        </div>
      </div>
      <Title className="my-12 mt-[100px]">Other Services Avaliable</Title>
    </main>
  );
}
