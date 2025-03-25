"use client";
import React, { useEffect, useState, useCallback, Suspense } from "react";
import Overview from "./overview";
import Chart from "./chart";
import DashTitle from "@/components/ui/dash-title";
import { Hand } from "lucide-react";
import Title from "antd/es/typography/Title";
import { getFetcher } from "@/lib/simplifier";
import DashboardDataType from "@/types/dashboard";
import { useCookies } from "react-cookie";
import { message } from "antd";

export default function Page() {
  const [data, setData] = useState<DashboardDataType | null>(null);
  const [cookies] = useCookies(["raven"]);
  const [userName, setUserName] = useState<string | null>(null);

  const getDashData = useCallback(
    async (period: string = "weekly") => {
      try {
        const call = await getFetcher({
          link: `/total-dashboard?period=${period}`,
          token: cookies.raven,
        });
        if (!call.status) {
          message.error(call.message);
          return;
        }
        setData(call.data);
      } catch (error) {
        console.error(error);
        message.error("Failed to fetch dashboard data.");
      }
    },
    [cookies.raven]
  );

  const getUserData = useCallback(async () => {
    try {
      const call = await getFetcher({
        link: "/auth/own-profile",
        token: cookies.raven,
      });
      if (!call.status) {
        console.error(call.message);
        message.error("Failed to fetch user profile.");
        return null;
      }
      return call.data.full_name;
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch user profile.");
      return null;
    }
  }, [cookies.raven]);

  useEffect(() => {
    getDashData();
    const fetchUserName = async () => {
      const name = await getUserData();
      setUserName(name);
    };
    fetchUserName();
  }, [getDashData, getUserData]);

  const refetch = useCallback(
    async (period: string) => {
      await getDashData(period);
    },
    [getDashData]
  );

  return (
    <div className="flex flex-col min-h-screen w-full px-4 md:px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Hello, {userName ? userName : "User"}{" "}
          <Hand className="ml-2" size={20} />
        </Title>
      </DashTitle>
      <div className="md:flex-grow w-full">
        <div className="h-full w-full grid grid-rows-1 md:grid-rows-6 gap-4">
          <div className="row-span-1 md:row-span-2 w-full bg-background h-full rounded-2xl">
            <div className="h-full w-full p-4 gap-2 flex flex-col justify-start items-start">
              <Suspense fallback={<div>Loading Overview...</div>}>
                {data && <Overview data={data} refetcher={refetch} />}
              </Suspense>
            </div>
          </div>
          <div className="row-span-1 md:row-span-4 w-full bg-background rounded-2xl">
            <div className="h-full">
              <Suspense fallback={<div>Loading Chart...</div>}>
                {data && <Chart data={data} />}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
