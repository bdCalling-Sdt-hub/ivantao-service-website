import React from "react";
import Title from "antd/es/typography/Title";

import { Avatar, Button } from "antd";
import { StarIcon } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Charlotte Anderson",
      rating: 4.9,
      review:
        "Lorem ipsum dolor sit amet consectetur. Dui et lectus risus hac varius mi eget. Scelerisque egestas ut posuere nibh ac mattis ultrices ut. Vitae posuere sem congue suscipit iaculis aliquam tellus commodo. Nec pellentesque at eget venenatis. Odio purus integer mollis pretium cras natoque blandit. Sed eget porta tristique feugiat habitant sodales elit massa dolor. Auctor mi facilisis et morbi. Nibh egestas mattis nisl varius lectus consectetur. Tempor nunc at arcu leo facilisis pellentesque magna nam sapien. Cras mi convallis consectetur eget pulvinar quam urna. Interdum semper hendrerit arcu ornare. Tristique molestie",
    },
    {
      name: "Charlotte Anderson",
      rating: 4.9,
      review:
        "Lorem ipsum dolor sit amet consectetur. Dui et lectus risus hac varius mi eget. Scelerisque egestas ut posuere nibh ac mattis ultrices ut. Vitae posuere sem congue suscipit iaculis aliquam tellus commodo. Nec pellentesque at eget venenatis. Odio purus integer mollis pretium cras natoque blandit. Sed eget porta tristique feugiat habitant sodales elit massa dolor. Auctor mi facilisis et morbi. Nibh egestas mattis nisl varius lectus consectetur. Tempor nunc at arcu leo facilisis pellentesque magna nam sapien. Cras mi convallis consectetur eget pulvinar quam urna. Interdum semper hendrerit arcu ornare. Tristique molestie",
    },
  ];
  return (
    <>
      {reviews.map((item, index) => (
        <div
          className="p-6 bg-background shadow-md rounded-xl w-full"
          key={item.name + index}
        >
          <div className="flex flex-row justify-start gap-6 pt-0">
            <div className="flex flex-row justify-start items-center gap-2">
              <Avatar size="large" />
              <Title className="!m-0" level={4}>
                {item.name}
              </Title>
            </div>
            <div className="flex flex-row justify-start items-center gap-2 text-lg">
              <StarIcon className="h-6 w-6" fill="" />
              <span>{item.rating}</span>
            </div>
          </div>
          <p className="text-gray-500 font-semibold text-sm pt-4">
            {item.review}
          </p>
        </div>
      ))}
      <div className="w-full flex flex-row justify-center items-center">
        <Button
          variant="outlined"
          className="border-[#DAC7A0] border-2 mt-8 mx-auto w-4/5 font-semibold"
          size="large"
        >
          Load More
        </Button>
      </div>
    </>
  );
}
