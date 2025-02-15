import { Avatar, Button } from "antd";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function User() {
  return (
    <div className="py-2 px-4 bg-[#F7F3EB] rounded-xl flex flex-row justify-between w-full">
      <Link href="/provider/profile">
        <div className="flex flex-row justify-start items-center gap-2 text-lg font-semibold">
          <Avatar />
          <span>Elena</span>
        </div>
      </Link>
      <Button type="text" href="/provoder/logout">
        <LogOutIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
