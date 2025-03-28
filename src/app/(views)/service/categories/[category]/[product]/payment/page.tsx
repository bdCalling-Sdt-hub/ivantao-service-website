"use client";
import BackText from "@/components/ui/back-text";
import { Avatar, Button } from "antd";
import Title from "antd/es/typography/Title";
import { Loader2Icon, StarIcon } from "lucide-react";
import Image from "next/image";
import DatePicker from "./date-picker";
import PaymentForm from "./payment-form";
import { useEffect, useState } from "react";
import { getFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { ServiceType } from "@/types/Services";
import { getUserData } from "@/lib/api";

export default function Page({
  params,
}: {
  params: {
    product: string;
  };
}) {
  const [cookies] = useCookies(["raven"]);

  const [err] = useState("");
  const [data, setData] = useState<ServiceType | null>(null);
  const [reviews, setReviews] = useState({
    review_avg: 0,
    review_total: 0,
  });
  const [proceed, setProceed] = useState<boolean>(false);
  // const [formData,setFormData] = useState({ })
  const [orderForm, setOrderForm] = useState<{
    user_id: string;
    service_id: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
  }>({
    user_id: "",
    service_id: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
  });
  useEffect(() => {
    async function getData() {
      const call = await getFetcher({
        link: `/get-services-details/${params.product}`,
        token: cookies.raven,
      });
      const user = await getUserData(cookies.raven);

      setOrderForm({
        ...orderForm,
        user_id: user.data.id,
        service_id: call.data.service.id,
      });

      if (!call.status) {
        return (
          <div className="px-[7%] h-[300px] flex justify-center items-center">
            Content not found.
          </div>
        );
      }
      setReviews({
        review_avg: call.data.average_rating,
        review_total: call.data.total_reviews,
      });
      setData(call.data.service);
    }
    getData();
  }, []);

  useEffect(() => {
    if (
      orderForm.start_date &&
      orderForm.end_date &&
      orderForm.start_time &&
      orderForm.end_time
    ) {
      setProceed(true);
    } else {
      setProceed(false);
    }
  }, [orderForm]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  if (!data) {
    return (
      <div className="px-[7%] h-[400px] flex flex-row justify-center items-center gap-2">
        <Loader2Icon className="animate-spin" /> Loading..
      </div>
    );
  }

  if (err) {
    return (
      <div className="px-[7%] h-[400px] flex flex-row justify-center items-center gap-2">
        {err}
      </div>
    );
  }
  return (
    <main className="px-[7%] py-12">
      <BackText text="Order info" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-min rounded-xl bg-background p-4 shadow-md">
          <Image
            src={data?.image}
            height={1600}
            width={800}
            alt="thumbnail"
            className="w-full h-[300px] rounded-xl"
          />
          <div className="w-full flex flex-row justify-between gap-6 py-6">
            <div className="flex flex-row justify-start items-center gap-2">
              <Avatar size="large" />
              <Title className="!m-0" level={4}>
                {data?.title}
              </Title>
            </div>
            <div className="flex flex-row justify-start items-center gap-2 text-lg">
              <StarIcon className="h-6 w-6" fill="" />
              <span>
                {reviews.review_avg} ({reviews.review_total})
              </span>
            </div>
          </div>
          <p className="w-full text-xs md:text-sm">{data.description}</p>
          <div className="py-8 font-bold text-xl">From ${data.price}</div>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-background shadow-md rounded-xl">
            <DatePicker data={orderForm} dataChanger={setOrderForm} />
          </div>
          <Button
            onClick={() => {
              console.log(orderForm);
            }}
          >
            MAGIC BUTTON
          </Button>
          <div className="p-6 bg-background shadow-md rounded-xl">
            {proceed ? (
              <PaymentForm
                id={data.id}
                price={data.price_with_fees}
                orderData={orderForm}
              />
            ) : (
              <div className="h-[200px] w-full flex justify-center items-center font-semibold text-xl text-[#7849D4]">
                Schedule your date and time before payment!
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
