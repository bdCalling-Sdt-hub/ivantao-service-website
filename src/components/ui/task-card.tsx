/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CalendarIcon, Clock } from "lucide-react";
import type React from "react";

interface Provider {
  id: number;
  full_name: string;
}

interface Transaction {
  id: string;
  provider_id: number;
  amount: string;
  status: string;
  created_at: string;
  updated_at: string;
  provider: Provider;
  order: any | null;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function TaskCard({ item }: { item: Transaction }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:justify-between ">
        {/* Title Section */}
        <div className="px-4 py-2 md:py-4 min-w-[200px] text-center md:text-left">
          <h3 className="text-base md:text-lg font-medium text-gray-900">
            {item.order ? item.order : null}
          </h3>
          <p className="text-sm md:text-base text-gray-900">
            {item.provider.full_name}
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            {item.order ? item.order : null}
          </p>
        </div>

        {/* Date/Time Section */}
        <div className="px-4 py-2 md:py-4 min-w-[180px] flex flex-col justify-center items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarIcon className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{formatDate(item.updated_at)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{formatTime(item.updated_at)}</span>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="px-4 py-2 md:py-4 flex justify-center items-center">
          <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
              item.status === "completed"
                ? "text-green-700 bg-green-50"
                : item.status === "pending"
                ? "text-yellow-700 bg-yellow-50"
                : item.status === "in_progress"
                ? "text-blue-700 bg-blue-50"
                : "text-gray-700 bg-gray-50"
            }`}
          >
            {item.status}
          </span>
        </div>

        {/* Price Section */}
        <div className="px-4 py-2 md:py-4 flex flex-col justify-center items-center">
          <p className="text-lg font-semibold text-green-700">
            $
            {typeof item.amount === "number"
              ? parseInt(item.amount).toFixed(2)
              : item.amount}
          </p>
        </div>
      </div>
    </div>
  );
}
