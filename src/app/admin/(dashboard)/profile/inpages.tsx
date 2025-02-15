"use client";
import React, { useState } from "react";
import ProfileForm from "./profile-form";
import { Tabs } from "antd";
import ChangePassForm from "./change-pass-form";

export default function Inpages() {
  const pageTabs = [
    { key: "account", label: "Edit Profile", component: <ProfileForm /> },
    {
      key: "password",
      label: "Change Password",
      component: <ChangePassForm />,
    }, // Replace with your component
  ];

  const [activeTab, setActiveTab] = useState(pageTabs[0].key);

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
