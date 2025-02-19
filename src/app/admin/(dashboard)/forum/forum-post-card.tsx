import { MoreOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import Title from "antd/es/typography/Title";

import React from "react";
interface PostCardProps {
  name: string;
  time: string;
  title: string;
  content: string;
  type?: "post" | "report";
}

export default function ForumPostCard({
  name,
  time,
  title,
  content,
  type,
}: PostCardProps) {
  return (
    <div className="h-[200px] p-6 mb-4 rounded-lg bg-background shadow-sm flex flex-row justify-between items-start">
      {/* Added mb-4 for spacing */}
      <div className="h-full flex flex-col justify-start items-start">
        <div className="flex flex-row justify-start items-center gap-4">
          <Avatar size="large" />
          <div className="">
            <Title className="!m-0" level={5}>
              {name}
            </Title>
            <p>{time}</p> {/* Display time */}
          </div>
        </div>
        <div className="py-4">
          <Title level={5}>{title}</Title>
          <p className="text-lg font-light">{content}</p>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between items-end">
        <Button shape="circle" variant="text" type="text">
          <MoreOutlined className="cursor-pointer" />
        </Button>
        {type == "report" ? (
          <Button type="primary" variant="solid" color="danger">
            See Post
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
