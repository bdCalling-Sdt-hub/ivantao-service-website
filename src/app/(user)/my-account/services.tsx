import React from "react";
import AddService from "./add-service";

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
      <AddService />
    </div>
  );
}
