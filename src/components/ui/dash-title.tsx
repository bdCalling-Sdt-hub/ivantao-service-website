import React from "react";
import { BellIcon } from "lucide-react";
import { Button } from "antd";
export default function DashTitle({
  children,
  admin,
}: Readonly<{
  children: React.ReactNode;
  admin?: boolean;
}>) {
  return (
    <div className="flex flex-row justify-between items-start w-full mb-4">
      <div>{children}</div>
      <Button
        type="text"
        shape="circle"
        href={`/${admin ? "admin" : "provider"}/notification`}
      >
        <BellIcon size={24} />
      </Button>
    </div>
  );
}
