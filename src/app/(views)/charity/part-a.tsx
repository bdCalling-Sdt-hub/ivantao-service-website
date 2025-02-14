import Title from "antd/es/typography/Title";
import React from "react";

export default function PartA() {
  return (
    <>
      <Title className="pb-8 text-center">Our charity & Donations</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {" "}
        {/* Responsive grid container */}
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
          {" "}
          {/* Responsive image grid */}
          <div
            className="md:col-span-5 col-span-2 h-[200px] md:h-[400px] w-full bg-red-400 rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/images/others/chairty-a.jfif')" }}
          ></div>
          <div
            className="md:col-span-2 col-span-2 h-[200px] md:h-[400px] w-full bg-red-400 rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/images/others/chairty-b.jfif')" }}
          ></div>
          <div
            className="md:col-span-5 col-span-2 h-[200px] w-full bg-red-400 rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/images/others/chairty-c.jfif')" }}
          ></div>
          <div
            className="md:col-span-2 col-span-2 h-[200px] w-full bg-red-400 rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/images/others/chairty-d.jfif')" }}
          ></div>
        </div>
        <div className="w-full h-full px-4 md:px-12 flex flex-col justify-center items-start gap-8">
          {" "}
          {/* Responsive padding */}
          <Title level={2}>We are in a mission to help the helpless</Title>{" "}
          {/* Added level prop for better semantics */}
          <p className="text-base md:text-lg">
            {" "}
            {/* Responsive text size */}
            Lorem ipsum dolor sit amet consectetur. At aliquam tristique
            maecenas neque non sit id ultricies vitae. Gravida nec mi maecenas
            dolor gravida hac libero. Quis quis diam sem accumsan est sed enim.
            Tellus molestie commodo feugiat proin non eros. Metus eget
            condimentum nec pellentesque mi turpis nunc. Eu quam adipiscing at
            semper. Faucibus ornare dui nibh erat sagittis. Pulvinar ac lorem
            eleifend ac aliquam dictum varius parturient ipsum. Blandit at purus
            dolor proin purus bibendum pulvinar lacus. Sed cum cursus blandit
            cras massa sit mattis facilisis. Non vulputate vulputate id quam
            egestas fringilla eget eget ornare.
          </p>
        </div>
      </div>
    </>
  );
}
