import Title from "antd/es/typography/Title";
import React from "react";
import Notification from "./notifications";

export default function Page() {
  return (
    <main className="px-[7%] py-12">
      <Title level={2}>Notifications</Title>
      <section className="flex-grow w-full space-y-2 pt-8">
        {Array.from({ length: 10 }).map((it, i) => (
          <Notification key={i} />
        ))}
      </section>
    </main>
  );
}
