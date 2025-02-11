import Title from "antd/es/typography/Title";
import { ChevronsRight } from "lucide-react";
import React from "react";
import YtLogo from "./yt-logo";
import InstaLogo from "./insta-logo";
import FbLogo from "./fb-logo";
import Arrs from "./arrs";
import ComingSoonForm from "./coming-soon-form";

export default function Page() {
  return (
    <main className="h-dvh w-dvw bg-background grid grid-rows-2">
      <section
        className="h-full w-full bg-pink-300 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/others/coming-soon.jfif')" }}
      >
        <div className="h-full w-full bg-gradient-to-t from-[#00000085] to-transparent flex flex-col justify-center items-center gap-4 text-background ">
          <Title className="!text-8xl !m-0 !text-background">
            Are you ready?
          </Title>
          <div className="flex flex-row justify-center items-center text-4xl">
            <ChevronsRight className="h-16 w-16 text-orange-500" />
            <p>We are coming soon...</p>
          </div>
        </div>
        <div className="absolute h-[64px] px-[100px] rounded-md -bottom-[32px] left-1/2 -translate-x-1/2 bg-background shadow-md flex flex-row justify-center items-center gap-6">
          <div className="">Follow for updates:</div>
          <div className="flex flex-row justify-center items-center gap-4">
            <FbLogo />
            <InstaLogo />
            <YtLogo />
          </div>
        </div>
      </section>
      <section className="w-1/2 grid grid-cols-2 gap-8 mx-auto pt-[100px]">
        <div className="space-y-6">
          <Title level={3}>
            Subscribe to get the latest <br /> updates on our opening.
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor leo lectus pretium
            turpis tortor venenatis porttitor mauris. Facilisis ac amet faucibus
            fusce gravida sed arcu. Elementum in sed nisl enim. Placerat proin
            eget dolor mauris.
          </p>
          <div className="">
            <Arrs />
          </div>
        </div>
        <div className="">
          <ComingSoonForm />
        </div>
      </section>
    </main>
  );
}
