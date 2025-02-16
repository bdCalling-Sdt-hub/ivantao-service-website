"use client";
import Search from "@/components/ui/search";
import React, { useState } from "react";
import User from "./user";
import { Avatar, Button, Input } from "antd";
import Title from "antd/es/typography/Title";
import { PlusCircleOutlined, SmileOutlined } from "@ant-design/icons";
import { MessageCircle, SendHorizonal } from "lucide-react";
import SentMe from "../../../components/ui/sent-me";
import SentYou from "../../../components/ui/send-you";
import Draggable from "react-draggable";
export default function Page() {
  const [people, setPeople] = useState<boolean>(true);
  return (
    <main className="md:h-[calc(100dvh-94px)] w-full p-3 md:p-6 grid grid-cols-1 md:grid-cols-9 gap-8 md:px-[7%]">
      <div
        className={`${
          people ? "hidden" : "fixed"
        } top-1/2 -translate-y-1/2 right-4 z-50`}
      >
        <Draggable>
          <Button
            shape="circle"
            className="!p-2 h-12 w-12 text-blue-400 !border-blue-400"
            onClick={() => {
              setPeople(true);
            }}
          >
            <MessageCircle />
          </Button>
        </Draggable>
      </div>
      <div
        className={`${
          people ? "block" : "hidden"
        } col-span-1 md:col-span-3 h-full bg-background rounded-xl overflow-y-auto z-40 top-0 left-0 fixed md:relative`}
      >
        <div className={`p-6 sticky  top-0 left-0 bg-background w-full z-10`}>
          <Search func={setPeople} />
        </div>
        <div className="py-4 divide-y">
          {Array.from({ length: 4 }).map((item, i) => (
            <User key={i} />
          ))}
        </div>
      </div>
      <div className="col-span-6 h-full bg-background rounded-xl flex flex-col justify-between items-start">
        <div className="w-full">
          <div className="w-full flex flex-row justify-start items-start gap-2 p-4">
            <div className="">
              <Avatar size="large" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <Title level={5} className="!m-0">
                Bill Kuphal
              </Title>
              <p className="text-ellipsis line-clamp-1 text-sm text-gray-400">
                Online for 10 mins
              </p>
            </div>
          </div>
        </div>
        {/* MEssage section starts */}
        <div
          className="flex-grow max-h-[68dvh] flex flex-col justify-end items-stretch overflow-y-scroll w-full"
          id="messages"
        >
          <SentMe
            message="Who was that philosopher you
shared with me recently?"
          />
          <SentYou message="Roland Barthes" seen />
          <SentMe message="That's him!" />
          <SentYou
            message="“Ultimately in order to see a
photograph well, it is best to
look away or close your eyes.”"
          />
        </div>
        {/* Message section ends */}
        <div className="w-full p-4 flex flex-row justify-between gap-4">
          <Button
            size="large"
            shape="circle"
            className="!border-none !shadow-none"
          >
            <PlusCircleOutlined size={18} className="text-2xl text-gray-400" />
          </Button>
          <Input
            className="!rounded-full px-3"
            placeholder="Type your message"
            suffix={
              <SmileOutlined
                size={18}
                className="text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              />
            }
          />
          <Button
            size="large"
            shape="circle"
            type="primary"
            className="!border-none !shadow-none !bg-gray-300 hover:!bg-gray-400 flex justify-center items-center"
          >
            <SendHorizonal fill="#fff" size={18} className="text-2xl" />
          </Button>
        </div>
      </div>
    </main>
  );
}
