"use client";
import React, { useState } from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import { Button, Form, Input, Modal, Select, Table, TableProps } from "antd";
import { Paperclip, Search } from "lucide-react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  interface DataType {
    key: number;
    srno: number;
    name: string;
    email: string;
    action: string;
  }
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Sr. no",
      dataIndex: "srno", // Assuming you'll have a serial number in your data
      key: "srno",
    },
    {
      title: "Applicants name",
      dataIndex: "name", // Keep the 'name' dataIndex
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email", // Assuming you'll have an 'email' field in your data
      key: "email",
    },
    {
      title: "Action",
      key: "action", // No dataIndex needed for action buttons/links
      render: (_, record) => (
        <>
          <Button
            onClick={showModal}
            type="link"
            variant="link"
            className="text-[#7849D4] underline"
          >
            {record.action}
          </Button>
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <div className="py-6 flex flex-col justify-start items-center ">
              <Title level={4} className="!m-0 pt-2">
                Applicants details
              </Title>

              <Form layout="vertical" requiredMark={false} className="w-4/5">
                <Form.Item label="Aplicant name">
                  <Input size="large" value="Md. Abid Hasan" readOnly />
                </Form.Item>

                <Form.Item label="Email">
                  <Input size="large" value="example@gmail.com" readOnly />
                </Form.Item>

                <Form.Item label="Cover Letter">
                  <Input.TextArea
                    className="text-xs"
                    size="large"
                    value="Lorem ipsum dolor sit amet consectetur. Ultrices mi morbi pulvinar at in pretium orci ipsum id. Sed nunc varius lobortis morbi tortor egestas. A mauris in pellentesque commodo quis tincidunt aenean. Aliquet commodo amet morbi massa nullam sed non laoreet tempor. Sit sapien a risus laoreet blandit nullam lectus sem sem. Tortor ut quis in dui tempus diam eros at. Purus euismod pretium eu pharetra vitae tortor amet id mauris. Ut sit lectus in nullam non arcu velit lectus. Senectus amet dui aenean aliquam facilisis ut."
                    rows={10}
                    readOnly
                  />
                </Form.Item>
                <Form.Item label="Resume/CV">
                  <div className="flex flex-row justify-start items-center py-2 px-2 border rounded-lg cursor-pointer">
                    <Paperclip size={16} className="mr-2" />
                    <span className="text-blue-500 hover:text-blue-700">
                      abid cv.pdf
                    </span>
                  </div>
                </Form.Item>
                <div className="grid grid-cols-2 w-full py-2 gap-6">
                  <Button
                    type="primary"
                    variant="solid"
                    color="danger"
                    size="large"
                    onClick={handleCancel}
                  >
                    Reject
                  </Button>
                  <Button
                    type="primary"
                    variant="solid"
                    color="green"
                    size="large"
                    onClick={handleOk}
                  >
                    Approve
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
        </>
      ),
    },
  ];
  const data = [
    {
      key: 1,
      srno: 1,
      name: "Md.Abid Hasan",
      email: "example@gmail.com",
      action: "See applicant",
    },
    {
      key: 2,
      srno: 2,
      name: "Md.Abid Hasan",
      email: "example@gmail.com",
      action: "See applicant",
    },
    {
      key: 3,
      srno: 3,
      name: "Md.Abid Hasan",
      email: "example@gmail.com",
      action: "See applicant",
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
        <Table columns={columns} dataSource={data} />
      </div>
    </main>
  );
}
