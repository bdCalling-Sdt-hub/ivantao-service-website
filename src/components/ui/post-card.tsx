import { MoreOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
interface PostCardProps {
  name: string;
  time: string;
  title: string;
  content: string;
  avatar: string;
}

export default function PostCard({
  name,
  time,
  title,
  content,
  avatar,
}: PostCardProps) {
  return (
    <>
      <div className="p-6 mb-4 rounded-lg bg-background shadow-sm flex flex-row justify-between items-start">
        {/* Added mb-4 for spacing */}
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row justify-start items-center gap-4">
            <Avatar size="large" src={avatar} /> {/* Use src for avatar */}
            <div className="">
              <Title className="!m-0" level={5}>
                {name}
              </Title>
              <p>{time}</p> {/* Display time */}
            </div>
          </div>
          <div className="py-4">
            <Title level={5}>{title}</Title> {/* Display title */}
            <p className="text-lg font-light">
              {content} {/* Display content */}
            </p>
          </div>
        </div>
        <div className="">
          <Button shape="circle" variant="text" type="text">
            <MoreOutlined className="cursor-pointer" />
          </Button>
        </div>
      </div>
    </>
  );
}
