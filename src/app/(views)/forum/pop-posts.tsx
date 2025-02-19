import PostCard from "@/components/ui/post-card";

import Title from "antd/es/typography/Title";
import React from "react";

export default function PopPosts({ notitle }: { notitle?: boolean }) {
  const posts = [
    {
      name: "Linuxoid",
      time: "25 min ago", // Add time information
      title: "It was a great experience for me..",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.",
      avatar: "/images/avatars/linuxoid.jpg",
    },
    {
      name: "CodeNinja",
      time: "1 hour ago",
      title: "React Hooks Deep Dive",
      content:
        "Exploring the power of useState and useEffect in React.  It's amazing!",
      avatar: "/images/avatars/codeninja.png",
    },
    {
      name: "DataWhiz",
      time: "2 days ago",
      title: "Data Visualization Trends",
      content:
        "A look at the latest trends in data visualization and how they are changing the way we understand data.",
      avatar: "/images/avatars/datawhiz.svg",
    },
    {
      name: "DataWhiz",
      time: "2 days ago",
      title: "Data Visualization Trends",
      content:
        "A look at the latest trends in data visualization and how they are changing the way we understand data.",
      avatar: "/images/avatars/datawhiz.svg",
    },
  ];

  return (
    <main className="py-12">
      {notitle ? "" : <Title level={2}>Popular posts</Title>}
      <div className="py-12">
        {posts.map((item, index) => (
          <PostCard {...item} key={index} />
        ))}
      </div>
    </main>
  );
}
