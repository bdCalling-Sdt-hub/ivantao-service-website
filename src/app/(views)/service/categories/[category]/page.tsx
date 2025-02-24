import Window from "@/components/shared/window";
import React from "react";
import { categoryPageDatas } from "../page-data";
import { redirect } from "next/navigation";
import { ArrowLeftOutlined, HomeFilled } from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";
import Shop from "../shop";

interface Categories {
  image: string;
  title: string;
  description: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const findCategory = async (): Promise<Categories | never> => {
    // Promise type added
    const foundCategory = categoryPageDatas.find(
      async (c) =>
        c.title.trim().toLowerCase() === (await params).category.toLowerCase()
    );

    if (!foundCategory) {
      redirect("/categories");
    }

    return foundCategory;
  };

  const category: Categories = await findCategory(); // Await added here

  const breads = [
    {
      href: "/",
      title: <HomeFilled className="!text-xl" />,
    },
    {
      title: await (
        await params
      ).category.replace(/\b\w/g, (char) => char.toUpperCase()),
    },
  ];

  return (
    <main className="py-12">
      <div className="px-[7%] flex flex-row justify-start items-center gap-6 py-6">
        <Button className="!rounded-full h-9 w-9">
          <ArrowLeftOutlined />
        </Button>{" "}
        <Breadcrumb
          separator={" / "}
          items={breads}
          className="font-semibold text-xl !gap-x-12"
        />
      </div>
      <Window
        cat={category}
        // catSel={categorySelection}
      />
      <Shop />
      <div className="px-[7%] flex flex-row justify-center items-center">
        <Button className="w-1/3 py-6 border-[#D5C19C] font-bold" size="large">
          Load more
        </Button>
      </div>
    </main>
  );
}
