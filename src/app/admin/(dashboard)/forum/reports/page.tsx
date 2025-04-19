import BackText from "@/components/ui/back-text";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import React from "react";
import ForumPostCard from "./report-card";
import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
import { postType } from "@/types/forums";

export default async function Page() {
  const token = cookies().get("raven")?.value;
  const call = await getFetcher({ link: "/list-forum-report", token });
  const posts: postType[] = call.data.data;
  console.log(posts);

  if (!call.status) {
    return (
      <>
        <main className="h-full w-full flex flex-col justify-start items-start p-4 overflow-y-auto">
          <DashTitle admin>
            <Title level={3} className="flex items-center text-2xl">
              Forum Reports
            </Title>
            <p className="text-gray-400">
              Admin with access to this workspace can promote or demote user
              maintain business insights
            </p>
          </DashTitle>
          <div className="flex-grow w-full">
            <BackText text="Back" />
            <div className="">{call.message}</div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main className="h-full w-full flex flex-col justify-start items-start p-4 overflow-y-auto">
        <DashTitle admin>
          <Title level={3} className="flex items-center text-2xl">
            Forum Reports
          </Title>
          <p className="text-gray-400">
            Admin with access to this workspace can promote or demote user
            maintain business insights
          </p>
        </DashTitle>
        <div className="flex-grow w-full">
          <BackText text="Back" />
          <div className="">
            {posts.map((item, index) => (
              <ForumPostCard type="forum-report" post={item} key={index} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
