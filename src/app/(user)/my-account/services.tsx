import { Button } from "antd";
import React from "react";

export default function Services() {
  const services = ["Cleaning", "Cooking", "Baby Sitting", "Pet Service"];
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {services.map((item, i) => (
        <div
          key={i}
          className="px-2 py-1 border-2 border-black rounded-xl font-semibold text-center"
        >
          {item}
        </div>
      ))}
      <Button className="col-span-2 font-semibold" size="large" type="primary">
        + Add new
      </Button>
    </div>
  );
}
