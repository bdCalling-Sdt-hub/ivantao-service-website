"use client";
import { getUserData } from "@/lib/api";
import { Avatar, Button } from "antd";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function User() {
  const [username, setUsername] = useState<string | null>(null);
  const [userDp, setUserDp] = useState<string | null>(null);
  const [cookies] = useCookies(["raven"]);
  useEffect(() => {
    async function getUser() {
      try {
        const call = await getUserData(cookies.raven);
        if (!call.status) {
          console.error(call.message);
          return;
        }
        setUsername(call.data.full_name);
        setUserDp(call.data.image);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, []);

  return (
    <div className="py-2 px-4 bg-[#F0E8FF] rounded-xl flex flex-row justify-between w-full">
      <Link href="/provider/profile">
        <div className="flex flex-row justify-start items-center gap-2 text-lg font-semibold">
          <Avatar src={userDp} />
          <span>{username}</span>
        </div>
      </Link>
      <Button type="text" href="/provoder/logout">
        <LogOutIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
