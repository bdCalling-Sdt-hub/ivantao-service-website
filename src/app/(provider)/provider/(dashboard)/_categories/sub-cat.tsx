import Title from "antd/es/typography/Title";
import React from "react";
import { Subcategory } from "@/types/Services";
import ProviderEditDD from "@/components/ui/sub-ui/provider-edit-dd";

export default function SubCat({ data }: { data: Subcategory[] }) {
  return (
    <div className="pt-8 pb-4">
      <Title level={3}>Sub Categories</Title>
      <div className="w-full grid md:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <div className="h-[200px] w-full rounded-xl shadow-md bg-background relative p-3">
              <ProviderEditDD item={item} sub />
              <div
                className="h-[120px] w-full bg-gray-300 rounded-xl bg-center bg-cover"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="h-[80px] w-full flex justify-center items-center text-lg font-semibold text-gray-500">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
