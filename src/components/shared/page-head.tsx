import Title from "antd/es/typography/Title";
import React from "react";

export default function PageHeader({
  img,
  title,
  para,
}: {
  img: string;
  title: string;
  para?: string;
}) {
  return (
    <div
      className="h-[200px] sm:h-[300px] md:h-[400px] w-[100%] mx-auto rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="h-full w-full bg-[#00000059] flex flex-col justify-center items-center rounded-2xl backdrop-blur-[2px]">
        <Title className="!text-background !text-2xl sm:text-3xl md:!text-4xl lg:!text-5xl text-center">
          {title}
        </Title>
        {para ? (
          <p className="text-background text-xs sm:text-lg md:text-xl px-[10%] text-center">
            {para}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
