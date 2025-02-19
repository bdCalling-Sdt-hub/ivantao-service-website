"use client";
import {
  DashboardOutlined,
  TagsOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
  ArrowLeftOutlined,
  SettingOutlined,
  AppstoreOutlined,
  MobileOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { KeyRoundIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function SideMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [current, setCurrent] = useState("dashboard"); // Default selection

  useEffect(() => {
    // Extract the key from the pathname (e.g., /provider/dashboard -> dashboard)
    const pathParts = pathname.split("/");
    const extractedKey = pathParts[pathParts.length - 1] || "dashboard"; // Default to dashboard if no key

    setCurrent(extractedKey);
  }, [pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.push(`/provider/${e.key}`);
  };

  const items: MenuProps["items"] = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <DashboardOutlined />,
    },
    {
      label: "Services",
      key: "services",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Withdraw",
      key: "withdraw",
      icon: <MobileOutlined />,
    },
    {
      label: "Categories",
      key: "categories",
      icon: <TagsOutlined />,
    },
    {
      label: "Your Order",
      key: "order",
      icon: <ShoppingCartOutlined />,
    },
    {
      label: "Custom Order",
      key: "custom-order",
      icon: <EditOutlined />,
    },
    {
      label: "Chat",
      key: "chat",
      icon: <MessageOutlined />,
    },
    {
      label: "Go back to your website",
      key: "",
      icon: <ArrowLeftOutlined />,
    },
    {
      label: "Settings",
      key: "settings",
      icon: <SettingOutlined />,
      children: [
        {
          label: "Change Password",
          key: "change-pass",
          icon: <KeyRoundIcon />,
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]} // Use selectedKeys for initial and dynamic selection
      mode="inline"
      items={items}
      className="w-full mt-4"
      style={{ border: "none" }}
    />
  );
}
