import Window from "@/components/shared/window";
import React from "react";
import { categoryPageDatas, categorySelection } from "../page-data";
import { redirect } from "next/navigation";
import { HomeFilled } from "@ant-design/icons";
import { Breadcrumb } from "antd";

interface Categories {
  image: string;
  title: string;
  description: string;
}

export default function Page({ params }: { params: { category: string } }) {
  const findCategory = (): Categories => {
    return (
      categoryPageDatas.find(
        (c) => c.title.trim().toLowerCase() === params.category.toLowerCase()
      ) || redirect("/categories")
    );
  };

  const category: Categories = findCategory();
  const breads = [
    {
      href: "/",
      title: <HomeFilled className="!text-xl" />,
    },
    {
      title: params.category.replace(/\b\w/g, (char) => char.toUpperCase()),
    },
  ];

  return (
    <main className="py-12">
      <div className="flex flex-row justify-start items-center">
        <Breadcrumb items={breads} className="font-semibold text-xl" />
      </div>
      <Window cat={category} catSel={categorySelection} />
    </main>
  );
}
