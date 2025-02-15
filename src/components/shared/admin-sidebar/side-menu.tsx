"use client";
import {
  DashboardOutlined,
  TagsOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
  SettingOutlined,
  AppstoreOutlined,
  MobileOutlined,
  KeyOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
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
    router.push(`/admin/${e.key}`);
  };

  const items: MenuProps["items"] = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <DashboardOutlined />,
    },
    {
      label: "Listing Reporting", // Changed to match the image
      key: "listing-reporting", // Use kebab-case for keys
      icon: <AppstoreOutlined />, // You might want a more specific icon
    },
    {
      label: "Users", // Changed to match the image
      key: "users",
      icon: <MobileOutlined />, // You might want a more specific icon
    },
    {
      label: "Providers", // Changed to match the image
      key: "providers",
      icon: <TagsOutlined />, // You might want a more specific icon
    },
    {
      label: "Transactions", // Changed to match the image
      key: "transactions",
      icon: <ShoppingCartOutlined />, // You might want a more specific icon
    },
    {
      label: "Careers", // Changed to match the image
      key: "careers",
      icon: <ShoppingCartOutlined />, // You might want a more specific icon
    },
    {
      label: "Community", // Changed to match the image
      key: "forum",
      icon: <MessageOutlined />, // You might want a more specific icon
    },
    {
      label: "Chat", // Changed to match the image
      key: "chat",
      icon: <MessageOutlined />,
    },
    {
      label: "Settings", // Moved up to be a top-level item
      key: "settings",
      icon: <SettingOutlined />,
      children: [
        {
          label: "Change password",
          key: "change-password",
          icon: <KeyOutlined />,
        },
        {
          label: "About us",
          key: "about",
          icon: <InfoCircleOutlined />,
        },
        {
          label: "How it works",
          key: "howitworks",
          icon: <QuestionCircleOutlined />,
        },
        {
          label: "Contact us",
          key: "contact-us",
          icon: <PhoneOutlined />,
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
