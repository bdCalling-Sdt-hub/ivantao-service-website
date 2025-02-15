import React from "react";
import SidebarBody from "./sidebar-body";
import User from "./user";
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
