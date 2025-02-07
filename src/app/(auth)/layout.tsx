import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = {
    name: "Seint Josef",
  };
  return (
    <>
      <Navbar user={user} />
      {children}
      <Footer />
    </>
  );
}
