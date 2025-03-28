import BackText from "@/components/ui/back-text";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import React from "react";
import ForumPostCard from "../forum-post-card";
import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
import { postType } from "@/types/forums";

export default async function Page({ params }: { params: { posts: string } }) {
  const token = cookies().get("raven")?.value;

  // const catCall = await getFetcher({ link: "" });

  const call = await getFetcher({
    link: `/forum-list?categories_id=${params.posts}`,
    token: token,
  });
  console.log(call);

  // const posts: postType[] = call.data;
  return (
    <>
      <main className="h-full w-full flex flex-col justify-start items-start p-4 overflow-y-auto">
        <DashTitle admin>
          <Title level={3} className="flex items-center text-2xl">
            Forum posts
          </Title>
          <p className="text-gray-400">
            Admin with access to this workspace can promote or demote user
            maintain business insights
          </p>
        </DashTitle>
        <div className="flex-grow w-full">
          <BackText text="Cleaning like a pro" />
          <div className="">
            {/* {posts.map((item) => (
              <ForumPostCard post={item} key={item.id} type="post" />
            ))} */}
          </div>
        </div>
      </main>
    </>
  );
}
