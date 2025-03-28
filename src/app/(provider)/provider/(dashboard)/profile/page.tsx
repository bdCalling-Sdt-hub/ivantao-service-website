import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import React, { Suspense } from "react";
import ProviderProfile from "./provider-profile";
// import ProfileForm from "./profile-form";
import Inpages from "./inpages";
import { getUserData } from "@/lib/api";
import { UserType } from "@/types/userType";
import { cookies } from "next/headers";

export default async function Page() {
  const pookies = cookies();
  const token = pookies.get("raven");
  let accData: { data: UserType } | null = null;

  if (!token) {
    return (
      <div className="text-center py-16">No token found. Please log in.</div>
    );
  }
  try {
    accData = await getUserData(token.value);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return (
      <div className="text-center py-16">
        Error fetching user data. Please try again later.
      </div>
    );
  }
  return (
    <main className="flex flex-col min-h-screen w-full px-8 py-6 overflow-y-auto">
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
          name={accData?.data.full_name}
          email={accData?.data.email}
          // balance={accData?.data.}
          avatarUrl={accData?.data.image}
        />
        <div className="pt-12">
          <Suspense fallback={<div>loading..</div>}>
            <Inpages data={accData?.data} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
