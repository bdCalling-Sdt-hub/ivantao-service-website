"use server";
import { Suspense } from "react";
import AdminLayoutClient from "@/components/admin/admin-layout-client";
import { Loader2Icon } from "lucide-react";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense
      fallback={
        <div className="h-dvh w-dvw flex flex-col justify-center items-center">
          <Loader2Icon className="animate-spin !mb-2" /> Loading...
        </div>
      }
    >
      <AdminLayoutClient>{children}</AdminLayoutClient>
    </Suspense>
  );
}
