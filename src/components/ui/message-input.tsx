"use client";

import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useState } from "react";

interface MessageInputProps {
  onSend: (message: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 border-t">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onPressEnter={handleSend}
        placeholder="Type your message..."
        suffix={
          <SendOutlined
            className="cursor-pointer text-blue-500"
            onClick={handleSend}
          />
        }
        className="rounded-full"
      />
    </div>
  );
}
