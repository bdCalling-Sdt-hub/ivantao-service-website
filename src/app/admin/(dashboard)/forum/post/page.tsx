import BackText from "@/components/ui/back-text";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import React from "react";
import ForumPostCard from "../forum-post-card";

export default function Page() {
  const posts = [
    {
      name: "Linuxoid",
      time: "25 min ago", // Add time information
      title: "It was a great experience for me..",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.",
      avatar: "/images/avatars/linuxoid.jpg",
      reports: 0,
    },
    {
      name: "CodeNinja",
      time: "1 hour ago",
      title: "React Hooks Deep Dive",
      content:
        "Exploring the power of useState and useEffect in React.  It's amazing!",
      avatar: "/images/avatars/codeninja.png",
      reports: 5,
    },
    {
      name: "DataWhiz",
      time: "2 days ago",
      title: "Data Visualization Trends",
      content:
        "A look at the latest trends in data visualization and how they are changing the way we understand data.",
      avatar: "/images/avatars/datawhiz.svg",
      reports: 0,
    },
    {
      name: "DataWhiz",
      time: "2 days ago",
      title: "Data Visualization Trends",
      content:
        "A look at the latest trends in data visualization and how they are changing the way we understand data.",
      avatar: "/images/avatars/datawhiz.svg",
      reports: 0,
    },
  ];
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
            {posts.map((item, index) => (
              <ForumPostCard {...item} key={index} type="post" />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
