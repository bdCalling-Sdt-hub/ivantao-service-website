"use client";

import { Button, Avatar } from "antd";
import { LogoutOutlined, EditOutlined } from "@ant-design/icons";

interface UserProfileProps {
  name: string;
  email: string;
  balance: number;
  avatarUrl: string;
  onLogout?: () => void;
  onEditProfile?: () => void;
}

export default function UserProfile({
  onLogout = () => console.log("logout clicked"),
  onEditProfile = () => console.log("edit clicked"),
  name,
  email,
  balance,
  avatarUrl,
}: UserProfileProps) {
  return (
    <div className="relative w-full mx-auto p-8 bg-white rounded-xl shadow-sm">
      {/* Logout Button */}
      <Button
        icon={<LogoutOutlined />}
        onClick={onLogout}
        className="absolute left-8 top-8 flex items-center gap-2 bg-red-500 text-white hover:bg-red-600 border-none"
      >
        Logout
      </Button>

      {/* Balance Display */}
      <div className="absolute right-0 top-0 text-right p-8 flex flex-col justify-center items-center px-[74px] bg-[#FBF9F5] rounded-bl-xl">
        <div className="text-lg font-medium mb-1">Balance</div>
        <div className="text-xl font-bold border-2 border-black rounded-lg px-6 py-2">
          ${balance.toFixed(2)}
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center mt-12">
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
    </div>
  );
}
