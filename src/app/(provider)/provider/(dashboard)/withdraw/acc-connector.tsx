"use client";
import { postFetcher } from "@/lib/simplifier";
import { UserType } from "@/types/userType";
import { Button, message } from "antd";
import { RadioIcon } from "lucide-react";
import React, { useState } from "react";

export default function AccConector({
  user,
  token,
}: {
  user: UserType;
  token: string;
}) {
  const [onboardLink, setOnboardLink] = useState<string>("");
  const [loading, setLoading] = useState(false);
  async function handleClick() {
    setLoading(true);
    const data = {
      email: user.email,
      type: "express",
    };
    try {
      const call = await postFetcher({
        link: "/account-create",
        meth: "POST",
        token,
        data,
      });
      if (!call.status) {
        message.error(call.message);
        return;
      }
      setOnboardLink(call.onboarding_url);
    } catch (error) {
      console.error(error);
    }
  }
  if (onboardLink) {
    return (
      <div className="h-[100px] w-full flex justify-center items-center">
        <a href={onboardLink}>Create / Connect account</a>
      </div>
    );
  }
  return (
    <Button
      className="bg-green-600 text-background "
      size="large"
      loading={loading}
      onClick={handleClick}
    >
      <RadioIcon className="mr-2" /> Connect your account with stripe
    </Button>
  );
}
