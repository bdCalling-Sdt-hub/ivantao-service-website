import React from "react";
import Image from "next/image";
import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { StarIcon } from "lucide-react";
import Link from "next/link";

export default function Recommends() {
  const recommends = [
    {
      imageSrc: "/images/service/1.webp",
      title: "Sophia Bennett",
      rating: 4.9,
      reviewCount: 225,
      description:
        "Lorem ipsum dolor sit amet consectetur. Dictum cras facilisi nunc facilisis. Eleifend vel sed donec felis libero. In imperdiet pellentesque at urna velit in massa potenti. Id eleifend nulla odio dignissim malesuada est egestas congue arcu.",
      price: 52.0,
    },
    {
      imageSrc: "/images/service/1.webp",
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
      {recommends.map((product, index) => (
        <Link
          href="/service/categories/sub-categories/cleaning"
          key={index}
          legacyBehavior
        >
          <div className="h-[300px] bg-none min-w-[180px] md:h-[400px] lg:h-[400px] md:min-w-auto rounded-xl p-4 shadow-md bg-background relative cursor-pointer hover:shadow-lg hover:bg-gray-100 transition-all">
            <Image
              src={product.imageSrc}
              height={1000}
              width={600}
              className="w-full h-1/3 md:h-1/2 rounded-xl"
              alt="thumbnail"
            />
            <div className="h-2/3 md:h-1/2 flex flex-col justify-between items-start overflow-hidden">
              <div className="flex flex-col justify-start items-start">
                <div className="w-full flex flex-col md:flex-row justify-between pt-4">
                  <div className="flex flex-row justify-start items-center gap-2">
                    <Avatar /> {/* Assuming Avatar is defined elsewhere */}
                    <Title className="!m-0 !text-sm md:!text-lg" level={4}>
                      {product.title}
                    </Title>
                  </div>
                  <div className="flex flex-row justify-end pt-2 md:pt-0 md:justify-start items-center gap-2 text-xs sm:text-sm xl:text-lg">
                    <StarIcon className="h-4 w-4 md:h-6 md:w-6" fill="" />{" "}
                    <span>
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                </div>
                <div className="flex-grow py-2 text-gray-500 text-xs md:text-base">
                  {product.description}
                </div>
              </div>
              <div className="font-semibold text-center text-sm md:text-lg w-full py-4 absolute bottom-0 left-0 bg-background rounded-xl">
                From {product.price.toFixed(2)}$
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
