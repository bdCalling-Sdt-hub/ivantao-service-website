"use client";
import { CopyOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { DataItem } from "./page";
import { message } from "antd";
import { useState } from "react";

const OrderInfoCard: React.FC<{ data: DataItem[] }> = ({ data }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopyClick = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(value);
        message.success(`${value} copied to clipboard!`);
        setTimeout(() => setCopied(null), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        message.error(`Failed to copy ${value}!`);
      });
  };

  return (
    <div className="p-6 bg-[#F0E8FF] rounded-xl">
      <Title level={4} className="text-center">
        Order information
      </Title>
      <div>
        {data.map((item, index) => (
          <p
            key={index}
            className="flex flex-row justify-between items-start gap-2 w-full text-lg"
          >
            <span>{item.label}</span>
            <span className="font-bold flex items-center">
              {item.value}
              {item.copiable &&
                item.value && ( // Check BOTH copiable and value
                  <span
                    className="pl-2 cursor-pointer"
                    onClick={() => {
                      if (typeof item.value === "string") {
                        // Type guard
                        handleCopyClick(item.value);
                      }
                    }}
                    title={copied === item.value ? "Copied!" : "Copy"}
                  >
                    <CopyOutlined />
                  </span>
                )}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default OrderInfoCard;
