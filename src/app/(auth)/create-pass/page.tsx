import Title from "antd/es/typography/Title";
import React from "react";
import PassForm from "./pass-form";

export default function Page() {
  return (
    <main className="py-8 max-w-6xl mx-auto">
      <div className="bg-background py-8 px-10 rounded-xl shadow-sm ">
        <div className="text-center pb-12">
          <Title>Create a new password</Title>
          <p className="text-[#6D6D6D]">
            After forget your password you have update your password
          </p>
        </div>
        <PassForm />
      </div>
    </main>
  );
}
