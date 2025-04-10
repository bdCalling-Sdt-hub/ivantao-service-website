"use client";
import { deleteFetcher } from "@/lib/simplifier";
import { ServiceType } from "@/types/Services";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function ServiceControl({
  service,
  token,
}: {
  service: ServiceType;
  token?: string;
}) {
  const navig = useRouter();
  return (
    <>
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        className="w-full mt-8 bg-[#7849D4] text-background font-bold hover:!bg-[#653eb3]"
        variant="filled"
      >
        Edit
      </Button>
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        className="w-full mt-8 border-red-500 text-black font-bold hover:!text-black !bg-transparent hover:!bg-red-500"
        onClick={async () => {
          try {
            const call = await deleteFetcher({
              link: `/delete-service/${service.id}`,
              token,
            });
            message.success(call.message);
            navig.push("/provider/services");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Delete
      </Button>
    </>
  );
}
