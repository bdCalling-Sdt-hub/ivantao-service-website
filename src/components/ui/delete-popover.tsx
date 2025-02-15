"use client";
import { DeleteOutlined, InfoCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Popover } from "antd";
import Title from "antd/es/typography/Title";

export default function DeletePopover({ message }: { message: string }) {
  const [open, setOpen] = useState(false);

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
            onClick={hide}
          >
            Yes
          </Button>
        </div>
      }
      title={
        <div className="w-[400px] p-2">
          <Title level={5} className="">
            <InfoCircleFilled className="text-orange-400 pr-2" />
            {message}
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
