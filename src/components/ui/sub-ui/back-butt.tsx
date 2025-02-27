"use client";
import { Button } from "antd";
import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function BackButt() {
  const navig = useRouter();
  const path = usePathname();

  return (
    <div className={`${path == "/" ? "hidden" : ""} pt-12 px-[7%]`}>
      <Button
        className=""
        type="text"
        variant="text"
        onClick={() => {
          navig.back();
        }}
      >
        <ChevronLeft /> Go Back
      </Button>
    </div>
  );
}
