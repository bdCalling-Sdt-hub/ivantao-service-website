"use server";
import { cookies } from "next/headers";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import BackButt from "@/components/ui/sub-ui/back-butt";
import { getFetcher } from "@/lib/simplifier";
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
    } catch (error) {
      console.error(error);
    }
  }

  console.log(user);

  return (
    <>
      <Navbar user={user} />
      <BackButt />
      {children}
      <Footer />
    </>
  );
}
