import ProviderLayout from "@/components/provider/provider-layout";
import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = cookies().get("raven")?.value;
  if (!token) {
    redirect("/provider/login");
  }
  const call = await getFetcher({ link: "/auth/own-profile", token: token });
  const user = call.data;

  if (user.role != "provider") {
    redirect("/");
  }
  return (
    <>
      <ProviderLayout>{children}</ProviderLayout>
    </>
  );
}
