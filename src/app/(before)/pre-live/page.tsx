import Title from "antd/es/typography/Title";
import Image from "next/image";
import React from "react";
import PreliveForm from "./prelive-form";

export default function Page() {
  return (
    <div className="h-dvh w-dvw grid grid-cols-2 bg-background px-[7%]">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <Image
            src="/logo.png"
            height={400}
            width={500}
            className="w-[160px] h-[160px]"
            alt="logo"
          />
        </div>
        <div className="">
          <Title className="text-[#B85E3A] text-center" level={2}>
            Interested to get our latest news ?
          </Title>
          <p className="mx-auto text-center w-2/3">
            Connect with us with your email. We will send you every latest news
            to you via your email.
          </p>
        </div>
        <div className="w-4/5 pt-12">
          <PreliveForm />
        </div>
      </div>
      <div className="w-full h-full">
        <div
          className="w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/others/pre-live.jfif')" }}
        ></div>
      </div>
    </div>
  );
}
