"use client";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Search from "../ui/search";
import Button from "antd/es/button";
import { Avatar, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import Language from "@/app/icons/Language";
import Chat from "@/app/icons/chat";
import { BellIcon } from "lucide-react";
import Title from "antd/es/typography/Title";

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

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="w-full bg-red-100 flex flex-row justify-between items-center">
          <Title className="!m-0" level={4}>
            Notifications
          </Title>
          <Button shape="circle" className="border border-black">
            <CloseOutlined />
          </Button>
        </div>
      ),
      type: "group",
    },
    {
      type: "divider",
    },
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
      <div className="sticky top-0 left-0 h-[94px] w-full lg:px-6 xl:px-[7%] flex flex-row justify-between items-center bg-[#7849D4] z-20"></div>
    );
  }

  return (
    <nav className="sticky top-0 left-0 h-[94px] w-full sm:px-4 lg:px-6 xl:px-[7%] flex flex-row justify-between items-center bg-[#7849D4] z-20">
      <div className="flex px-4 md:px-0 justify-between items-center w-full lg:w-auto py-4 lg:py-0">
        <Link href="/">
          <Image
            src="/logo.png"
            height={94}
            width={94}
            className="h-[25px] w-[48px] lg:h-[31px] lg:w-[64px] xl:h-[41px] xl:w-[84px]"
            alt="logo"
          />
        </Link>
        <Search className="flex lg:hidden" />
        {isMobile && (
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        )}
      </div>
      <div
        className={`${
          isMobile && !isMenuOpen ? "hidden" : "flex"
        } flex-col lg:flex-row justify-between flex-1 items-center w-full lg:w-auto bg-[#7849D4]  absolute lg:relative top-[94px] left-0 lg:top-0 `}
      >
        <ul className="flex flex-col gap-2 lg:flex-row justify-start items-center space-y-4 lg:space-y-0 md:space-x-2 lg:space-x-2 py-4 lg:py-0 text-sm md:text-lg w-full lg:w-auto pl-0 lg:pl-4 xl:pl-8">
          {navLinks?.map((item) => (
            <li
              key={item.key}
              className="cursor-pointer w-full lg:w-auto text-center !text-background"
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
          <Search className="hidden lg:!flex" />
          <div className="flex flex-row justify-between md:justify-end space-x-4 w-full px-4 md:px-0 md:w-min items-center">
            <div className="flex flex-row items-center justify-start text-2xl space-x-4">
              <span className="cursor-pointer hover:scale-110 w-[38px] h-[38px] rounded-lg flex flex-row justify-center items-center text-background">
                <Language />
              </span>
              <Link href="/chat">
                <Chat className="hover:scale-110 transition-transform" />
              </Link>
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                placement="bottom"
                arrow
              >
                <Button className="!p-1" variant="text" type="text">
                  <BellIcon
                    fill="#FFFFFF"
                    className="!text-[#FFFFFF] hover:scale-110 transition-transform"
                  />
                </Button>
              </Dropdown>
            </div>
            {user && (
              <div className="">
                <Button
                  className="font-semibold bg-[#FFFFFF] hover:!bg-[#e9d7e4] border-none !text-[#7849D4]"
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
