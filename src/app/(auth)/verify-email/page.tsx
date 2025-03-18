import Title from "antd/es/typography/Title";
import React from "react";
import VerifyForm from "./verify-form";
export default function Page() {
  return (
    <main className="py-8 max-w-6xl mx-auto">
      <div className="bg-background py-8 px-10 rounded-xl shadow-sm ">
        <div className="text-center pb-12">
          <Title>Verify Email</Title>
          <p className="text-[#6D6D6D]">
            We have sent a 6 digits code on your email
          </p>
        </div>
        <VerifyForm />
      </div>
    </main>
  );
}
