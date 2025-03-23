"use client";
import { UserType } from "@/types/userType";
import { Button, message } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { useEffect } from "react";
import { getFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { experienceType } from "@/types/others";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProviderData({ user }: { user: UserType }) {
  //
  const [experiences, setExperiences] = React.useState<experienceType[]>([]);
  const [cookies] = useCookies(["raven"]);
  useEffect(() => {
    async function GetExps() {
      try {
        const call = await getFetcher({
          link: "/get-experience",
          token: cookies.raven,
        });
        if (!call.status) {
          message.error(call.message);
          return;
        }
        setExperiences(call.data);
      } catch (error) {
        console.error(error);
      }
    }
    GetExps();
  }, []);

  const services = ["Cleaning", "Cooking", "Baby Sitting", "Pet Service"];
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
  const dailyHours = [
    { from: "8am", to: "1pm" },
    { from: "2pm", to: "7pm" },
  ];
  return (
    <>
      <div className="grid grid-cols-2 mt-12 gap-6">
        <div className="bg-[#F0E8FF] p-12 rounded-lg">
          <Title level={2}>Providing services:</Title>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {services.map((item, i) => (
              <div
                key={i}
                className="px-2 py-1  bg-[#7849D4] text-background rounded-xl font-semibold text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F0E8FF] p-12 rounded-lg">
          <div className="p-2 text-2xl font-bold rounded-lg">Weekly</div>
          <div className="p-2 text-lg font-bold rounded-lg">
            Weekly - 6 days
          </div>
          <div className="flex flex-row items-center gap-4 flex-wrap mb-4 py-8">
            {days.map((day) => (
              <Button
                key={day}
                className="rounded-full border-2 border-black px-3 py-3 text-sm font-medium h-12 w-12 flex justify-center items-center"
              >
                {day}
              </Button>
            ))}
          </div>
          <div className="p-2 text-xl font-bold rounded-lg">
            Daily - 10 Hours
          </div>
          <div className="grid grid-cols-3 gap-6 py-4">
            {dailyHours.map((hours, index) => (
              <Button
                key={index}
                size="large"
                className="bg-background shadow-none text-gray-700 rounded-md px-4 py-2 text-sm font-medium !border-none overflow-visible hover:bg-gray-200"
              >
                {hours.from} - {hours.to}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="text-lg font-bold mt-12">Experience & Qualifications</div>
      <div className="mt-12">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="p-3 md:p-6 md:px-8 rounded-xl flex flex-col md:flex-row justify-between items-end md:items-center bg-[#F0E8FF]"
          >
            <div className="flex flex-col w-full md:w-auto">
              <div className="flex flex-col md:flex-row justify-start items-start gap-2 md:gap-4">
                <Title level={5} className="!text-sm md:!text-base !m-0">
                  {item.job_role}
                </Title>
                {/* <p className="text-xs md:text-sm">({item.currently_working})</p> */}
              </div>
              <div className="md:space-x-2 flex flex-col md:flex-row justify-start items-start md:items-center">
                <p className="font-semibold text-xs md:text-base pt-2 md:pt-0">
                  {item.company_name}
                </p>
                <p className="text-gray-400 text-xs md:text-sm w-full md:w-auto md:w-m text-end">
                  {item.join_date}{" "}
                  {item.resign_date ? "- " + item.resign_date : ""}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-end items-center gap-4 mt-4 md:mt-0"></div>
          </div>
        ))}
      </div>
    </>
  );
}
