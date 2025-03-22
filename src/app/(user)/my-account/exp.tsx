"use client";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";

import AddExpMod from "./addExpMod";
import EditExpMod from "./edit-exp-mod";
import DelExp from "./del-exp";
import { experienceType } from "@/types/others";
import { getFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { message } from "antd";

export default function Exp() {
  const [experiences, setExperiences] = useState<experienceType[]>([]);
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

  // const exps = [
  //   {
  //     jobTitle: "Business Development Executive",
  //     employmentType: "On-site",
  //     company: "bdCalling IT LTD",
  //     startDate: "Dec 2020",
  //     endDate: "June 2023",
  //   },
  //   {
  //     jobTitle: "Business Development Executive",
  //     employmentType: "On-site",
  //     company: "bdCalling IT LTD",
  //     startDate: "Dec 2020",
  //     endDate: "June 2023",
  //   },
  // ];

  return (
    <div className="py-12 px-4 md:px-8">
      <Title level={4} className="text-center md:text-left">
        Experience & Qualifications
      </Title>
      <div className="py-12 space-y-6">
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
            <div className="flex flex-row justify-end items-center gap-4 mt-4 md:mt-0">
              <EditExpMod id={item.id} token={cookies.raven} item={item} />
              <DelExp id={item.id} token={cookies.raven} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:justify-start">
        <AddExpMod />
      </div>
    </div>
  );
}
