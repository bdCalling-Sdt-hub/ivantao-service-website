import React from "react";

import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import BackText from "@/components/ui/back-text";
import { Image } from "antd";
import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
import { ServiceType } from "@/types/Services";
import ServiceControl from "./service-control";

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const token = cookies().get("raven")?.value;
  const call = await getFetcher({
    link: `/get-services-details/${params.product}`,
    token,
  });

  if (!call.status) {
    return <>Service not found</>;
  }

  const service: ServiceType = call.data.service;

  return (
    <div className="flex flex-col h-screen w-full px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Add your product for service
        </Title>
        <p className="text-gray-400">
          Here you can add your service to share with other people & also can
          earn money.
        </p>
      </DashTitle>
      <div className="pt-2 w-full h-full flex flex-col justify-start items-stretch">
        <BackText text="Back" butt />
        <div className="h-[300px] overflow-hidden flex flex-col justify-center items-center rounded-xl">
          <Image src={service.image} alt="thumbnail" className="w-full" />
        </div>
        <div className="flex-grow w-full pt-6">
          <div className="h-full w-full rounded-xl bg-background space-y-4 p-6">
            <Title className="!m-0" level={3}>
              {service.title}
            </Title>
            {/* <p>66 order in queue</p> */}
            <p>{service.description}</p>
            <div className="">
              <Title className="!m-0" level={3}>
                ${parseInt(service.price).toFixed(2)}
              </Title>
            </div>
            <div className="">
              <ServiceControl service={service} token={token} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
