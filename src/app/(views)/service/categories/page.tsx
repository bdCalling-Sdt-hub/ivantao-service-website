"use client";
import Shop from "./shop";
import { categoryPageDatas, categorySelection } from "./page-data";
import Window from "@/components/shared/window";
import { Button } from "antd";
interface Categories {
  image: string;
  title: string;
  description: string;
}
export default function Page() {
  const findCategory = (): Categories => {
    return (
      categoryPageDatas.find(
        (cat) => cat.title.trim().toLowerCase() === "household"
      ) || {
        image: "",
        title: "Unknown",
        description: "No description available",
      }
    );
  };

  const category: Categories = findCategory();

  return (
    <main className="py-12">
      <Window cat={category} catSel={categorySelection} />
      <Shop />
      <Shop />
      <div className="px-[7%] ">
        <div className="border-t border-[#E4E7EC] flex flex-row justify-between items-center py-6">
          <p className="font-semibold">Page 1 of 10</p>
          <div className="space-x-4">
            <Button size="large">Previous</Button>
            <Button size="large">Next</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
