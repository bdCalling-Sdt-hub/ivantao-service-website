import Image from "next/image";
import React from "react";
import SideMenu from "./side-menu";
import Link from "next/link";

export default function SidebarBody() {
  return (
    <div className="">
      <div className="">
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/logo_v2.png"
              height={100}
              width={100}
              className="h-[64px] w-[64px] md:h-auto md:w-1/3 rounded-lg"
              alt="logo"
            />
          </Link>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}
