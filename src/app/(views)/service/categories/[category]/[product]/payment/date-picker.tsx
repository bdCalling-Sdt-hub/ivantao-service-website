/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Segmented, Calendar, theme, TimePicker, TimePickerProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { CalendarIcon, Clock } from "lucide-react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const DatePicker = ({
  dataChanger,
  data,
}: {
  dataChanger: Dispatch<
    SetStateAction<{
      user_id: string;
      service_id: string;
      start_date: string;
      end_date: string;
      start_time: string;
      end_time: string;
    }>
  >;
  data: {
    user_id: string;
    service_id: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
  };
}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(dayjs());
  const [activeTab, setActiveTab] = useState("Date");
  const { useToken } = theme;
  const { token } = useToken();

  function dateChanger(date: Dayjs) {
    const formattedDate = date.format("YYYY-MM-DD");
    dataChanger({
      ...data,
      start_date: formattedDate,
      end_date: formattedDate,
    });
    setSelectedDate(date);
  }

  function handleStartTimeChange(time: Dayjs | null) {
    if (time) {
      dataChanger({
        ...data,
        start_time: time.format("HH:mm"),
      });
    }
  }

  function handleEndTimeChange(time: Dayjs | null) {
    if (time) {
      dataChanger({
        ...data,
        end_time: time.format("HH:mm"),
      });
    }
  }

  return (
    <div className="w-full rounded-xl bg-white md:p-4 md:px-12">
      <div className="">
        <Segmented
          options={[
            {
              label: (
                <div className="flex items-center justify-center gap-2 w-full">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Select Date</span>
                </div>
              ),
              value: "Date",
            },
            {
              label: (
                <div className="flex items-center justify-center gap-2 w-full">
                  <Clock className="h-4 w-4" />
                  <span>Select Time</span>
                </div>
              ),
              value: "Time",
            },
          ]}
          value={activeTab}
          onChange={(val) => setActiveTab(val)}
          className="w-full mb-4 bg-[#7849D4] p-1 payement-tabs"
        />
      </div>

      {activeTab === "Date" && (
        <div className="md:px-[10%]">
          <Calendar
            fullscreen={false}
            value={selectedDate}
            onChange={(date) => {
              dateChanger(date);
            }}
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
      {activeTab === "Time" && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <TimePicker
            placeholder="From"
            use12Hours
            format="h:mm A"
            onChange={handleStartTimeChange}
            size="large"
            className="w-full"
          />
          <TimePicker
            placeholder="To"
            use12Hours
            format="h:mm A"
            onChange={handleEndTimeChange}
            size="large"
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
