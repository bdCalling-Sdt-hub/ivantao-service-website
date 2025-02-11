import { Divider } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { DataItem } from "./page";

const BillingCard: React.FC<{ data: DataItem[] }> = ({ data }) => (
  <div className="rounded-xl bg-background mt-6">
    <div className="p-6 bg-gray-100 rounded-xl">
      <Title level={4} className="text-center">
        Billing information
      </Title>
      <div>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {item.divide && <Divider className="border-black" />}
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
      </div>
    </div>
  </div>
);

export default BillingCard;
