import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import { App } from "antd";
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
      <ReactLenis root>
        <body className={`antialiased bg-[#FFFFFF] overflow-x-hidden`}>
          <App>{children}</App>
        </body>
      </ReactLenis>
    </html>
  );
}
