"use client";

import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import Title from "antd/es/typography/Title";
import { PencilLineIcon } from "lucide-react";
import React, { useState } from "react";
import TextEditorToolbar from "./text-editor-toolbar";

export default function EditCareer() {
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
  return (
    <>
      <Button className="border-none bg-blue-100 !p-2" onClick={showModal}>
        <PencilLineIcon className="text-xl text-blue-600" />
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div key={109} className="flex justify-center items-center">
            <Button
              className="px-8 py-4 bg-[#B7A481] hover:!bg-[#8a7b60] !text-background"
              size="large"
            >
              Save changes
            </Button>
          </div>,
        ]}
        className="min-w-[90dvw] md:!min-w-[50dvw] !top-[50%] !my-0 -translate-y-1/2"
      >
        <div className="py-6 flex flex-col justify-start items-center">
          <Title level={4} className="!m-0 pt-2">
            Edit job post
          </Title>

          <Form layout="vertical" requiredMark={false} className="w-4/5">
            <Form.Item label="Job role">
              <Input size="large" value="UI-UX Design" />
            </Form.Item>
            <Form.Item label="Category">
              <Input size="large" value="Design" />
            </Form.Item>
            <p>Description</p>
            <TextEditorToolbar short />
            <Form.Item>
              <Input.TextArea
                rows={8}
                size="large"
                placeholder="type here.."
                readOnly
              />
            </Form.Item>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item label="Job Type">
                <Select
                  size="large"
                  defaultValue="fullTime"
                  options={[
                    { value: "fullTime", label: "Full time" },
                    { value: "partTime", label: "Part-time" },
                    { value: "fullTimeOnsite", label: "Full time, on site" },
                    { value: "fullTimeRemote", label: "Full time, Remote" },
                    { value: "partTimeOnsite", label: "Part-time, on site" },
                    { value: "partTimeRemote", label: "Part-time, Remote" },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Deadline">
                <DatePicker className="w-full" size="large" />
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}
