"use client";
import React, { useEffect, useState } from "react";
import ProfileForm from "./profile-form";
import { Tabs } from "antd";
import ChangePassForm from "./change-pass-form";
import { useSearchParams } from "next/navigation";
import { UserType } from "@/types/userType";

export default function Inpages({ data }: { data?: UserType }) {
  const params = useSearchParams();

  const pageTabs = [
    {
      key: "account",
      label: "Edit Profile",
      component: <ProfileForm data={data} />,
    },
    {
      key: "password",
      label: "Change Password",
      component: <ChangePassForm />,
    }, // Replace with your component
  ];

  const [activeTab, setActiveTab] = useState(pageTabs[0].key);
  useEffect(() => {
    if (params.get("nav") === "cp") {
      setActiveTab(pageTabs[1].key);
    }
  }, []);

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div>
      <Tabs
        size="large"
        activeKey={activeTab}
        centered
        className="prov-tab"
        items={pageTabs}
        onChange={handleTabChange}
      />
      {pageTabs.find((tab) => tab.key === activeTab)?.component}
    </div>
  );
}
