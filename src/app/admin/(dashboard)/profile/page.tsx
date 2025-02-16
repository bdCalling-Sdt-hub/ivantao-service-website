import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import React from "react";
import ProviderProfile from "./provider-profile";
// import ProfileForm from "./profile-form";
import Inpages from "./inpages";

export default function Page() {
  const accData = {
    name: "Seint Josef",
    email: "example@gmail.com",
    balance: 100.0,
    avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
  };
  return (
    <main className="flex flex-col md:h-screen w-full px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Admin Profile
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="md:px-12">
        <ProviderProfile
          name={accData.name}
          email={accData.email}
          balance={accData.balance}
          avatarUrl={accData.avatarUrl}
        />
        <div className="pt-12">
          <Inpages />
        </div>
      </div>
    </main>
  );
}
