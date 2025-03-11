import Image from "next/image";
import React from "react";
import SideMenu from "./side-menu";

export default function SidebarBody() {
  return (
    <div className="">
      <div className="">
        <div className="flex justify-center items-center">
          <Image
            src="/logo_v2.png"
            height={100}
            width={100}
            className="h-[64px] w-[64px] md:h-auto md:w-1/4 rounded-lg"
            alt="logo"
          />
        </div>
        <SideMenu />
      </div>
    </div>
  );
}
