import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface productType {
  imageSrc: string;
  title: string;
  rating: number | string;
  reviewCount: number | string;
  description: string;
  price: number;
}

export default function ProductCard({ product }: { product: productType }) {
  return (
    <Link href="/service/categories/sub-categories/cleaning" legacyBehavior>
      <div className="h-[300px] sm:h-[300px] sm:min-w-[180px] md:h-[500px] md:min-w-auto rounded-xl p-2 md:p-4 shadow-md bg-background relative cursor-pointer hover:shadow-lg transition-all">
        <Image
          src={product.imageSrc} // Changed to product
          height={1000}
          width={600}
          className="group w-full h-1/3 md:h-1/2 rounded-xl"
          alt="thumbnail"
        />
        <div className="group h-2/3 md:h-1/2 flex flex-col justify-between items-start overflow-hidden">
          <div className="flex flex-col justify-start items-start">
            <div className="w-full flex flex-col md:flex-row justify-between pt-4">
              <div className="flex flex-row justify-start items-center gap-2">
                <Avatar className="size-5" />
                <Title
                  className="!m-0 !text-xs sm:!text-sm md:!text-lg"
                  level={4}
                >
                  {product.title}
                </Title>
              </div>
              <div className="flex flex-row justify-end pt-0 md:pt-0 md:justify-start items-center gap-2 text-xs sm:text-sm xl:text-lg">
                <StarIcon className="h-4 w-4 md:h-6 md:w-6" fill="" />{" "}
                <span>
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>
            <div className="flex-grow py-2 text-gray-500 text-xs md:text-base">
              {product.description} {/* Changed to product */}
            </div>
          </div>
          <div className="font-semibold text-center text-xs sm:text-sm md:text-lg w-full py-2 sm:py-4 absolute bottom-0 left-0 bg-background group-hover:bg-transparent rounded-xl">
            From {product.price.toFixed(2)}$ {/* Changed to product */}
          </div>
        </div>
      </div>
    </Link>
  );
}
