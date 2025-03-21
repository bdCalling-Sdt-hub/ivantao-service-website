import React from "react";
import { DataItem } from "./page";
import Title from "antd/es/typography/Title";
import { Button } from "antd";

export const ProviderCard: React.FC<{ data: DataItem[] }> = ({ data }) => {
  const dataWithoutLastItem = data.slice(0, data.length - 1); // Remove the last item

  return (
    <>
      <div className="p-6 bg-[#F0E8FF] rounded-lg">
        <Title level={4} className="text-center">
          Provider information
        </Title>
        {dataWithoutLastItem.map((item, index) => (
          <React.Fragment key={index}>
            {item.label && item.value && (
              <p className="flex flex-row justify-between items-start gap-2 w-full text-lg">
                <span>{item.label}</span>
                <span className="font-bold flex items-center">
                  {item.currency && "$"} {item.value}
                </span>
              </p>
            )}
          </React.Fragment>
        ))}
        <p className="flex flex-row justify-between items-start gap-2 w-full text-lg">
          <span>More info: </span>
          <span className="font-bold flex items-center">
            <Button
              size="large"
              type="primary"
              className="px-6 bg-[#7849D4] hover:!bg-[#5a37a0]"
            >
              See Profile
            </Button>
          </span>
        </p>
      </div>
    </>
  );
};
