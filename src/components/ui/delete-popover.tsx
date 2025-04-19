"use client";
import { DeleteOutlined, InfoCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, message, Popover } from "antd";
import Title from "antd/es/typography/Title";
import { deleteFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";

export default function DeletePopover({
  id,
  messaged,
  type,
}: {
  type: string;
  id: string;
  messaged: string;
}) {
  const [open, setOpen] = useState(false);
  const [cookies] = useCookies(["raven"]);

  let url = "";
  if (type === "reportListing") {
    url = "/report-delete";
  } else if (type === "user") {
    url = "/user-delete";
  } else if (type === "provider") {
    url = "/provider-delete";
  } else if (type == "custom-order") {
    url = "/delete-offer-price";
  } else if (type == "delete-career") {
    url = `/delete-career`;
  }
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      placement="topRight"
      content={
        <div className="flex flex-row justify-end items-center gap-2">
          <Button onClick={hide}>No</Button>
          <Button
            className="bg-red-500 hover:!bg-red-600 !border-none !text-background"
            onClick={async () => {
              try {
                const call = await deleteFetcher({
                  link: `${url}/${id}`,
                  token: cookies.raven,
                });
                if (!call.status) {
                  message.error(call.message);
                }
                message.success(call.message);
              } catch (error) {
                console.error(error);
              }

              hide();
            }}
          >
            Yes
          </Button>
        </div>
      }
      title={
        <div className="w-[400px] p-2">
          <Title level={5} className="">
            <InfoCircleFilled className="text-orange-400 pr-2" />
            {messaged}
          </Title>
        </div>
      }
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button className="border-none bg-red-100 !p-2">
        <DeleteOutlined className="text-xl text-red-600" />
      </Button>
    </Popover>
  );
}
