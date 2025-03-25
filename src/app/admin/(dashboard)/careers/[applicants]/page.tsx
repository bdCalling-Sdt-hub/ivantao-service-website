"use client";
import React, { useEffect, useState } from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
  Table,
  TableProps,
} from "antd";
import { Paperclip, Search } from "lucide-react";
import { getFetcher, postFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";

interface JobApplication {
  id: number;
  career_id: number;
  name: string;
  email: string;
  cover_letter: string;
  document: string;
  application_status: "pending" | "approve" | "reject";
  created_at: string;
  updated_at: string;
}

export default function Page({ params }: { params: { applicants: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<JobApplication[] | null>(null);
  const [cookies] = useCookies(["raven"]);
  const [selectedRecord, setSelectedRecord] = useState<JobApplication | null>(
    null
  ); // Store the selected row's data

  useEffect(() => {
    async function getApplies() {
      const call = await getFetcher({
        link: `/list-applied-user/${params.applicants}`,
        token: cookies.raven,
      });
      setData(call.data.data);
    }

    getApplies();
  });

  const showModal = (record: JobApplication) => {
    setSelectedRecord(record); // Set the selected record
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setSelectedRecord(null); // Clear selected record when closing
  };

  const handleCancel = async () => {
    setIsModalOpen(false);
    setSelectedRecord(null); // Clear selected record when closing
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const columns: TableProps<JobApplication>["columns"] = [
    {
      title: "Sr. no",
      dataIndex: "id",
      key: "srno",
    },
    {
      title: "Applicants name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <>
          <Button
            onClick={() => showModal(record)} // Pass the record to showModal
            type="link"
            variant="link"
            className="text-[#7849D4] underline text-sm font-semibold"
          >
            See details
          </Button>
        </>
      ),
    },
  ];

  return (
    <main className="flex flex-col h-screen w-full px-8 py-8">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Appplicants
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <div className="py-2 flex flex-row justify-between items-center">
        <Input
          suffix={
            <Search className="text-xl text-gray-400 hover:text-gray-500 cursor-pointer transition-colors" />
          }
          className="w-1/3 !border-none"
          size="large"
          placeholder="Search Provider"
        />
        <Select
          placeholder="Sort by"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "newest", label: "Name" },
            { value: "name", label: "Email" },
            { value: "in_person", label: "User ID " },
          ]}
          className="!bg-transparent !border-black"
        />
      </div>
      <div className="flex-grow w-full overflow-y-auto">
        {data ? <Table columns={columns} dataSource={data} /> : ""}
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedRecord && (
          <div className="py-6 flex flex-col justify-center items-center records-center ">
            <Title level={4} className="!m-0 pt-2">
              Applicants details
            </Title>

            <Form layout="vertical" requiredMark={false} className="w-4/5">
              <Form.Item label="Aplicant name">
                <Input size="large" value={selectedRecord.name} readOnly />
              </Form.Item>

              <Form.Item label="Email">
                <Input size="large" value={selectedRecord.email} readOnly />
              </Form.Item>

              <Form.Item label="Cover Letter">
                <Input.TextArea
                  className="text-xs"
                  size="large"
                  value={selectedRecord.cover_letter}
                  rows={10}
                  readOnly
                />
              </Form.Item>
              <Form.Item label="Resume/CV">
                <a
                  className="flex flex-row justify-start items-center py-2 px-2 border rounded-lg cursor-pointer"
                  href={selectedRecord.document}
                >
                  <Paperclip size={16} className="mr-2" />
                  <span className="text-blue-500 hover:text-blue-700">
                    Attached CV
                  </span>
                </a>
              </Form.Item>
              {selectedRecord.application_status === "pending" ? (
                <div className="grid grid-cols-2 w-full py-2 gap-6">
                  <Button
                    type="primary"
                    variant="solid"
                    color="danger"
                    size="large"
                    onClick={async () => {
                      try {
                        const call = await postFetcher({
                          link: `/application-status/${selectedRecord.id}`,
                          token: cookies.raven,
                          meth: "POST",
                          data: { application_status: "reject" },
                        });
                        if (!call.status) {
                          message.error(call.message);
                        }
                        message.success(call.message);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    Reject
                  </Button>
                  <Button
                    type="primary"
                    variant="solid"
                    color="green"
                    size="large"
                    onClick={async () => {
                      try {
                        const call = await postFetcher({
                          link: `/application-status/${selectedRecord.id}`,
                          token: cookies.raven,
                          meth: "POST",
                          data: { application_status: "approve" },
                        });
                        if (!call.status) {
                          message.error(call.message);
                        }
                        message.success(call.message);
                      } catch (err) {
                        console.error(err);
                      }

                      handleOk();
                    }}
                  >
                    Approve
                  </Button>
                </div>
              ) : (
                <div
                  className={`capitalize w-full border rounded-lg p-3 text-center font-semibold ${
                    selectedRecord.application_status === "approve"
                      ? "border-green-500"
                      : selectedRecord.application_status === "reject"
                      ? "border-red-500"
                      : selectedRecord.application_status === "pending"
                      ? "border-yellow-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedRecord.application_status}
                  {selectedRecord.application_status === "approve"
                    ? "d"
                    : selectedRecord.application_status === "reject"
                    ? "ed"
                    : ""}
                </div>
              )}
            </Form>
          </div>
        )}
      </Modal>
    </main>
  );
}
