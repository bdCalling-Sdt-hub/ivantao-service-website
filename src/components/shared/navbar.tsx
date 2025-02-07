"use client";
import {
  BellOutlined,
  MessageOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Search from "../ui/search";
import Button from "antd/es/button";
import { Avatar } from "antd";
import Link from "next/link";

interface UserType {
  name: string;
}

interface NavbarProps {
  user?: UserType;
}

export default function Navbar({ user }: NavbarProps) {
  const path = usePathname();
  const navLinks = [
    { title: "Home", key: "/" },
    { title: "Service", key: "/service" },
    { title: "About Us", key: "/about" },
    { title: "Contact Us", key: "/contact" },
  ];

  return (
    <nav className="h-[94px] w-dvw px-[7%] flex flex-row justify-between items-center">
      <Image
        src="/logo.png"
        height={144}
        width={144}
        className="h-[94px] w-[94px]"
        alt="logo"
      />
      <div className="flex flex-row justify-between flex-1 items-center">
        <ul className="flex flex-row justify-start items-center space-x-8 px-[10%] text-lg">
          {navLinks?.map((item) => (
            <li key={item.key} className="cursor-pointer">
              <Link
                href={item.key}
                className={`${
                  item.key === path ? "font-bold" : "hover:underline"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <Search />
        <div className="flex flex-row text-2xl space-x-4 text-[#BBA782]">
          <span className="bg-[#BBA782] w-[38px] h-[38px] rounded-lg flex flex-row justify-center items-center text-background">
            <TranslationOutlined />
          </span>
          <MessageOutlined />
          <BellOutlined />
          {user ? (
            <div className="">
              <Button
                className="font-semibold bg-[#BBA782] text-background"
                size="large"
              >
                <Avatar /> {user.name}
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
