"use client";
import Shop from "./shop";
import { categoryPageDatas, categorySelection } from "./page-data";
import Window from "@/components/shared/window";
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
    </main>
  );
}
