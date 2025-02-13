import Search from "@/components/ui/search";
import React from "react";
import User from "./user";

export default function Page() {
  return (
    <main className="h-[calc(100dvh-94px)] w-full p-6 grid grid-cols-9 gap-8 px-[7%]">
      <div className="col-span-3 h-full bg-background rounded-xl overflow-y-auto relative">
        <div className="p-6 sticky top-0 left-0 bg-background w-full z-10">
          <Search />
        </div>
        <div className="py-4 divide-y">
          {Array.from({ length: 4 }).map((item, i) => (
            <User key={i} />
          ))}
        </div>
      </div>
      <div className="col-span-6 h-full bg-background rounded-xl">
        <div className="">lol</div>
      </div>
    </main>
  );
}
