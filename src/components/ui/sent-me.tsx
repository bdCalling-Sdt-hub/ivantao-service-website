import { Avatar } from "antd";
import Link from "next/link";
import React from "react";

export default function SentMe({ message }: { message: string }) {
  return (
    <div className="p-4 flex flex-row justify-start items-end gap-4">
      <Link href="/my-account">
        <Avatar size="large" />
      </Link>
      <div className="p-2 w-2/3 md:max-w-[33.333333%] px-6 bg-gray-200 rounded-full rounded-bl-xl">
        {message}
      </div>
    </div>
  );
}
