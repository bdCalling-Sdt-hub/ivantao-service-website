import PageHeader from "@/components/shared/page-head";
import Title from "antd/es/typography/Title";
import React from "react";

export default function Page() {
  return (
    <main className="py-12 px-[7%]">
      <PageHeader img="/images/about/pvc.webp" title="Privacy policy" />
      <div className="h-[100px]"></div>
      <div className="flex flex-col justify-start items-start">
        <Title>Lorem ispum</Title>{" "}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          distinctio temporibus quod cupiditate omnis suscipit fuga minima,
          totam vitae. Expedita quaerat qui unde soluta illum praesentium
          consequatur laudantium est corrupti.
        </p>
      </div>
    </main>
  );
}
