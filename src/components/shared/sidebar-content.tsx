import React from "react";
import User from "./sidebar/user";
import SidebarBody from "./sidebar/sidebar-body";

export default function SidebarContent() {
  return (
    <div className="px-6 py-[100px] flex flex-col justify-between items-start !h-full">
      <div className="">
        <SidebarBody />
      </div>
      <div className="">
        <User />
      </div>
    </div>
  );
}
