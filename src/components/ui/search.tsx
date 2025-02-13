import { SearchIcon } from "lucide-react";
import React from "react";

export default function Search() {
  return (
    <div className="w-4/5 md:w-full px-4 py-2 rounded-full flex flex-row justify-between items-center bg-[#F1F1F1]">
      <input
        placeholder="Search"
        className="w-full outline-none bg-transparent"
      />
      <div className="text-gray-500 cursor-pointer">
        <SearchIcon />
      </div>
    </div>
  );
}
