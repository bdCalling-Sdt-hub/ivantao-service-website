"use client";

import { List, Avatar } from "antd";
import { Conversation } from "@/types/chat";
import { formatDistanceToNow } from "date-fns";

interface ConversationListProps {
  conversations: Conversation[];
  selectedId?: string;
  onSelect: (conversation: Conversation) => void;
}

export default function ConversationList({
  conversations,
  selectedId,
  onSelect,
}: ConversationListProps) {
  return (
    <div className="border-r h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">People</h2>
      </div>
      <List
        dataSource={conversations}
        renderItem={(conversation) => (
          <List.Item
            className={`cursor-pointer hover:bg-gray-50 ${
              selectedId === conversation.id ? "bg-gray-50" : ""
            }`}
            onClick={() => onSelect(conversation)}
          >
            <List.Item.Meta
              avatar={<Avatar src={conversation.user.avatar} size={40} />}
              title={conversation.user.name}
              description={conversation.lastMessage}
            />
            <div className="text-xs text-gray-500">
              {formatDistanceToNow(new Date(conversation.timestamp), {
                addSuffix: true,
              })}
            </div>
          </List.Item>
        )}
        className="conversations-list"
      />
    </div>
  );
}
