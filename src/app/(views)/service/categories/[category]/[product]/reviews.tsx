"use server";
import React from "react";
import { ReviewType } from "@/types/others";
import ReviewCard from "./review-card";
import { Button } from "antd";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Reviews({ data }: { data: ReviewType[] }) {
  console.log("reviews");

  if (!data) {
    return <>Data not found on this</>;
  }

  // const reviews = [
  //   {
  //     name: "Charlotte Anderson",
  //     rating: 4.9,
  //     review:
  //       "Lorem ipsum dolor sit amet consectetur. Dui et lectus risus hac varius mi eget. Scelerisque egestas ut posuere nibh ac mattis ultrices ut. Vitae posuere sem congue suscipit iaculis aliquam tellus commodo. Nec pellentesque at eget venenatis. Odio purus integer mollis pretium cras natoque blandit. Sed eget porta tristique feugiat habitant sodales elit massa dolor. Auctor mi facilisis et morbi. Nibh egestas mattis nisl varius lectus consectetur. Tempor nunc at arcu leo facilisis pellentesque magna nam sapien. Cras mi convallis consectetur eget pulvinar quam urna. Interdum semper hendrerit arcu ornare. Tristique molestie",
  //   },
  //   {
  //     name: "Charlotte Anderson",
  //     rating: 4.9,
  //     review:
  //       "Lorem ipsum dolor sit amet consectetur. Dui et lectus risus hac varius mi eget. Scelerisque egestas ut posuere nibh ac mattis ultrices ut. Vitae posuere sem congue suscipit iaculis aliquam tellus commodo. Nec pellentesque at eget venenatis. Odio purus integer mollis pretium cras natoque blandit. Sed eget porta tristique feugiat habitant sodales elit massa dolor. Auctor mi facilisis et morbi. Nibh egestas mattis nisl varius lectus consectetur. Tempor nunc at arcu leo facilisis pellentesque magna nam sapien. Cras mi convallis consectetur eget pulvinar quam urna. Interdum semper hendrerit arcu ornare. Tristique molestie",
  //   },
  // ];
  return (
    <>
      {data.map((item, index) => (
        <ReviewCard key={index} item={item} />
      ))}
      <div className="w-full flex flex-row justify-center items-center">
        <Button
          variant="outlined"
          className="border-[#7849D4] border-2 mt-8 mx-auto w-4/5 font-semibold"
          size="large"
        >
          Load More
        </Button>
      </div>
    </>
  );
}
