"use server";
import { getFetcher } from "@/lib/simplifier";
import { Category } from "@/types/Services";
import { cookies } from "next/headers";

import React from "react";
import CatCard from "./cat_card";

export default async function Categories() {
  const cookieStore = cookies();
  const token = cookieStore.get("raven");
  const call = await getFetcher({
    link: "/get-all-category",
    token: token?.value,
  });

  if (!token) {
    return (
      <div className="py-12 w-full overflow-x-auto flex justify-center items-center">
        You must be logged in to see this contents
      </div>
    );
  }

  const categories: Category[] = call.data.data;
  // const catagories = [
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  //   {
  //     src: "/images/categories/household.webp",
  //     title: "Cleaning like a pro",
  //     posts: "23 posts",
  //   },
  // ];
  return (
    <div className="py-12 w-full overflow-x-auto">
      <div className="w-auto whitespace-nowrap flex flex-row justify-start items-center gap-6">
        {categories.map((item) => (
          <CatCard item={item} key={item.id} token={token?.value} />
        ))}
      </div>
    </div>
  );
}
