"use client";

import { useState } from "react";
import ConversationList from "@/components/ui/conv-list";
import MessageBubble from "@/components/ui/message-bubble";
import MessageInput from "@/components/ui/message-input";
import { Avatar } from "antd";
import { Conversation, Message } from "@/types/chat";

// Sample data
const sampleConversations: Conversation[] = [
  {
    id: "1",
    user: {
      id: "1",
      name: "Lian O'Sullivan",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chat%20screen.jpg-biDRAiHw3daUW79r6Dzm9TI99cwsbV.jpeg",
      status: "Seller",
    },
    lastMessage: "Hi how are you?",
    timestamp: new Date().toISOString(),
  },
  // Add more sample conversations as needed
];

const sampleMessages: Message[] = [
  {
    id: "1",
    text: "Hi how are you?",
    sender: sampleConversations[0].user,
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    text: "Hello I am fine",
    sender: {
      id: "me",
      name: "Me",
      avatar: "/placeholder.svg",
    },
    timestamp: new Date().toISOString(),
    isOwn: true,
  },
];

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>(sampleMessages);

  const handleSend = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: {
        id: "me",
        name: "Me",
        avatar: "/placeholder.svg",
      },
      timestamp: new Date().toISOString(),
      isOwn: true,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-80">
        <ConversationList
          conversations={sampleConversations}
          selectedId={selectedConversation?.id}
          onSelect={setSelectedConversation}
        />
      </div>
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            <div className="p-4 border-b flex items-center gap-3">
              <Avatar src={selectedConversation.user.avatar} size={40} />
              <div>
                <h2 className="font-semibold">
                  {selectedConversation.user.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedConversation.user.status}
                </p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </div>
            <MessageInput onSend={handleSend} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
}
