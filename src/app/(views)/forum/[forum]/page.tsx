"use server";
import Title from "antd/es/typography/Title";
import Poster from "./poster";
import PopPosts from "../pop-posts";
import { cookies } from "next/headers";
// import { getFetcher } from "@/lib/simplifier";

export default async function Page({ params }: { params: { forum: string } }) {
  // const call = await getFetcher({ link: "" });
  const cookieStore = await cookies();
  const token = cookieStore.get("raven")?.value;

  if (!token) {
    return (
      <>
        <main className="py-12 px-4 md:px-[7%]">
          <Title level={3} className="text-center pb-12">
            You must be logged in to see this content!
          </Title>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="py-12 px-4 md:px-[7%]">
        <Title level={3} className="text-center pb-12">
          {/* <span className="capitalize">{params.forum}</span> Forum */}
        </Title>
        <Poster id={params.forum} />
        <section>
          <PopPosts
            notitle
            link={`/forum-list?categories_id=${params.forum}`}
          />
        </section>
      </main>
    </>
  );
}
