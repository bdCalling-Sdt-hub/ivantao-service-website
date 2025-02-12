import React from "react";

import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import BackText from "@/components/ui/back-text";
import { Button, Image } from "antd";

export default function Page() {
  return (
    <div className="flex flex-col h-screen w-full px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          Add your product for service
        </Title>
        <p className="text-gray-400">
          Here you can add your service to share with other people & also can
          earn money.
        </p>
      </DashTitle>
      <div className="pt-2 w-full h-full flex flex-col justify-start items-stretch">
        <BackText text="Back" butt />
        <div className="h-[300px] overflow-hidden flex flex-col justify-center items-center rounded-xl">
          <Image
            src="/images/categories/household.jfif"
            alt="thumbnail"
            className="w-full"
          />
        </div>
        <div className="flex-grow w-full pt-6">
          <div className="h-full w-full rounded-xl bg-background space-y-4 p-6">
            <Title className="!m-0" level={3}>
              Share cleaning service as pro.
            </Title>
            <p>66 order in queue</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dictum cras facilisi nunc
              facilisis. Eleifend vel sed donec felis libero. In imperdiet
              pellentesque at urna velit in massa potenti. Id eleifend nulla
              odio dignissim malesuada est egestas congue arcu.
            </p>
            <div className="">
              <Title className="!m-0" level={3}>
                $5200.00
              </Title>
            </div>
            <div className="">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full mt-8 bg-[#DAC7A0] text-black font-bold hover:!bg-[#C4A77D]"
                variant="filled"
              >
                Edit
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full mt-8 border-[#DAC7A0] text-black font-bold hover:!text-black !bg-transparent hover:!bg-[#DAC7A0]"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
