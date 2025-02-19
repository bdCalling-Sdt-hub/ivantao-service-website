import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Categories() {
  const catagories = [
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
    {
      src: "/images/categories/household.jfif",
      title: "Cleaning like a pro",
      posts: "23 posts",
    },
  ];
  return (
    <div className="py-12 w-full overflow-x-auto">
      <div className="w-auto whitespace-nowrap flex flex-row justify-start items-center gap-6">
        {catagories.map((item, index) => (
          <div
            className="w-[300px] h-[300px] overflow-hidden shadow-sm bg-background flex-shrink-0 rounded-xl"
            key={item.title + index}
          >
            <Image
              src={item.src}
              height={800}
              width={400}
              alt="thumbnail"
              className="w-full h-[200px]"
            />
            <div className="flex flex-row justify-between items-center h-[100px] px-4">
              <div className="">
                <Title level={4}>{item.title}</Title>
                <p>{item.posts} posts</p>
              </div>
              <div className="">
                <Button
                  shape="circle"
                  size="large"
                  className="bg-gray-300"
                  href="/forum/category"
                >
                  <ArrowUpRightIcon />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
