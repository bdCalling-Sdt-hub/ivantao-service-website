"use client";
import DashTitle from "@/components/ui/dash-title";
import { getFetcher } from "@/lib/simplifier";
import { Avatar, Button, message, Modal, Radio, Table, TableProps } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface Transaction {
  id: number;
  user_id: number;
  provider_id: number;
  service_id: number;
  transaction_id: string;
  amount: string;
  platform_fee: string;
  date: string | null;
  start_time: string;
  end_time: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    full_name: string;
    image: string;
  };
  service: {
    id: number;
    title: string;
  };
  provider: {
    id: number;
    full_name: string;
  };
}

// 👇 New interface for table data
interface TableData {
  key: number;
  uname: string;
  sname: string;
  price: string;
  status: string;
  action: string;
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<TableData[]>([]);
  const [cookies] = useCookies(["raven"]);

  useEffect(() => {
    async function getData() {
      try {
        const call = await getFetcher({
          link: "/order-list",
          token: cookies.raven,
        });

        if (!call.status) {
          message.error(call.message);
          return;
        }

        const orderdata: Transaction[] = call.data.data;

        const tableFormatted: TableData[] = orderdata.map((item) => ({
          key: item.id,
          uname: item.user.full_name,
          sname: item.service.title,
          price: item.amount,
          status: item.status,
          action: "Change",
        }));

        setData(tableFormatted);
        console.log(tableFormatted);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  };

  const columns: TableProps<TableData>["columns"] = [
    {
      title: "User name",
      dataIndex: "uname",
      key: "uname",
      render: (text) => (
        <div className="gap-2 flex flex-row justify-start items-center">
          <Avatar /> <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Service name",
      dataIndex: "sname",
      key: "sname",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <div className="px-4 py-2 bg-[#FEF2F2] w-min rounded-full">{text}</div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text) => (
        <>
          <Button
            onClick={showModal}
            type="text"
            className="px-4 py-2 !text-black w-min"
          >
            {text}
          </Button>
          <Modal
            title="Change Status"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon={null}
            footer={
              <Button
                size="large"
                onClick={handleOk}
                className="bg-[#7849D4] hover:!bg-[#533392] !text-background w-full !border-none"
              >
                Done
              </Button>
            }
          >
            <div className="p-4">
              <Radio.Group
                style={style}
                options={[
                  { value: 1, label: "Pending" },
                  { value: 2, label: "Completed" },
                  { value: 3, label: "Canceled" },
                ]}
              />
            </div>
          </Modal>
        </>
      ),
    },
  ];

  return (
    <main className="flex flex-col md:h-screen w-full px-4 md:px-8 py-6 overflow-y-auto">
      <DashTitle>
        <Title level={3} className="flex items-center text-2xl">
          List of your order
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="">
        <Table columns={columns} dataSource={data} />
      </div>
    </main>
  );
}
