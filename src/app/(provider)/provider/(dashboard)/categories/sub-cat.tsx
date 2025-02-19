import { Button, Dropdown } from "antd";
import Title from "antd/es/typography/Title";
import { EllipsisVertical } from "lucide-react";
import React from "react";
import DelCat from "./del-cat";
import EditSubCat from "./edit-sub-cat";

export default function SubCat() {
  const items = [
    {
      key: "3",
      label: <EditSubCat />,
    },
    {
      key: "4",
      label: <DelCat />,
    },
  ];
  return (
    <div className="pt-8 pb-4">
      <Title level={3}>Sub Categories</Title>
      <div className="w-full grid md:grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <div className="h-[200px] w-full rounded-xl shadow-md bg-background relative p-3">
              <div className="absolute top-3 right-3">
                <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <Button variant="outlined" shape="circle">
                    <EllipsisVertical />
                  </Button>
                </Dropdown>
              </div>
              <div className="h-[120px] w-full bg-gray-300 rounded-xl"></div>
              <div className="h-[80px] w-full flex justify-center items-center text-lg font-semibold text-gray-500">
                Laundry
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
