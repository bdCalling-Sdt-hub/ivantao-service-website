"use client";
import Title from "antd/es/typography/Title";
import type React from "react";
// import {
//   BulbOutlined,
//   HomeOutlined,
//   RocketOutlined,
//   BookOutlined,
//   ShopOutlined,
//   LaptopOutlined,
//   ToolOutlined,
//   SmileOutlined,
// } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Category, ServiceType } from "@/types/Services";
import { getFetcher } from "@/lib/simplifier";

// interface Service {
//   image: string;
//   title: string;
//   color: string;
//   link: string;
// }

// const iconStyle = { fontSize: "36px" };

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

  // const categories: Category[] = [
  //   {
  //     Icon: SmileOutlined,
  //     title: "Everyday essentials",
  //     link: "/service/categories",
  //   },
  //   {
  //     Icon: HomeOutlined,
  //     title: "Household",
  //     link: "/service/categories",
  //   },
  //   {
  //     Icon: BulbOutlined,
  //     title: "Creative",
  //     link: "/service/categories",
  //   },
  //   {
  //     Icon: LaptopOutlined,
  //     title: "Information technology",
  //     link: "/service/categories",
  //   },
  //   {
  //     Icon: RocketOutlined,
  //     title: "Specialized",
  //     link: "/service/categories",
  //   },
  //   {
  //     Icon: ShopOutlined,
  //     title: "Commercial",
  //     link: "/service/categories",
  //   },
  //   {
  //     Icon: ToolOutlined,
  //     title: "Professional",
  //     link: "/service/categories",
  //   },
  //   {
  //     Icon: BookOutlined,
  //     title: "Education",
  //     link: "/service/categories",
  //   },
  // ];

  // const services: Service[] = [
  //   {
  //     image: "/images/service-images/0.png",
  //     title: "Personal Shopping",
  //     color: "#4E8681",
  //     link: "/service/categories/shopping",
  //   },
  //   {
  //     image: "/images/service-images/1.png",
  //     title: "Laundry",
  //     color: "#864E4E",
  //     link: "/service/categories/laundry",
  //   },
  //   {
  //     image: "/images/service-images/2.png",
  //     title: "Custom Tailored",
  //     color: "#4E866A",
  //     link: "/service/categories/custom",
  //   },
  //   {
  //     image: "/images/service-images/3.png",
  //     title: "Sports",
  //     color: "#524E86",
  //     link: "/service/categories/sports",
  //   },
  //   {
  //     image: "/images/service-images/4.png",
  //     title: "Photography",
  //     color: "#7C864E",
  //     link: "/service/categories/photography",
  //   },
  //   {
  //     image: "/images/service-images/5.png",
  //     title: "IT Support",
  //     color: "#4E8681",
  //     link: "/service/categories/it-support",
  //   },
  //   {
  //     image: "/images/service-images/6.png",
  //     title: "Landscaping",
  //     color: "#4E8681",
  //     link: "/service/categories/landscaping",
  //   },
  //   {
  //     image: "/images/service-images/7.png",
  //     title: "Music Lessons",
  //     color: "#403097",
  //     link: "/service/categories/music-lessons",
  //   },
  // ];

  return (
    <>
      <div className="bg-[#7849D4]">
        <section className="px-4 sm:px-6 lg:px-[7%] py-8 sm:py-12">
          <div id="categories">
            <Title level={2} className="mb-6 text-center md:text-left">
              Categories
            </Title>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories?.slice(0, 10).map((item, i) => (
                <Link href={`service/categories/${item.id}`} key={i}>
                  <div className="p-4 shadow-sm flex flex-col justify-center items-center text-center font-semibold gap-4 rounded-lg bg-background w-full h-[140px] sm:h-[160px] hover:shadow-lg transition-shadow cursor-pointer">
                    {/* <item.Icon style={iconStyle} /> */}
                    <div
                      className="size-16 bg-center border"
                      style={{ backgroundImage: `url'${item.icon}'` }}
                    ></div>
                    <div className="text-sm sm:text-base">{item.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="px-[20px] sm:px-6 lg:px-[7%] py-8 sm:py-12">
          <div id="services">
            <Title level={2} className="mb-6 text-center md:text-left">
              Top services
            </Title>
            <div className="overflow-x-auto w-full py-4 sm:py-8">
              <div className="flex space-x-4 pb-4 whitespace-nowrap overflow-x-auto">
                {serv?.slice(0, 12).map((item, index) => (
                  <Link key={index} href={"/"} className="hover:text-black">
                    <div
                      className="p-4 bg-background shadow-sm flex flex-col justify-between items-center font-semibold gap-4 rounded-lg w-[120px] sm:w-[240px] md:w-[280px] h-[180px] sm:h-[280px] hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0"
                      // style={{ backgroundColor: item.color }}
                    >
                      <div className="w-full text-sm !text-center sm:text-left sm:text-xl">
                        {item.title}
                      </div>
                      <div className="bg-[#CADBD9] w-full h-[70px] sm:h-[200px] flex flex-col justify-center items-center rounded-xl">
                        <div
                          className="bg-cover bg-left-top w-[50px] h-[50px] sm:w-[160px] sm:h-[160px]"
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
