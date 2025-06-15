import { Button } from "antd";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  return (
    <>
      <div className="py-8 pt-[100px] px-4 sm:px-8 md:px-[7%] grid grid-cols-1 xl:grid-cols-2 gap-8 bg-[#7849D4] !text-background">
        <div className="space-y-8">
          <Title className="!text-background">How it works?</Title>
          <p className="text-lg pb-8">
            Lorem ipsum dolor sit amet consectetur. Potenti sit porttitor nam in
            lacus tempor cras. Nunc elementum turpis commodo odio massa aliquet
            ultrices. Etiam in est duis feugiat pretium nec fermentum pharetra.
            Varius duis dictum lectus iaculis amet mi commodo sit mauris. Nec
            neque consequat morbi placerat nibh. Non lorem interdum interdum
            sapien pretium interdum amet nibh. Turpis risus eget nascetur
            blandit consequat risus. Gravida cras massa neque amet adipiscing
            egestas donec. Nam <br /> <br /> egestas diam amet at tincidunt.
            Orci sed id aenean mi cursus viverra. Mi quis tristique dictumst
            tellus dignissim. Facilisi rutrum diam commodo in. Pellentesque diam
            purus potenti velit tincidunt arcu venenatis ut. At tortor a
            bibendum gravida ac amet. Sit tellus id nulla nunc elit cursus
            pellentesque vitae. Erat viverra orci lacus nec arcu sit. Tellus
            tristique lectus egestas odio sem arcu scelerisque etiam. Vestibulum
            massa risus vitae velit. Scelerisque amet fermentum urna tincidunt
            dignissim. Massa nulla porta dui in. Facilisi sit sit cursus enim.
            Et scelerisque urna dictum placerat risus et in condimentum. Ipsum
            tristique eu at elit mi convallis tellus felis natoque. Scelerisque
            at elementum eu a. Lobortis nisl placerat a facilisis suscipit
            gravida. Fermentum sit duis posuere semper.
          </p>
          <Button
            href="/how-it-works"
            size="large"
            className="px-8 py-6 text-lg font-semibold !border-2 !border-[#5a37a0] !text-[#44297a]"
          >
            See all
          </Button>
        </div>
        <div className="flex justify-center">
          <video
            width="100%"
            height="auto"
            controls
            preload="none"
            className="w-full h-auto"
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
      </div>
      <div className="py-12 w-full bg-background px-[7%]">
        <Title>Payment security</Title>
        <div className="flex flex-row justify-center">
          <Image
            src="/images/payment-security.jfif"
            alt="thumbnail"
            width={600}
            height={400}
            className="h-auto w-full max-w-[460px] object-cover"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nulla mattis consequat tempus
          tellus neque. Facilisi tellus diam adipiscing gravida quisque sapien
          tempus egestas. Integer sed faucibus cursus integer platea
          scelerisque. Sed eget in maecenas non. Enim consectetur blandit
          faucibus amet ut arcu rutrum aenean facilisis. Suspendisse pharetra
          tincidunt tincidunt enim eget lectus fringilla dui. Netus lectus
          feugiat dolor lobortis mattis convallis. Orci malesuada amet volutpat
          nisl sagittis. Tincidunt suspendisse eu nunc at dignissim imperdiet a
          odio tellus.
        </p>
      </div>
      <div className="px-6 md:px-[12%] py-12">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-8 items-center">
          <div className="md:col-span-5 flex flex-col justify-center items-start">
            <Title level={2}>How providers get paid?</Title>
            <p className="mt-6 md:mt-8 w-full md:w-[80%]">
              Lorem ipsum dolor sit amet consectetur. Nulla mattis consequat
              tempus tellus neque. Facilisi tellus diam adipiscing gravida
              quisque sapien tempus egestas. Integer sed faucibus cursus integer
              platea scelerisque. Sed eget in maecenas non. Enim consectetur
              blandit faucibus amet ut arcu rutrum aenean facilisis. Suspendisse
              pharetra tincidunt tincidunt enim eget lectus fringilla dui. Netus
              lectus feugiat dolor lobortis mattis convallis. Orci malesuada
              amet volutpat nisl sagittis. Tincidunt suspendisse eu nunc at
              dignissim imperdiet a odio tellus.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="/images/debit-cards.png"
              alt="thumbnail"
              width={500}
              height={300}
              className="h-auto w-full max-w-[360px] object-cover"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-12 items-center mt-12 md:mt-16">
          <div className="md:col-span-2 flex justify-center order-2 md:order-none">
            <Image
              src="/images/withdraw.png"
              alt="thumbnail"
              width={500}
              height={300}
              className="h-auto w-full max-w-[360px] object-cover"
            />
          </div>
          <div className="md:col-span-5 flex flex-col justify-center items-start order-1 md:order-none">
            <Title level={2}>How providers get paid?</Title>
            <p className="mt-6 md:mt-8 w-full md:w-[80%]">
              Lorem ipsum dolor sit amet consectetur. Nulla mattis consequat
              tempus tellus neque. Facilisi tellus diam adipiscing gravida
              quisque sapien tempus egestas. Integer sed faucibus cursus integer
              platea scelerisque. Sed eget in maecenas non. Enim consectetur
              blandit faucibus amet ut arcu rutrum aenean facilisis. Suspendisse
              pharetra tincidunt tincidunt enim eget lectus fringilla dui. Netus
              lectus feugiat dolor lobortis mattis convallis. Orci malesuada
              amet volutpat nisl sagittis. Tincidunt suspendisse eu nunc at
              dignissim imperdiet a odio tellus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
