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
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { KeyRoundIcon } from "lucide-react";
import { useRouter } from "next/navigation"; // For navigation in Next.js
import React, { useState } from "react";

export default function SideMenu() {
  const router = useRouter();
  const [current, setCurrent] = useState("dashboard");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.push(`/provider/${e.key}`); // Navigates to the corresponding route
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
      label: "Chats",
      key: "chats",
      icon: <MessageOutlined />,
    },
    {
      label: "Go back to your website",
      key: "back",
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
      selectedKeys={[current]}
      mode="inline"
      items={items}
      className="w-full mt-4"
      style={{ border: "none" }}
    />
  );
}
