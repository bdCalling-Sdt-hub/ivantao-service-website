import { Avatar, Button } from "antd";
import Title from "antd/es/typography/Title";

import React from "react";
import MoreButt from "./more-butt";
interface PostCardProps {
  name: string;
  time: string;
  title: string;
  content: string;
  type?: "post" | "forum-report" | "report";
  reports?: number;
}

export default function ForumPostCard({
  name,
  time,
  title,
  content,
  type,
  reports,
}: PostCardProps) {
  return (
    <div
      className={`h-[200px] p-6 mb-4 rounded-lg bg-background shadow-sm flex flex-row justify-between items-start ${
        reports !== undefined && reports > 0 ? "border border-red-500" : ""
      }`}
    >
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
          <p className="text-sm md:text-lg font-light">{content}</p>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between items-end">
        <MoreButt reports={reports ? reports : 0} reportType={type} />
        {type == "forum-report" ? (
          <Button
            href="/admin/forum/post/reports"
            type="primary"
            variant="solid"
            color="danger"
          >
            See Post
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
