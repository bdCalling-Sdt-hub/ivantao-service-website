"use client";

import { CalendarIcon, Clock } from "lucide-react";
import type React from "react";

interface TaskCardProps {
  title?: string;
  providerName?: string;
  location?: string;
  date?: string;
  time?: string;
  status?: "Completed" | "Pending" | "In Progress" | string;
  price?: string | number;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title = "Cleaning like a pro",
  providerName = "Abid Hasan",
  location = "Dhaka, Bangladesh",
  date = "19/12/2024",
  time = "12:00pm",
  status = "Completed",
  price = 550.0,
}) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:justify-between ">
        {/* Title Section */}
        <div className="px-4 py-2 md:py-4 min-w-[200px] text-center md:text-left">
          <h3 className="text-base md:text-lg font-medium text-gray-900">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-900">{providerName}</p>
          <p className="text-xs md:text-sm text-gray-500">{location}</p>
        </div>

        {/* Date/Time Section */}
        <div className="px-4 py-2 md:py-4 min-w-[180px] flex flex-col justify-center items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarIcon className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{time}</span>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="px-4 py-2 md:py-4 flex justify-center items-center">
          <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
              status === "Completed"
                ? "text-green-700 bg-green-50"
                : status === "Pending"
                ? "text-yellow-700 bg-yellow-50"
                : status === "In Progress"
                ? "text-blue-700 bg-blue-50"
                : "text-gray-700 bg-gray-50"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Price Section */}
        <div className="px-4 py-2 md:py-4 flex flex-col justify-center items-center">
          <p className="text-lg font-semibold text-green-700">
            ${typeof price === "number" ? price.toFixed(2) : price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
