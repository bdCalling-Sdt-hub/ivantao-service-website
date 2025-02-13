import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "tawun  description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
