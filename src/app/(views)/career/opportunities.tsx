"use server";
import ApplyButton from "@/components/ui/apply-button";
import { getFetcher } from "@/lib/simplifier";
import { Job, JobData } from "@/types/others";
import { SearchOutlined } from "@ant-design/icons";
import { message } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { cookies } from "next/headers";
import React from "react";

export default async function Opportunities() {
  // if (typeof window !== "undefined") {
  //   return <>client</>;
  // } else {
  //   return <>server</>;
  // }

  const cookieStore = await cookies();
  const token = cookieStore.get("raven")?.value;
  if (!token) {
    return (
      <div className="h-[300px] w-full flex justify-center items-center text-lg font-semibold">
        Please login to see the available job posts
      </div>
    );
  }
  let call;

  try {
    call = await getFetcher({ link: "/list-job", token: token });
  } catch (error) {
    console.error(error);
  }

  if (!call.status) {
    message.error(call.message);
  }

  const jobData: JobData[] = call.data;
  return (
    <section className="py-16">
      <div className="mx-auto">
        <div className="px-[7%] bg-background py-20 relative">
          <div className="absolute top-6 right-0 mr-[7%] px-6 py-2 rounded-full border-2 border-[#7849D4]">
            3 open positions
          </div>
          <Title level={2} className="mb-0 text-center">
            Career opportunities
          </Title>
          <Paragraph className="text-gray-600 mb-8 text-center text-sm md:text-lg">
            Explore our open roles for working totally remotely, from the office
            or somewhere in between.
          </Paragraph>
          <div className="px-12 flex flex-row justify-center items-center mt-12">
            <div className="border flex flex-row justify-between items-center w-full sm:w-4/5 md:w-1/2">
              <input
                type="text"
                className="flex-1 p-3"
                placeholder="Search opportunities"
              />
              <button className="p-3 px-4 bg-[#7849D4]">
                <SearchOutlined className="text-background" />
              </button>
            </div>
          </div>
        </div>

        <div className="!py-12 !px-[7%]">
          {Object.entries(jobData as unknown as Record<string, Job[]>).map(
            ([category, jobs]) => (
              <div className="pt-12" key={category}>
                {/* Category Header */}
                <div className="h-[120px] relative flex justify-center items-center">
                  <div className="absolute left-0 bg-[#FFFFFF] p-1">
                    <div className="bg-[#7849D4] px-2 md:px-4 py-2 rounded-full font-bold text-background text-xs md:text-base">
                      {category}
                    </div>
                  </div>
                  <div className="w-full h-[2px] bg-[#7849D4]"></div>
                </div>

                {/* Jobs in this Category */}
                <div className="space-y-6">
                  {jobs.map((job) => (
                    <div
                      className="py-6 px-8 flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center font-semibold rounded-xl bg-background"
                      key={job.id}
                    >
                      <div className="w-1/3">
                        <Title
                          level={5}
                          className="!m-0 !text-2xl md:!text-base text-center md:text-start"
                        >
                          {job.job_role}
                        </Title>
                      </div>
                      <div className="!text-sm md:!text-base w-1/3">
                        {job.address}
                      </div>
                      <ApplyButton to={`/career/${job.id}`} />
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
