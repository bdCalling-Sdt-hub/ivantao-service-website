"use server";
import { cookies } from "next/headers";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { getFetcher } from "@/lib/simplifier";
import { Breadcrumb, Button } from "antd";
// import { HomeFilled } from "@ant-design/icons";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
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
      {/* <BackButt /> */}
      <div className="mt-12 px-4 md:px-[7%] flex flex-row justify-start items-center gap-6">
        <Button href="/" shape="circle">
          <ChevronLeft />
        </Button>
        <Breadcrumb
          className="text-base"
          separator={<span className="px-3">/</span>}
          items={[
            {
              href: "/",
              title: (
                <span className="flex items-center gap-2">
                  <Image
                    src="/icon/Home.svg"
                    height={64}
                    width={64}
                    alt="home"
                    className="size-5"
                  />
                </span>
              ),
            },
            // {
            //   href: "",
            //   title: (
            //     <>
            //       <UserOutlined />
            //       <span>Application List</span>
            //     </>
            //   ),
            // },
            {
              title: "My Account",
            },
          ]}
        />
      </div>
      {children}
      <Footer />
    </>
  );
}
