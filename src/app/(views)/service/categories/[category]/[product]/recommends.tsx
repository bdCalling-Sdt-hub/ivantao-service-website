import React from "react";
import Image from "next/image";
import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { StarIcon } from "lucide-react";

export default function Recommends() {
  const recommends = [
    {
      imageSrc: "/images/service/1.jfif",
      title: "Sophia Bennett",
      rating: 4.9,
      reviewCount: 225,
      description:
        "Lorem ipsum dolor sit amet consectetur. Dictum cras facilisi nunc facilisis. Eleifend vel sed donec felis libero. In imperdiet pellentesque at urna velit in massa potenti. Id eleifend nulla odio dignissim malesuada est egestas congue arcu.",
      price: 52.0,
    },
    {
      imageSrc: "/images/service/1.jfif",
      title: "Sophia Bennett",
      rating: 4.9,
      reviewCount: 225,
      description:
        "Lorem ipsum dolor sit amet consectetur. Dictum cras facilisi nunc facilisis. Eleifend vel sed donec felis libero. In imperdiet pellentesque at urna velit in massa potenti. Id eleifend nulla odio dignissim malesuada est egestas congue arcu.",
      price: 52.0,
    },
  ];

  return (
    <>
      {recommends.map((item, index) => (
        <div
          className="h-[500px] rounded-xl p-2 shadow-md"
          key={item.title + index}
        >
          <Image
            src={item.imageSrc}
            height={1000}
            width={600}
            className="w-full h-1/2 rounded-xl"
            alt="thumbnail"
          />
          <div className="h-1/2 flex flex-col justify-between items-start">
            <div className="">
              <div className="flex flex-row justify-between pt-4">
                <div className="flex flex-row justify-start items-center gap-2">
                  <Avatar size="large" />
                  <Title className="!m-0" level={3}>
                    {item.title}
                  </Title>
                </div>
                <div className="flex flex-row justify-start items-center gap-2 text-lg">
                  <StarIcon className="h-6 w-6" fill="" />
                  <span>
                    {item.rating}({item.reviewCount})
                  </span>
                </div>
              </div>
              <p className="py-2 text-gray-500">{item.description}</p>
            </div>
            <div className="font-semibold text-center text-lg w-full">
              From {item.price}$
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
