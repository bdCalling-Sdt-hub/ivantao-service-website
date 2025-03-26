import DelCat from "@/app/(provider)/provider/(dashboard)/categories/del-cat";
import EditCat from "@/app/(provider)/provider/(dashboard)/categories/edit-cat";
import EditSubCat from "@/app/(provider)/provider/(dashboard)/categories/edit-sub-cat";
import { Button, Dropdown } from "antd";
import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function ProviderEditDD({
  item,
  sub,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  sub?: boolean;
}) {
  const items = [
    {
      key: "1",
      label: sub ? <EditSubCat item={item} /> : <EditCat item={item} />,
    },
    {
      key: "2",
      label: <DelCat id={item.id} />,
    },
  ];
  return (
    <div className="absolute top-3 right-3">
      <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
        <Button variant="outlined" shape="circle">
          <EllipsisVertical />
        </Button>
      </Dropdown>
    </div>
  );
}
