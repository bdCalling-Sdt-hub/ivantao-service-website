"use server";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const getToken = cookieStore.get("raven");
  let user = undefined;

  if (getToken) {
    try {
      const call = await getFetcher({
        link: "/auth/own-profile",
        token: getToken?.value,
      });
      if (call.status) {
        user = call.data;
      }
      console.log(call.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Navbar user={user} />
      {children}
      <Footer />
    </>
  );
}
