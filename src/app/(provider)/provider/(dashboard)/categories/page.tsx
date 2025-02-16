import React from "react";

import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import {
  BulbOutlined,
  HomeOutlined,
  RocketOutlined,
  BookOutlined,
  ShopOutlined,
  LaptopOutlined,
  ToolOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import AddCat from "./add-cat";
import { Button, Dropdown, MenuProps } from "antd";
import { EllipsisVertical } from "lucide-react";
import EditCat from "./edit-cat";
import DelCat from "./del-cat";

export default function Page() {
  interface Category {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: React.ComponentType<any>;
    title: string;
  }

  const categories: Category[] = [
    { Icon: SmileOutlined, title: "Everyday essentials" },
    { Icon: HomeOutlined, title: "Household" },
    { Icon: BulbOutlined, title: "Creative" },
    { Icon: LaptopOutlined, title: "Information technology" },
    { Icon: RocketOutlined, title: "Specialized" },
    { Icon: ShopOutlined, title: "Commercial" },
    { Icon: ToolOutlined, title: "Professional" },
    { Icon: BookOutlined, title: "Education" },
  ];
  const iconStyle = { fontSize: "36px" };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <EditCat />,
    },
    {
      key: "2",
      label: <DelCat />,
    },
  ];
  return (
    <>
      <main className="flex flex-col md:h-screen w-full px-8 py-6 overflow-y-auto">
        <DashTitle>
          <Title level={3} className="flex items-center text-2xl">
            Manage categories
          </Title>
          <p className="text-gray-400">
            Admin with access to this workspace can promote or demote user
            maintain business insights
          </p>
        </DashTitle>
        <div className="pt-8 pb-4">
          <Title level={3}>Categories</Title>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((item) => (
            <div
              key={item.title}
              className="p-4 shadow-sm flex flex-col justify-center items-center text-center font-semibold gap-4 rounded-lg bg-background w-full h-[140px] sm:h-[160px] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <item.Icon style={iconStyle} />
              <div className="text-sm sm:text-base">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="pt-8 pb-4">
          <Title level={3}>Sub Categories</Title>
          <div className="w-full grid md:grid-cols-4 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}>
                <div className="h-[200px] w-full rounded-xl shadow-md bg-background relative">
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
                </div>
              </div>
            ))}
          </div>
        </div>
        <AddCat />
      </main>
    </>
  );
}
