"use client";

import {
  BellOutlined,
  MessageOutlined,
  TranslationOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navLinks = [
    { title: "Home", key: "/" },
    { title: "Service", key: "/service" },
    { title: "About Us", key: "/about" },
    { title: "Contact Us", key: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-auto lg:h-[94px] w-full px-4 lg:px-[7%] flex flex-col lg:flex-row justify-between items-center">
      <div className="flex justify-between items-center w-full lg:w-auto py-4 lg:py-0">
        <Image
          src="/logo.png"
          height={94}
          width={94}
          className="h-[60px] w-[60px] lg:h-[94px] lg:w-[94px]"
          alt="logo"
        />
        {isMobile && (
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        )}
      </div>
      <div
        className={`${
          isMobile && !isMenuOpen ? "hidden" : "flex"
        } flex-col lg:flex-row justify-between flex-1 items-center w-full lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row justify-start items-center space-y-4 lg:space-y-0 lg:space-x-8 py-4 lg:py-0 text-lg w-full lg:w-auto pl-12">
          {navLinks?.map((item) => (
            <li
              key={item.key}
              className="cursor-pointer w-full lg:w-auto text-center"
            >
              <Link
                href={item.key}
                className={`${
                  item.key === path ? "font-bold" : "hover:underline"
                } block py-2 lg:py-0`}
                onClick={() => isMobile && setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col h-full px-0 md:px-0 lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 py-4 lg:py-0 w-full lg:w-auto">
          <Search />
          <div className="flex flex-row justify-between md:justify-end space-x-4 w-full items-center">
            <div className="flex flex-row items-center justify-start text-2xl space-x-4 text-[#BBA782]">
              <span className="bg-[#BBA782] w-[38px] h-[38px] rounded-lg flex flex-row justify-center items-center text-background">
                <TranslationOutlined />
              </span>
              <MessageOutlined />
              <BellOutlined />
            </div>
            {user && (
              <div className="mt-4 lg:mt-0">
                <Button
                  className="font-semibold bg-[#BBA782] hover:!bg-[#928263] border-none !text-background"
                  size="large"
                  href="/my-account"
                >
                  <Avatar /> {user.name}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
