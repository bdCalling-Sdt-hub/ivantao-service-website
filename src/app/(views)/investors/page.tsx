import { RiseOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import Overview from "./overview";
import SecB from "./sec-b";

export default function Page() {
  return (
    <main className="py-12 ">
      <div className="w-full h-[40dvh] md:h-[80dvh] px-2 md:px-[7%]">
        <video
          width="100%"
          height="auto"
          controls
          preload="none"
          className="w-full h-full"
        >
          <source src="/path/to/video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video.
        </video>
      </div>
      <div className="py-12">
        <div className="bg-[#7849D4] py-8 text-sm md:text-lg font-semibold text-background text-center">
          Long term sustained, Double-digit growth <RiseOutlined />
        </div>
        <div className="py-8 flex flex-row justify-center items-center">
          <Image
            src="/images/others/investors.png"
            height={500}
            width={800}
            alt="thumbnail"
          />
        </div>
        <Overview />
        <SecB />
      </div>
    </main>
  );
}
