import Title from "antd/es/typography/Title";
import React from "react";
import RegisterForm from "./register-form";
import { redirect } from "next/navigation";

export default function Page({ params }: { params: { user: string } }) {
  if (params.user === "user" || params.user === "provider") {
    return (
      <main className="py-8 max-w-6xl mx-auto">
        <div className="bg-background py-8 px-10 rounded-xl shadow-sm">
          <div className="text-center pb-12">
            <Title>
              Register as a <span className="capitalize">{params.user}</span>
            </Title>
            <p className="text-[#6D6D6D]">
              Fill out the form to create a new account
            </p>
          </div>
          <RegisterForm user={params.user} />
        </div>
      </main>
    );
  } else {
    redirect("/"); // Redirects to home if user type is invalid
  }
}
