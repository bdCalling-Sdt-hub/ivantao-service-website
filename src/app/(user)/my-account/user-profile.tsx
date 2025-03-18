"use client";

import { Button, Avatar, App } from "antd";
import { LogoutOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { UserType } from "@/types/userType";
type UserProfileProps = {
  user: UserType;
};
export default function UserProfile({ user }: UserProfileProps) {
  const navig = useRouter();
  const [, , removeCookie] = useCookies(["raven"]);
  const { message } = App.useApp();
  console.log(user);

  return (
    <div className="relative w-full mx-auto p-8 bg-[#F0E8FF] rounded-xl shadow-sm">
      {/* Logout Button */}
      <Button
        icon={<LogoutOutlined />}
        onClick={() => {
          try {
            removeCookie("raven");
            message.success("Logged out successfully");
            navig.push("/");
          } catch (error) {
            console.error(error);
            console.log("failed to logout");
          }
        }}
        className="absolute left-3 md:left-8 top-3 md:top-8 flex items-center gap-2 bg-red-500 text-white hover:bg-red-600 border-none"
      >
        Logout
      </Button>

      {/* Balance Display */}
      <div className="absolute right-0 top-0 text-right  p-2 md:p-8 flex flex-col justify-center items-center md:px-[74px] bg-[#fff] rounded-bl-xl">
        <div className="text-sm md:text-lg font-medium mb-1">Balance</div>
        <div className="text-base md:text-xl font-bold border md:border-2 border-black rounded-lg px-2 md:px-6 py-1 md:py-2">
          ${"0.00"}
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="relative">
          <Avatar
            src={
              user.image &&
              user.image !==
                "http://10.0.80.16:8002/uploads/profile_images/default_user.png"
                ? user.image
                : "https://api.dicebear.com/9.x/big-ears-neutral/svg?eyes=variant03&mouth=variant0702&nose=variant01&backgroundColor=ffffff"
            }
            size={120}
            className="border-4 border-white shadow-lg"
          />
          <Button
            icon={<EditOutlined />}
            onClick={() => {}}
            className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 flex items-center justify-center bg-white border border-gray-200 shadow-sm"
          />
        </div>

        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-4 mb-2">
          {user.full_name}
        </h1>
        <p className="text-gray-500 text-xs md:text-sm lg:text-base">
          {user.email}
        </p>
      </div>
    </div>
  );
}
