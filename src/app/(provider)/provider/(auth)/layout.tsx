import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = cookies().get("raven")?.value;
  if (token) {
    redirect("/provider/dashboard");
  }
  return <>{children}</>;
}
