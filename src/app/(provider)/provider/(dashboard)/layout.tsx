"use client";

import { useState, useEffect } from "react";
import SidebarContent from "@/components/shared/provider-sidebar/sidebar-content";
import { Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Layout style={{ minHeight: "100dvh", overflow: "hidden" }}>
      {/* Mobile Sidebar Toggle Button */}
      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
          className="fixed top-4 left-4 z-50 bg-[#00000054] hover:bg-white p-2 rounded-lg shadow-md"
        />
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sider
          width={250}
          className="bg-background h-dvh rounded-tr-3xl fixed left-0 top-0 overflow-auto"
        >
          <SidebarContent />
        </Sider>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          title="Menu"
          placement="left"
          open={drawerVisible}
          onClose={() => setDrawerVisible(false)}
          closable
        >
          <SidebarContent />
        </Drawer>
      )}

      {/* Content Area */}
      <Content
        className="!bg-background"
        style={{
          marginLeft: isMobile ? 0 : 250, // No margin on mobile
          transition: "margin-left 0.3s ease",
          padding: "0px",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
