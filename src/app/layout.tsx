import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
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
        <body className={`antialiased bg-[#FBF9F5] overflow-x-hidden`}>
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
