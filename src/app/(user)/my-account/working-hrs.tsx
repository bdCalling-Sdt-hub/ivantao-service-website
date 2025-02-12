import Title from "antd/es/typography/Title";
import React from "react";

export default function WorkingHrs() {
  return (
    <div className="p-2">
      <Title level={4} className="!m-0">
        Weekly - <span className="font-semibold">6 days</span>
      </Title>
    </div>
  );
}
