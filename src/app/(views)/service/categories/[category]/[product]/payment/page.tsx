import BackText from "@/components/ui/back-text";
import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import DatePicker from "./date-picker";
import PaymentForm from "./payment-form";

export default function Page() {
  const orderData = {
    name: "Liam Carter",
    rating: 4.9,
    ratingAmm: 225,
    desc: `Lorem ipsum dolor sit amet consectetur. Nulla volutpat donec varius
            auctor dictum. Vitae malesuada vitae semper porttitor amet amet
            sodales integer erat. Enim id placerat lectus metus scelerisque non.
            Interdum imperdiet augue lacinia volutpat. Elementum volutpat in
            posuere cras bibendum. Pulvinar sagittis facilisis tortor turpis
            quis elit. At ut urna eu aliquam tempus lectus gravida a arcu.
            Interdum pulvinar nulla odio habitant et nec commodo morbi. Amet id
            volutpat bibendum ullamcorper vitae sed. Purus scelerisque amet
            feugiat tellus. Convallis imperdiet eget laoreet velit montes enim
            placerat non. Aliquam at at sit et volutpat dapibus suscipit quis.
            Tortor nunc mollis nunc felis risus massa. Purus morbi purus lectus
            magna amet amet sit. Et tortor fames netus consectetur feugiat
            natoque massa congue. Diam sagittis purus cursus duis. Neque
            bibendum tellus pharetra et quam ipsum porttitor fames at. Elementum
            placerat enim ultrices dictumst faucibus posuere volutpat sodales
            tristique. Sed non tincidunt quam massa.`,
    price: 52.0,
  };
  return (
    <main className="px-[7%] py-12">
      <BackText text="Order info" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-min rounded-xl bg-background p-4 shadow-md">
          <Image
            src="/images/service/1.jfif"
            height={1600}
            width={800}
            alt="thumbnail"
            className="w-full h-[300px] rounded-xl"
          />
          <div className="w-full flex flex-row justify-between gap-6 py-6">
            <div className="flex flex-row justify-start items-center gap-2">
              <Avatar size="large" />
              <Title className="!m-0" level={4}>
                {orderData.name}
              </Title>
            </div>
            <div className="flex flex-row justify-start items-center gap-2 text-lg">
              <StarIcon className="h-6 w-6" fill="" />
              <span>
                {orderData.rating} ({orderData.ratingAmm})
              </span>
            </div>
          </div>
          <p className="w-full text-xs md:text-sm">{orderData.desc}</p>
          <div className="py-8 font-bold text-xl">From ${orderData.price}</div>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-background shadow-md rounded-xl">
            <DatePicker />
          </div>
          <div className="p-6 bg-background shadow-md rounded-xl">
            <PaymentForm />
          </div>
        </div>
      </div>
    </main>
  );
}
