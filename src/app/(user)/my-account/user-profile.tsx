"use client";

import { Button, Avatar, App } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { UserType } from "@/types/userType";
import { defaultUserProfile } from "@/lib/config";
import ProfPicUpdater from "@/components/ui/prof-pic-updater";
type UserProfileProps = {
  user: UserType;
};
export default function UserProfile({ user }: UserProfileProps) {
  const navig = useRouter();
  const [cookies, , removeCookie] = useCookies(["raven"]);
  const { message } = App.useApp();

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
          <ProfPicUpdater token={cookies.raven} />
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
