import Title from "antd/es/typography/Title";
import { ChevronsRight } from "lucide-react";
import React from "react";
import YtLogo from "./yt-logo";
import InstaLogo from "./insta-logo";
import FbLogo from "./fb-logo";
import Arrs from "./arrs";
import ComingSoonForm from "./coming-soon-form";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-auto md:h-dvh w-dvw bg-background md:grid md:grid-rows-2">
      <section
        className="h-[30dvh] md:h-full w-full bg-pink-300 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/others/coming-soon.jfif')" }}
      >
        <div className="h-full w-full bg-gradient-to-t from-[#00000085] to-transparent flex flex-col justify-center items-center gap-4 text-background ">
          <Title className="md:!text-8xl !m-0 !text-background">
            Are you ready?
          </Title>
          <div className="flex flex-row justify-center items-center md:text-4xl">
            <ChevronsRight className="md:size-16 text-orange-500" />
            <p>We are coming soon...</p>
          </div>
        </div>
        <div className="absolute h-[100px] w-4/5 sm:w-auto md:h-[64px] sm:px-[38px] md:px-[100px] rounded-md -bottom-[50px] md:-bottom-[32px] left-1/2 -translate-x-1/2 bg-background shadow-md flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="">Follow for updates:</div>
          <div className="flex flex-row justify-center items-center gap-4">
            <Link href="#" className="hover:scale-110 transition-transform">
              <FbLogo />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <InstaLogo />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <YtLogo />
            </Link>
          </div>
        </div>
      </section>
      <section className="w-4/5 md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto pt-[100px] pb-[100px]">
        <div className="space-y-6">
          <Title
            level={3}
            className="!text-xl sm:!text-2xl md:!text-3xl text-center md:text-start"
          >
            Subscribe to get the latest <br /> updates on our opening.
          </Title>
          <p className="text-xs md:text-sm">
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
