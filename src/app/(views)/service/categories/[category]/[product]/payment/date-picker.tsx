/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Segmented, Calendar, theme } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { CalendarIcon, Clock } from "lucide-react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs());
  const [activeTab, setActiveTab] = useState("Date");
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <div className="w-full rounded-xl bg-white md:p-4 md:px-12">
      <div className="">
        <Segmented
          options={[
            {
              label: (
                <div className="flex items-center justify-center gap-2 w-full">
                  {" "}
                  {/* Center content */}
                  <CalendarIcon className="h-4 w-4" />
                  <span>Select Date</span>
                </div>
              ),
              value: "Date",
            },
            {
              label: (
                <div className="flex items-center justify-center gap-2 w-full">
                  {" "}
                  {/* Center content */}
                  <Clock className="h-4 w-4" />
                  <span>Select Time</span>
                </div>
              ),
              value: "Time",
            },
          ]}
          value={activeTab}
          onChange={(val) => setActiveTab(val)} // No need for "as string" with useState
          className="w-full mb-4 bg-[rgb(203,186,159)] p-1 payement-tabs" // Add flex for even distribution
        />
      </div>

      {activeTab === "Date" && (
        <div className="md:px-[10%]">
          <Calendar
            fullscreen={false}
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            headerRender={({ value, onChange }) => {
              return (
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="text-base font-medium">
                    {value.format("MMMM YYYY")}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        onChange(value.clone().subtract(1, "month"))
                      }
                      className="rounded p-1 hover:bg-gray-100"
                    >
                      <LeftOutlined />
                    </button>
                    <button
                      onClick={() => onChange(value.clone().add(1, "month"))}
                      className="rounded p-1 hover:bg-gray-100"
                    >
                      <RightOutlined />
                    </button>
                  </div>
                </div>
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
