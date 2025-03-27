"use client";
import Search from "@/components/ui/search";
import React, { useEffect, useState } from "react";
import User from "./user";
import { Avatar, Button, Form, FormProps, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import { PlusCircleOutlined, SmileOutlined } from "@ant-design/icons";
import { MessageCircle, SendHorizonal } from "lucide-react";
import SentMe from "@/components/ui/sent-me";
import SentYou from "@/components/ui/send-you";
import Draggable from "react-draggable";
import { UserType } from "@/types/userType";
import { getFetcher, getFetcherwithBody, postFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { MessageType } from "@/types/chat";
type FieldType = {
  message?: string;
};
export default function Page() {
  const [people, setPeople] = useState<boolean>(true);
  const [users, setUsers] = useState<UserType[]>([]);
  const [cookies] = useCookies(["raven"]);
  const [selectedReciever, setSelectedReciever] = useState<number>(0);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [myId, setMyId] = useState<number>(0);
  const [form] = Form.useForm();
  useEffect(() => {
    async function getUserData() {
      try {
        const myCall = await getFetcher({
          link: "/auth/own-profile",
          token: cookies.raven,
        });
        setMyId(myCall.data.id);

        const call = await getFetcher({
          link: "/search-user",
          token: cookies.raven,
        });
        setUsers(call.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUserData();
  }, []);

  const recall = async (id: string) => {
    try {
      const call = await getFetcherwithBody({
        link: "/get-message",
        token: cookies.raven,
        data: { receiver_id: id },
      });
      setSelectedReciever(parseInt(id));
      setMessages(call.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    try {
      const call = await postFetcher({
        link: "",
        token: cookies.raven,
        data: { reciever_id: selectedReciever, message: values.message },
      });
      if (!call.status) {
        message.error(call.message);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main className="md:h-[calc(100dvh-94px)] w-full p-3 md:p-6 grid grid-cols-1 md:grid-cols-9 gap-8 md:px-[7%]">
      <div
        className={`${
          people ? "hidden" : "fixed"
        } top-1/2 -translate-y-1/2 right-4 -z-20`}
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
        } col-span-1 md:col-span-3 h-full bg-background rounded-xl !overflow-y-auto z-20 top-0 left-0 fixed md:relative`}
      >
        <div className={`p-6 sticky top-0 left-0 bg-background w-full z-30`}>
          <Search func={setPeople} />
        </div>
        <div className="py-4 divide-y">
          {users.map((item) => (
            <User data={item} key={item.id} reCall={recall} />
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
        {/*  */}
        {/* MEssage section starts */}
        <div
          className="flex-grow max-h-[68dvh] flex flex-col justify-end items-stretch overflow-y-scroll w-full"
          id="messages"
        >
          {messages.map((item) =>
            item.sender_id == myId ? (
              <SentMe message={item.message} key={item.id} />
            ) : (
              <SentYou
                message={item.message}
                key={item.id}
                seen={item.is_read === 1}
              />
            )
          )}
        </div>
        {/* Message section ends */}
        {/*  */}
        <Form
          form={form}
          name="post-message"
          className="w-full"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="w-full p-4 flex flex-row justify-between gap-4">
            <Button
              size="large"
              shape="circle"
              className="!border-none !shadow-none"
            >
              <PlusCircleOutlined
                size={18}
                className="text-2xl text-gray-400"
              />
            </Button>
            <Form.Item<FieldType>
              name="message"
              className="w-full h-full"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
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
            </Form.Item>

            <Button
              htmlType="submit"
              size="large"
              shape="circle"
              type="primary"
              className="!border-none !shadow-none !bg-[#7849D4] hover:!bg-[#50318a] flex justify-center items-center"
            >
              <SendHorizonal fill="#fff" size={18} className="text-2xl" />
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
}
