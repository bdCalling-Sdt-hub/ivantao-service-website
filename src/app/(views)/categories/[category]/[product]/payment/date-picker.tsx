/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Tabs, Calendar, theme } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { CalendarIcon, Clock } from "lucide-react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const DatePicker = () => {
  // Change the state type to Dayjs | undefined
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs());
  const { useToken } = theme;
  const { token } = useToken();

  const items = [
    {
      key: "date",
      label: (
        <div className="flex items-center gap-2 w-full">
          <CalendarIcon className="h-4 w-4" />
          <span>Select Date</span>
        </div>
      ),
    },
    {
      key: "time",
      label: (
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>Select Time</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full rounded-xl bg-white p-4 px-12">
      <Tabs
        items={items}
        className="date-picker-tabs w-full grid-cols-2"
        tabBarStyle={{
          margin: 0,
          backgroundColor: "rgb(203, 186, 159)",
          borderRadius: "12px",
          padding: "4px",
        }}
      />
      <div className="px-[10%]">
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
                    onClick={() => onChange(value.clone().subtract(1, "month"))}
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

      <style jsx global>{`
        .date-picker-tabs .ant-tabs-nav::before {
          border: none !important;
        }

        .date-picker-tabs .ant-tabs-tab {
          color: rgba(0, 0, 0, 0.45);
          padding: 8px 16px;
          margin: 0 !important;
        }

        .date-picker-tabs .ant-tabs-tab-active {
          background-color: white !important;
          border-radius: 8px;
        }

        .date-picker-tabs .ant-tabs-ink-bar {
          display: none;
        }

        .ant-picker-calendar {
          border-radius: 12px;
        }

        .ant-picker-calendar-header {
          padding: 0 !important;
          margin: 16px 0 !important;
        }

        .ant-picker-cell-selected .ant-picker-calendar-date {
          background-color: #e6f4ff !important;
          color: #1677ff !important;
        }

        .ant-picker-calendar-date {
          border-radius: 4px !important;
          margin: 2px !important;
        }

        .ant-picker-calendar-date-value {
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default DatePicker;
