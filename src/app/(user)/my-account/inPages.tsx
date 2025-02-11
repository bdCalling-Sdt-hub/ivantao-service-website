"use client";
import { Segmented } from "antd";
import React, { useState } from "react";
import AccDet from "./acc-det";
import ChangePass from "./change-pass";
import TransactionHistory from "./history";

export default function InPages() {
  const pageTabs = ["Account Details", "Change Password", "Order history"];
  const [activeTab, setActiveTab] = useState(pageTabs[0]); // Initialize with the first tab

  const handleTabChange = (value: React.SetStateAction<string>) => {
    setActiveTab(value);
    console.log(value); // You can still log the value
  };

  return (
    <>
      <div className="py-12 w-full flex flex-row justify-center items-center">
        <Segmented<string>
          options={pageTabs}
          value={activeTab} // Set the current value of the Segmented component
          onChange={handleTabChange}
          size="large"
          className="!w-full bg-[#FBF9F5]"
          block
        />
      </div>
      <div className="pyt-12">
        {/* Conditionally render content based on the active tab */}
        {activeTab === "Account Details" && <AccDet />}
        {activeTab === "Change Password" && <ChangePass />}
        {activeTab === "Order history" && <TransactionHistory />}
      </div>
    </>
  );
}
