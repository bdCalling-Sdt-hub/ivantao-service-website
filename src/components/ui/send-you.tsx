import { CheckCheckIcon } from "lucide-react";
import React from "react";

export default function SentYou({
  message,
  seen,
}: {
  message: string;
  seen?: boolean;
}) {
  return (
    <div className="p-4 flex flex-row justify-end items-end gap-4 ">
      <div className="w-2/3 md:max-w-[33.333333%] flex flex-col justify-start items-end">
        <div className="p-2 w-full px-6 bg-[#F0E8FF] rounded-3xl rounded-br-none">
          {message}
        </div>
        {seen ? (
          <div className="text-xs flex flex-row justify-start items-center pt-1 text-gray-400">
            <CheckCheckIcon className="!text-blue-500" size={16} /> 2:16 PM
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
