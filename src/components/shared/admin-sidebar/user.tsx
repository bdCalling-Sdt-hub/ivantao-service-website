"use client";
import { getFetcher } from "@/lib/simplifier";
import { Avatar, Button, message } from "antd";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function User() {
  const [cookies, , removeCookie] = useCookies(["raven"]);
  const [adminName, setAdminName] = useState("");
  const [adminImg, setAdminImg] = useState("");
  const navig = useRouter();
  useEffect(() => {
    async function getUser() {
      try {
        const call = await getFetcher({
          link: "/auth/own-profile",
          token: cookies.raven,
        });
        console.log(call);
        setAdminName(call.data.full_name);
        setAdminImg(call.data.image);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <div className="py-2 px-4 bg-[#F0E8FF] rounded-xl flex flex-row justify-between w-full">
      <Link href="/admin/profile">
        <div className="flex flex-row justify-start items-center gap-2 text-sm font-semibold">
          <Avatar src={adminImg} />
          <span>{adminName}</span>
        </div>
      </Link>
      <Button type="text">
        <LogOutIcon
          className="h-4 w-4"
          onClick={() => {
            try {
              removeCookie("raven");
              message.success("Logged out successfully");
              navig.push("/admin/login");
            } catch (error) {
              console.error(error);
              console.log("failed to logout");
            }
          }}
        />
      </Button>
    </div>
  );
}
