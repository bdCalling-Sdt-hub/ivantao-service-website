import { Collapse, CollapseProps } from "antd";
import React from "react";

export default function Faq() {
  const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ea, tempora numquam temporibus accusamus quis molestiae saepe eveniet sapiente, maxime qui atque! Vero, eos obcaecati. Eveniet sapiente ad ipsam quis.
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Question #1",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Question #2",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Question #3",
      children: <p>{text}</p>,
    },
  ];
  return (
    <div className="w-full">
      <Collapse
        items={items}
        defaultActiveKey={["1"]}
        className="bg-background"
      />
    </div>
  );
}
