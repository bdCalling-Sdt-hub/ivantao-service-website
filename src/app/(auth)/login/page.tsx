"use client";
import Title from "antd/es/typography/Title";
import LoginForm from "./login-form";
import { redirect, useSearchParams } from "next/navigation";
export default function Page() {
  const searchParams = useSearchParams();
  const user = searchParams.get("type");

  if (user === "user" || user === "provider") {
    return (
      <main className="py-8 max-w-6xl mx-auto">
        <div className="bg-background py-8 px-10 rounded-xl shadow-sm">
          <div className="text-center pb-12">
            <Title>
              Login as a <span className="capitalize">{user}</span>
            </Title>
            <p className="text-[#6D6D6D]">
              Log in by registered email & password
            </p>
          </div>
          {user ? <LoginForm user={user} /> : ""}
        </div>
      </main>
    );
  } else if (!user) {
    return redirect("/login?type=user");
  } else {
    return redirect("/");
  }
}
