import Title from "antd/es/typography/Title";
import HeaderClient from "./header-client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="min-h-[calc(100dvh-94px)] w-full p-4 sm:p-6 md:p-8 lg:px-[7%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 items-start py-4 sm:py-6 md:py-8 lg:py-[14%]">
          <Title className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl">
            From Everyday Essentials to Specialized Solutions Find It All On -
            TAWUN
          </Title>
          <p className="text-base sm:text-lg w-full lg:w-[90%] pb-4 sm:pb-6 md:pb-8 lg:pb-4">
            Lorem ipsum dolor sit amet consectetur. Laoreet dolor vitae id arcu
            eget adipiscing ornare pharetra. Enim eleifend quis tristique ac
            sit. Sed volutpat non nisl elit pellentesque lorem purus sed.
            Dignissim pellentesque nisl blandit quam arcu condimentum facilisi.
          </p>
          <div className="w-full flex flex-row justify-end md:justify-start">
            <HeaderClient />
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[700px] lg:h-full mt-4 lg:mt-0">
          <Image
            src="/images/header-image.png"
            alt="Header Image"
            height={1500}
            width={1000}
            className="rounded-lg object-contain h-full"
          />
          <div className="rounded-lg py-3 px-4 sm:py-4 sm:px-6 shadow-lg shadow-[#6161614f] w-auto absolute left-4 bottom-4 sm:left-6 sm:bottom-6 md:left-8 md:bottom-8 bg-[#ffffff] flex flex-row justify-between items-center space-x-4">
            <div>
              <Title level={3} className="text-lg sm:text-xl md:text-2xl">
                26k+
              </Title>
              <p className="text-sm sm:text-base">Service completed before.</p>
            </div>
            <div className="rounded-full w-12 h-12 sm:w-16 sm:h-16 bg-[#FFDBC9]"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
