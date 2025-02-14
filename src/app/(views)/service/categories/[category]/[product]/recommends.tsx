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
          className="h-[300px] min-w-[180px] md:h-[500px] md:min-w-auto rounded-xl p-4 shadow-md mr-4"
          key={item.title + index}
        >
          <Image
            src={item.imageSrc}
            height={1000}
            width={600}
            className="w-full h-1/3 md:h-1/2 rounded-xl"
            alt="thumbnail"
          />
          <div className="h-2/3 md:h-1/2 flex flex-col justify-between items-start overflow-hidden">
            <div className="">
              <div className="flex flex-col md:flex-row justify-between pt-4">
                <div className="flex flex-row justify-start items-center gap-2">
                  <Avatar />
                  <Title className="!m-0 !text-sm md:!text-lg" level={4}>
                    {item.title}
                  </Title>
                </div>
                <div className="flex flex-row justify-end pt-2 md:pt-0 md:justify-start items-center gap-2 text-xs md:text-lg">
                  <StarIcon className="h-4 w-4 md:h-6 md:w-6" fill="" />
                  <span>
                    {item.rating} ({item.reviewCount})
                  </span>
                </div>
              </div>
              <div className="py-2 text-gray-500 text-xs md:text-base line-clamp-3">
                {item.description}
              </div>
            </div>
            <div className="font-semibold text-center text-sm md:text-lg w-full">
              From {item.price.toFixed(2)}$
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
