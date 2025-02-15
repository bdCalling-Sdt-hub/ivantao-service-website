import Image from "next/image";
import React from "react";
import SideMenu from "./side-menu";

export default function SidebarBody() {
  return (
    <div className="">
      <div className="">
        <div className="pl-6">
          <Image
            src="/logo.png"
            height={100}
            width={100}
            className="h-[94px] w-[94px]"
            alt="logo"
          />
        </div>
        <SideMenu />
      </div>
    </div>
  );
}
