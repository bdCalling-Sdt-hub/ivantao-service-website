import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import BackButt from "@/components/ui/sub-ui/back-butt";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = { name: "Saint Josef" };
  return (
    <>
      <Navbar user={user} />
      <BackButt />
      {children}
      <Footer />
    </>
  );
}
