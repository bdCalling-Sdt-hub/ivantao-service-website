"use client";
import Title from "antd/es/typography/Title";
import LoginForm from "./login-form";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

function LoginContent() {
  const searchParams = useSearchParams();
  const user = searchParams.get("type");

  if (user === "user" || user === "provider") {
    return (
      <main className="py-8 w-4/5 mx-auto">
        <div className="bg-background py-8 px-10 rounded-xl shadow-sm">
          <div className="text-center pb-12">
            <Title>
              Login as a <span className="capitalize">{user}</span>
            </Title>
            <p className="text-[#6D6D6D]">
              Log in by registered email & password
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <LoginForm user={user} />
            <Image
              src="/images/auth/login.jpg"
              className="size-[700px] object-cover hidden lg:block"
              height={1000}
              width={1000}
              alt="thumbnail"
            />
          </div>
        </div>
      </main>
    );
  } else if (!user) {
    return redirect(`/login?type=${user}`);
  } else {
    return redirect("/");
  }
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoginContent />
    </Suspense>
  );
}
