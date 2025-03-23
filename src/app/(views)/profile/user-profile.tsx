"use client";

import { Avatar } from "antd";
import { UserType } from "@/types/userType";
import { defaultUserProfile } from "@/lib/config";
import { StarFilled } from "@ant-design/icons";
import { MailIcon, MapPin } from "lucide-react";
import Title from "antd/es/typography/Title";
import ProviderData from "./provider-data";

type UserProfileProps = {
  user: UserType;
};
export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="relative w-full mx-auto p-8 rounded-xl shadow-sm">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="relative">
          <Avatar
            src={
              user.image &&
              user.image !==
                "http://10.0.80.16:8002/uploads/profile_images/default_user.png"
                ? user.image
                : defaultUserProfile
            }
            size={120}
            className="border-4 border-white shadow-lg"
          />
        </div>

        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mt-4 mb-2">
          {user.full_name}
        </h1>
        <div className="text-2xl flex flex-row justify-center !gap-2">
          <span>4.0</span>
          <span className="text-yellow-400">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </span>
        </div>
        <p className="text-gray-500 text-base md:text-lg lg:text-xl flex flex-row justify-center items-center gap-2 pt-4">
          <MailIcon />
          <span>{user.email}</span>
        </p>
        <p className="text-gray-500 text-base md:text-lg lg:text-xl flex flex-row justify-center items-center gap-2 pt-4">
          <MapPin />
          <span>{user.address ? user.address : "No data found"}</span>
        </p>
      </div>
      {user.role == "provider" && (
        <>
          <div className="!mt-12">
            <Title level={2}>About:</Title>
            <p>
              {user.provider_description
                ? user.provider_description
                : "Provider dashboard isnt defined"}
            </p>
          </div>
          <ProviderData user={user} />
        </>
      )}
    </div>
  );
}
