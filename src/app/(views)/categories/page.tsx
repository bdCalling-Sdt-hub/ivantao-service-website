import Title from "antd/es/typography/Title";
import React from "react";

export default function Page() {
  const category = {
    image: "/images/categories/household.jfif",
    title: "Household",
    description: "Discover new & order for get service",
  };
  return (
    <main className="py-12">
      <div
        className="h-[500px] w-full bg-cover bg-no-repeat bg-center overflow-visible"
        style={{ backgroundImage: `url('${category.image}')` }}
      >
        <div className="h-full w-full bg-[#00000071] flex flex-col justify-center items-center relative">
          <Title className="!text-5xl !text-background">{category.title}</Title>
          <p className="text-background text-lg">{category.description}</p>
          <div className="h-1/3" />
          <div className="absolute h-[300px] w-4/5 bg-purple-400 -bottom-[150px]">
            <Title>Source by category</Title>
          </div>
        </div>
      </div>
      <div className="h-[200px] w-full rounded-xl"></div>
    </main>
  );
}
