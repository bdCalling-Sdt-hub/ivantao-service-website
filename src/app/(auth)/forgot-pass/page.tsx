import Title from "antd/es/typography/Title";
import React from "react";
import ForgotForm from "./fogot-form";

export default function Page() {
  return (
    <main className="py-8 max-w-6xl mx-auto">
      <div className="bg-background py-8 px-10 rounded-xl shadow-sm ">
        <div className="text-center pb-12">
          <Title>Forget password</Title>
          <p className="text-[#6D6D6D]">
            Enter valid information to update a new password
          </p>
        </div>
        <ForgotForm />
      </div>
    </main>
  );
}
