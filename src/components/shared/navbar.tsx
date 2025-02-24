"use client";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Search from "../ui/search";
import Button from "antd/es/button";
import { Avatar } from "antd";
import Link from "next/link";
import Language from "@/app/icons/Language";
import Chat from "@/app/icons/chat";
import { BellIcon } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    setIsLoading(false);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if (isLoading) {
    return (
      <div className="sticky top-0 left-0 h-[94px] w-full lg:px-6 xl:px-[7%] flex flex-col lg:flex-row justify-between items-center bg-[#FBF9F5] z-20"></div>
    );
  }

  return (
    <nav className="sticky top-0 left-0 h-[94px] w-full sm:px-4 lg:px-6 xl:px-[7%] flex flex-col lg:flex-row justify-between items-center bg-[#FBF9F5] z-20">
      <div className="flex px-4 md:px-0 justify-between items-center w-full lg:w-auto py-4 lg:py-0">
        <Link href="/">
          <Image
            src="/logo.png"
            height={94}
            width={94}
            className="h-[48px] w-[48px] lg:h-[64px] lg:w-[64px] xl:h-[94px] xl:w-[94px]"
            alt="logo"
          />
        </Link>
        {isMobile && (
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        )}
      </div>
      <div
        className={`${
          isMobile && !isMenuOpen ? "hidden" : "flex"
        } flex-col lg:flex-row justify-between flex-1 items-center w-full lg:w-auto bg-[#FBF9F5]`}
      >
        <ul className="flex flex-col gap-2 lg:flex-row justify-start items-center space-y-4 lg:space-y-0 md:space-x-2 lg:space-x-2 py-4 lg:py-0 text-sm md:text-lg w-full lg:w-auto pl-0 lg:pl-4 xl:pl-8">
          {navLinks?.map((item) => (
            <li
              key={item.key}
              className="cursor-pointer w-full lg:w-auto text-center"
            >
              <Link
                href={item.key}
                className={`${
                  item.key === path ? "font-bold" : ""
                } block py-2 lg:py-0`}
                onClick={() => isMobile && setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col h-full px-0 md:px-0 gap-2 lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 py-4 md:flex-grow lg:py-0 w-full lg:w-auto">
          <Search />
          <div className="flex flex-row justify-between md:justify-end space-x-4 w-full px-4 md:px-0 md:w-min items-center">
            <div className="flex flex-row items-center justify-start text-2xl space-x-4 text-[#BBA782]">
              <span className="bg-[#BBA782] hover:bg-[#928265] transition-all cursor-pointer hover:scale-110 w-[38px] h-[38px] rounded-lg flex flex-row justify-center items-center text-background">
                <Language />
              </span>
              <Link href="/chat">
                <Chat className="hover:scale-110 transition-transform" />
              </Link>
              <Link href="/notification">
                <BellIcon
                  fill="#D5C19C"
                  className="!text-[#D5C19C] hover:scale-110 transition-transform"
                />
              </Link>
            </div>
            {user && (
              <div className="">
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
