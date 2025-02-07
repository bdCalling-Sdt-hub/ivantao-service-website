import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tawun",
  description: "tawun  description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#FBF9F5] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
