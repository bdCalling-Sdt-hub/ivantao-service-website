/* eslint-disable @next/next/no-img-element */
"use server";
import Title from "antd/es/typography/Title";
import React from "react";
// import { services } from "./serviceData";
// import Image from "next/image";
import Link from "next/link";
import { getFetcher } from "@/lib/simplifier";
import { Category } from "@/types/Services";
export default async function Page() {
  const call = await getFetcher({
    link: "/get-all-category",
    // token: token?.value,
  });
  console.log(call.data);

  console.log(call);
  if (!call.status) {
  }
  const services: Category[] = call.data.data;

  console.log(services);

  return (
    <main className="py-16 px-[7%] mx-auto">
      <Title className="text-center">Services We Provide</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <Link key={index} href={`/service/categories/${item.id}`}>
            <div className="bg-background h-auto w-full p-6 rounded-xl hover:shadow-lg cursor-pointer transition-shadow">
              <div>
                <img
                  src={item?.icon}
                  alt="thumbnail"
                  width={400}
                  height={200}
                  className="h-[200px] w-full object-contain rounded-lg"
                />
              </div>
              <div className="pt-6 text-center">
                <Title level={4} className="pb-2">
                  {item?.name}
                </Title>
                {/* <p className="text-sm">{item.description}</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className=""></div>
    </main>
  );
}
