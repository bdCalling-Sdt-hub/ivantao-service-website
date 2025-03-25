import { Avatar, Button } from "antd";
import Title from "antd/es/typography/Title";

import React from "react";
import MoreButt from "./more-butt";
import { postType } from "@/types/forums";

export default function ForumPostCard({
  post,
  type,
}: {
  post: postType;
  type: string;
}) {
  return (
    <div
      className={
        `h-[200px] p-6 mb-4 rounded-lg bg-background shadow-sm flex flex-row justify-between items-start`
        //   ${
        //   post.reports !== undefined && post.reports > 0
        //     ? "border border-red-500"
        //     : ""
        // }`
      }
    >
      {/* Added mb-4 for spacing */}
      <div className="h-full flex flex-col justify-start items-start">
        <div className="flex flex-row justify-start items-center gap-4">
          <Avatar size="large" />
          <div className="">
            <Title className="!m-0" level={5}>
              {post.title}
            </Title>
            <p>{post.time_ago}</p> {/* Display time */}
          </div>
        </div>
        <div className="py-4">
          <Title level={5}>{post.title}</Title>
          <p className="text-sm md:text-lg font-light">{post.comment}</p>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between items-end">
        <MoreButt reports={0} reportType="post" />
        {type === "forum-report" ? (
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
