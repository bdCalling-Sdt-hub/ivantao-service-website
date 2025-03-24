import { getFetcher } from "@/lib/simplifier";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getInfo(token: string | undefined) {
  try {
    const res = await getFetcher({ link: "/auth/own-profile", token: token });

    if (!res.status) {
      return null;
    }
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const ravenToken = cookieStore.get("raven")?.value;
  if (!ravenToken) {
    return children;
  }
  const userInfo = await getInfo(ravenToken);

  if (userInfo.role != "super_admin") {
    redirect("/");
  } else {
    redirect("/admin/dashboard");
  }
}
