import React from "react";
import UserProfile from "./user-profile";
import InPages from "./inPages";

export default async function Page() {
  const accData = {
    name: "Seint Josef",
    email: "example@gmail.com",
    balance: 100.0,
    avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
  };
  return (
    <main className="px-[7%] py-16">
      <UserProfile
        name={accData.name}
        email={accData.email}
        balance={accData.balance}
        avatarUrl={accData.avatarUrl}
      />
      <InPages />
    </main>
  );
}
