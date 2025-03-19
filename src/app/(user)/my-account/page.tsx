"use server";
import React from "react";
import UserProfile from "./user-profile";
import InPages from "./inPages";
import { getUserData } from "@/lib/api";
import { cookies } from "next/headers";
import { UserType } from "@/types/userType";

export default async function Page() {
  const pookies = cookies();
  const token = pookies.get("raven");

  // If no token is found, show a message
  if (!token) {
    return (
      <div className="text-center py-16">No token found. Please log in.</div>
    );
  }

  // Fetch user data using the token
  let accData: { data: UserType } | null = null;

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

  // Show loading state if data is not yet available
  if (!accData) {
    return <div className="text-center py-16">Loading user data...</div>;
  }

  // Render the user profile and in-pages components
  return (
    <main className="px-[7%] py-16">
      <UserProfile user={accData.data} />
      <InPages user={accData.data} />
    </main>
  );
}
