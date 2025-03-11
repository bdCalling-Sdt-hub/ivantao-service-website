"use client";
import React from "react";
import { Avatar, Button, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

export default function HeaderClient() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-start gap-6 pb-20">
        <Button
          className="w-full md:w-1/2 py-6 bg-[#7849D4] hover:!bg-[#543496] font-semibold"
          size="large"
          type="primary"
          href="/register?type=provider"
        >
          Become a service provider
        </Button>
        <Button
          className="w-full md:w-1/2 py-6 hover:!text-[#7849D4] hover:!border-[#7849D4] font-semibold"
          size="large"
          href="/register?type=user"
        >
          Become a Tawun member
        </Button>
      </div>
      <div className="flex flex-col justify-start items-center md:items-start">
        <Title level={4}>2K+ professional registered </Title>
        <Avatar.Group size="large">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <a href="https://ant.design">
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </div>
    </div>
  );
}
