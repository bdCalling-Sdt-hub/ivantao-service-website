import Title from "antd/es/typography/Title";
import React from "react";
import CustomForm from "./custom-form";

export default function Page() {
  return (
    <>
      <section className="py-12 flex flex-row justify-center items-center rounded-xl">
        <div
          className="h-[400px] w-[90%] mx-auto rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('/images/categories/custom.webp')" }}
        >
          <div className="h-full w-full bg-[#00000059] flex flex-col justify-center items-center rounded-2xl backdrop-blur-sm">
            <Title className="!text-background">Tawun Tailored services </Title>
            <p className="text-background text-xl">
              We&apos;d love to hear what service you’d like to be introduced on
              Tawun
            </p>
          </div>
        </div>
      </section>
      <section className="w-2/3 py-8 mx-auto">
        <CustomForm />
      </section>
    </>
  );
}
