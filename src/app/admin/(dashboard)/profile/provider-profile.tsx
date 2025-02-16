"use client";

import { Button, Avatar } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { LogOutIcon } from "lucide-react";

interface UserProfileProps {
  name: string;
  email: string;
  balance: number;
  avatarUrl: string;
  onLogout?: () => void;
  onEditProfile?: () => void;
}

export default function ProviderProfile({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onLogout = () => console.log("logout clicked"),
  onEditProfile = () => console.log("edit clicked"),
  name,
  email,
  avatarUrl,
}: UserProfileProps) {
  return (
    <div className="relative w-full mx-auto p-8 bg-white rounded-xl shadow-sm">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <Avatar
            src={avatarUrl}
            size={120}
            className="border-4 border-white shadow-lg"
          />
          <Button
            icon={<EditOutlined />}
            onClick={onEditProfile}
            className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 flex items-center justify-center bg-white border border-gray-200 shadow-sm"
          />
        </div>

        <h1 className="text-2xl font-bold mt-4 mb-2">{name}</h1>
        <p className="text-gray-500">{email}</p>
      </div>
      <div className="fixed bottom-6 right-6">
        <Button className="px-3 py-2 md:px-8 md:py-6 !text-sm bg-red-500 hover:!bg-red-600 text-background hover:!text-background !border-none">
          <LogOutIcon className="size-5 md:size-6" />
          <span className="hidden md:block">Logout</span>
        </Button>
      </div>
    </div>
  );
}
