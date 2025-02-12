import React from "react";
import User from "./sidebar/user";
import SidebarBody from "./sidebar/sidebar-body";

export default function SidebarContent() {
  return (
    <div className="px-6 py-[64px] flex flex-col justify-between items-start !h-full">
      <div className="w-full">
        <SidebarBody />
      </div>
      <div className="w-full">
        <User />
      </div>
    </div>
  );
}
