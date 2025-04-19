/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Search from "@/components/ui/search";
import React, { useEffect, useState } from "react";
import User from "./user";
import { Avatar, Button, Form, type FormProps, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import { PlusCircleOutlined, SmileOutlined } from "@ant-design/icons";
import { MessageCircle, SendHorizonal } from "lucide-react";
import SentMe from "@/components/ui/sent-me";
import SentYou from "@/components/ui/send-you";
import Draggable from "react-draggable";
import type { UserType } from "@/types/userType";
import { getFetcher, postFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import type { MessageType } from "@/types/chat";
import Link from "next/link";
import DashTitle from "@/components/ui/dash-title";
type FieldType = {
  message?: string;
};

const MemoizedSentMe = React.memo(SentMe);
const MemoizedSentYou = React.memo(SentYou);
const MemoizedUser = React.memo(User);

export default function Page() {
  const [people, setPeople] = useState<boolean>(true);
  const [users, setUsers] = useState<UserType[]>([]);
  const [cookies] = useCookies(["raven"]);
  const [selectedReciever, setSelectedReciever] = useState<number>(0);
  const [selectedRecieverData, setSelectedRecieverData] = useState<any>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [myId, setMyId] = useState<number>(0);
  const [form] = Form.useForm();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    // Ensures component only renders after mount (client-side)
    setHasMounted(true);
  }, []);

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
  }, [cookies.raven]);

  const recall = React.useCallback(
    async (id: string) => {
      try {
        const selectedId = Number.parseInt(id);
        setSelectedReciever(selectedId);

        const [messagesResponse, profileResponse] = await Promise.all([
          getFetcher({
            link: `/get-message?receiver_id=${selectedId}`,
            token: cookies.raven,
          }),
          getFetcher({
            link: `/provider-profile/${selectedId}`,
            token: cookies.raven,
          }),
        ]);

        setMessages(messagesResponse.data.data);
        setSelectedRecieverData(profileResponse.data);
      } catch (error) {
        console.error(error);
      }
    },
    [cookies.raven]
  );

  const onFinish: FormProps<FieldType>["onFinish"] = React.useCallback(
    async (values: FieldType) => {
      if (!selectedReciever) return;

      try {
        const call = await postFetcher({
          link: "/send-message",
          token: cookies.raven,
          data: {
            receiver_id: selectedReciever,
            message: values.message,
            image: 3,
          },
        });

        if (!call.status) {
          message.error(call.message);
          return;
        }

        form.resetFields();
        recall(String(selectedReciever));
      } catch (error) {
        console.error(error);
      }
    },
    [cookies.raven, form, recall, selectedReciever]
  );

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] =
    React.useCallback((errorInfo: any) => {
      console.log("Failed:", errorInfo);
    }, []);

  useEffect(() => {
    const messagesContainer = document.getElementById("messages");
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (selectedReciever) {
      recall(String(selectedReciever));
    }
  }, [selectedReciever, recall]);
  if (!hasMounted) return null; // skip render on server

  if (!cookies.raven) {
    return (
      <div className="min-h-[80dvh] w-full flex justify-center items-center space-x-1">
        {" "}
        <span>Please</span>{" "}
        <span className="hover:underline">
          <Link href="/login?type=user" className="!text-black">
            {" "}
            log in{" "}
          </Link>
        </span>{" "}
        <span>first</span>
      </div>
    );
  }
  return (
    <>
      {" "}
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl pl-6 pt-6">
          Contact with customer
        </Title>
        <p className="text-gray-400 pl-6">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <main className="md:min-h-[calc(100dvh-94px)] min-h-[calc(100dvh-70px)] w-full p-3 md:p-6 grid grid-cols-1 md:grid-cols-9 gap-8">
        <div
          className={`${
            people ? "hidden" : "fixed"
          } bottom-16 md:top-1/2 md:-translate-y-1/2 right-4 z-30`}
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
          } col-span-1 md:col-span-3 h-[100dvh] pt-[0px] bg-background rounded-xl !overflow-y-auto z-20 top-0 left-0 fixed md:relative w-full md:w-auto`}
        >
          <div
            className={`p-6 sticky top-0 left-0 bg-background w-full z-30 flex justify-between items-center`}
          >
            <Search func={setPeople} />
            {/* <Button
           className="md:hidden"
           onClick={() => setPeople(false)}
           type="text"
         >
           Close
         </Button> */}
          </div>
          <div className="py-4 divide-y">
            {users.map((item) => (
              <MemoizedUser data={item} key={item.id} reCall={recall} />
            ))}
          </div>
        </div>
        <div className="col-span-6 h-full bg-background rounded-xl flex flex-col justify-between items-start w-full">
          <div className="w-full">
            <div className="w-full flex flex-row justify-start items-start gap-2 p-4">
              <div className="">
                <Avatar size="large" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <Title level={5} className="!m-0">
                  {selectedRecieverData?.full_name}
                </Title>
                <p className="text-ellipsis line-clamp-1 text-sm text-gray-400"></p>
              </div>
            </div>
          </div>
          {/*  */}
          {/* MEssage section starts */}
          <div
            className="flex-grow h-[60dvh] md:h-[68dvh] flex flex-col-reverse justify-end items-stretch overflow-y-auto w-full"
            id="messages"
          >
            {messages.map((item) =>
              item.sender_id == selectedReciever ? (
                <MemoizedSentMe message={item.message} key={item.id} />
              ) : (
                <MemoizedSentYou
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
            <div className="w-full p-2 md:p-4 flex flex-row justify-between gap-2 md:gap-4">
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
    </>
  );
}
