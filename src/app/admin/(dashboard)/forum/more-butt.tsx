"use client";
import { EyeFilled, MoreOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Modal, Popconfirm } from "antd";
import Title from "antd/es/typography/Title";
import { AlertOctagon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function MoreButt({
  reports,
  reportType,
}: {
  reports: number;
  reportType?: "post" | "forum-report" | "report";
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label:
        reportType == "report" ? (
          <div
            onClick={showModal}
            className="py-2 px-2 flex flex-row justify-start items-center gap-2 cursor-pointer"
          >
            <EyeFilled /> <span>View Details</span>
          </div>
        ) : (
          <Link href="/admin/forum/post/reports">
            <div className="py-2 px-2 bg-red-500 text-white flex flex-row justify-start items-center gap-2">
              <AlertOctagon className="size-4" />
              <span>Report Details ({reports})</span>
            </div>
          </Link>
        ),
    },
    {
      key: "2",
      label: (
        <Popconfirm
          title="Are you sure to delete this post?"
          trigger="hover"
          arrow
          placement="bottomRight"
        >
          <div className="py-2 px-2 !text-red-500 flex flex-row justify-start items-center gap-2">
            <Trash2Icon className="size-4" /> <span>Delete post</span>
          </div>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }}>
        <Button shape="circle" variant="text" type="text">
          <MoreOutlined className="cursor-pointer" />
        </Button>
      </Dropdown>

      {/* Modal placed outside Dropdown */}
      <Modal
        title={null}
        footer={
          <div className="flex justify-center items-center">
            <Button size="large" danger variant="filled">
              See Post
            </Button>
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <div className="flex flex-col justify-start items-center w-full py-4">
          <Avatar className="size-28" />
          <Title level={3}>Linuxoid</Title>
          <p className="text-sm">25 min ago</p>
          <div className="w-full flex flex-col justify-start items-start gap-4 pt-4">
            <div className="p-2 w-full bg-gray-200 rounded-md">Reason</div>
            <div className="p-2 h-[300px] w-full bg-gray-200 rounded-md">
              Description
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
