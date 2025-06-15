"use client";
import Title from "antd/es/typography/Title";
import type React from "react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Category, ServiceType } from "@/types/Services";
import { getFetcher } from "@/lib/simplifier";
import Image from "next/image";

export default function Categories() {
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [serv, setServ] = useState<ServiceType[] | null>([]);

  useEffect(() => {
    async function getData() {
      try {
        const call = await getFetcher({ link: "/get-all-category" });
        const data = call.data.data;
        setCategories(data);

        const servCall = await getFetcher({ link: "/get-all-services" });
        const reData = servCall.data.data;
        setServ(reData);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div className="bg-[#7849D4]">
        <section className="px-4 sm:px-6 lg:px-[7%] py-8 sm:py-12">
          <div id="categories">
            <Title
              level={2}
              className="mb-6 text-center md:text-left !text-background"
            >
              Categories
            </Title>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories?.slice(0, 10).map((item, i) => (
                <Link href={`service/categories/${item.id}`} key={i}>
                  <div className="p-4 shadow-sm flex flex-col justify-center items-center text-center font-semibold gap-4 rounded-lg bg-background w-full h-[140px] sm:h-[160px] hover:shadow-lg transition-shadow cursor-pointer">
                    {/* <item.Icon style={iconStyle} /> */}
                    <Image
                      src={item.icon}
                      height={64}
                      width={64}
                      alt="thumbnail"
                    />
                    <div className="text-sm sm:text-base !text-black">
                      {item.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="px-[20px] sm:px-6 lg:px-[7%] py-8 sm:py-12">
          <div id="services">
            <Title
              level={2}
              className="mb-6 text-center md:text-left !text-background"
            >
              Top services
            </Title>
            <div className="overflow-x-auto w-full py-4 sm:py-8">
              <div className="flex space-x-4 pb-4 overflow-x-auto">
                {serv?.slice(0, 12).map((item, index) => (
                  <Link
                    key={index}
                    href={`/service/categories/${item.service_sub_categories_id}`}
                    className="hover:text-black"
                  >
                    <div className="p-4 bg-background shadow-sm flex flex-col justify-between items-center font-semibold gap-4 rounded-lg w-[120px] sm:w-[240px] md:w-[280px] h-[180px] sm:h-[280px] hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0">
                      <div className="w-full text-sm sm:text-xl text-center sm:text-left break-words whitespace-normal line-clamp-3">
                        {item.title}
                      </div>
                      <div className="bg-[#CADBD9] w-full h-[70px] sm:h-[200px] flex flex-col justify-center items-center rounded-xl overflow-hidden">
                        <div
                          className="bg-cover bg-center w-full h-full"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        ></div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
