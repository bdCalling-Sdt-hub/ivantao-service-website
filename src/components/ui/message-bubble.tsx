"use client";

import { Avatar } from "antd";
import { Message } from "@/types/chat";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div
      className={`flex items-start gap-3 mb-4 ${
        message.isOwn ? "flex-row-reverse" : ""
      }`}
    >
      {!message.isOwn && <Avatar src={message.sender.avatar} size={40} />}
      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] ${
          message.isOwn ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {message.text}
      </div>
      <span className="text-xs text-gray-500 self-end">
        {new Date(message.timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
}
