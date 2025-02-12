import SidebarContent from "@/components/shared/sidebar-content";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentStyle = {
    padding: "20px",
    marginLeft: "25%", // or marginLeft: 200px if you have fixed width
    minHeight: "calc(100vh - 64px)", // Adjust 64px if you have a header
  };

  return (
    <Layout style={{ minHeight: "100dvh", overflow: "hidden" }}>
      <Sider
        width="25%"
        className="bg-background h-dvh rounded-tr-3xl fixed left-0 top-0 overflow-auto "
      >
        <SidebarContent />
      </Sider>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  );
}
