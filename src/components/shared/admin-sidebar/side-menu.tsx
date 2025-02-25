"use client";
import {
  CareersIcon,
  ChatsIcon,
  CommunityIcons,
  DashboardIcon,
  ListingReportingIcon,
  NewsletterIcon,
  ProvidersIcon,
  SettingIcon,
  TransitionIcon,
  UsersIcon,
} from "@/app/icons/localIcons";
import { KeyOutlined, ArrowLeftOutlined } from "@ant-design/icons";
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
      icon: <DashboardIcon />,
    },
    {
      label: "Listing Reporting", // Changed to match the image
      key: "listing-reporting", // Use kebab-case for keys
      icon: <ListingReportingIcon />, // You might want a more specific icon
    },
    {
      label: "Users", // Changed to match the image
      key: "users",
      icon: <UsersIcon />, // You might want a more specific icon
    },
    {
      label: "Providers", // Changed to match the image
      key: "providers",
      icon: <ProvidersIcon />, // You might want a more specific icon
    },
    {
      label: "Transactions", // Changed to match the image
      key: "transactions",
      icon: <TransitionIcon />, // You might want a more specific icon
    },
    {
      label: "Careers", // Changed to match the image
      key: "careers",
      icon: <CareersIcon />, // You might want a more specific icon
    },
    {
      label: "Community", // Changed to match the image
      key: "forum",
      icon: <CommunityIcons />, // You might want a more specific icon
    },
    {
      label: "Chat", // Changed to match the image
      key: "chat",
      icon: <ChatsIcon />,
    },
    {
      label: "Go back to your website",
      key: "/home",
      icon: <ArrowLeftOutlined />,
    },
    {
      label: "Settings", // Moved up to be a top-level item
      key: "settings",
      icon: <SettingIcon />,
      children: [
        {
          label: "Change password",
          key: "change-pass",
          icon: <KeyOutlined />,
        },
        {
          label: "Newsletter",
          key: "newsletter",
          icon: <NewsletterIcon />,
        },
        // {
        //   label: "About us",
        //   key: "about",
        //   icon: <InfoCircleOutlined />,
        // },
        // {
        //   label: "How it works",
        //   key: "howitworks",
        //   icon: <QuestionCircleOutlined />,
        // },
        // {
        //   label: "Contact us",
        //   key: "contact-us",
        //   icon: <PhoneOutlined />,
        // },
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
