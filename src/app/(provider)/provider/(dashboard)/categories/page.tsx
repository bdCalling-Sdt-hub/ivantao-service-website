import React from "react";

import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
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
import AddCat from "./add-cat";
import SubCat from "./sub-cat";
import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
import { Category, Subcategory } from "@/types/Services";
import ProviderEditDD from "@/components/ui/sub-ui/provider-edit-dd";

export default async function Page() {
  const token = cookies().get("raven")?.value;
  const call = await getFetcher({ link: "/get-all-category", token });
  const subCall = await getFetcher({ link: "/get-all-subcategory", token });

  const categories: Category[] = call.data.data;
  const subCategories: Subcategory[] = subCall.data.data;

  return (
    <>
      <main className="flex flex-col min-h-screen w-full px-8 py-6 overflow-y-auto">
        <DashTitle>
          <Title level={3} className="flex items-center text-2xl">
            Manage categories
          </Title>
          <p className="text-gray-400">
            Admin with access to this workspace can promote or demote user
            maintain business insights
          </p>
        </DashTitle>
        <div className="pt-8 pb-4">
          <Title level={3}>Categories</Title>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((item) => (
            <div
              key={item.id}
              className="p-4 relative shadow-sm flex flex-col justify-center items-center text-center font-semibold gap-4 rounded-lg bg-background w-full h-[140px] sm:h-[160px] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <ProviderEditDD item={item} />
              <div
                className="size-16"
                style={{ backgroundImage: `url('${item.icon}')` }}
              ></div>
              <div className="text-sm sm:text-base">{item.name}</div>
            </div>
          ))}
        </div>
        <SubCat data={subCategories} />
        <AddCat />
      </main>
    </>
  );
}
