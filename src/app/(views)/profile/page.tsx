"use client";
import React, { useEffect, useState } from "react";
import { UserType } from "@/types/userType";
import UserProfile from "./user-profile";
import { useRouter, useSearchParams } from "next/navigation";
import { useCookies } from "react-cookie";
import { getFetcher } from "@/lib/simplifier";
import { message } from "antd";

export default function Page() {
  const [data, setData] = useState<UserType | null>(null);
  const id = useSearchParams().get("id");
  const navig = useRouter();
  const [cookies] = useCookies(["raven"]);
  useEffect(() => {
    async function getUdata() {
      if (!id) {
        navig.push("/my-account");
      }
      try {
        const call = await getFetcher({
          link: `/provider-details/${id}`,
          token: cookies.raven,
        });
        console.log(call);

        if (!call.status) {
          message.error(call.message);
          return;
        }

        setData(call.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        return (
          <div className="text-center py-16">
            Error fetching user data. Please try again later.
          </div>
        );
      }
    }

    getUdata();
  }, []);

  // If no token is found, show a message
  if (!cookies.raven) {
    return (
      <div className="text-center py-16" suppressHydrationWarning>
        Please log in first
      </div>
    );
  }

  // Show loading state if data is not yet available
  if (!data) {
    return (
      <div className="text-center py-16" suppressHydrationWarning>
        Loading user data...
      </div>
    );
  }

  return (
    <main className="px-[7%] py-16">
      {data ? <UserProfile user={data} /> : "Something went wrong..."}
    </main>
  );
}
