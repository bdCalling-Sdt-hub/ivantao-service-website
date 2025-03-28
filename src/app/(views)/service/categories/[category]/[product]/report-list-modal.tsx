"use client";
import { postFetcher } from "@/lib/simplifier";
import { WarningFilled } from "@ant-design/icons";
import { Button, Modal, Input, Select, Form, FormProps, message } from "antd";
import React, { useState } from "react";

type FieldType = {
  reason?: string;
  description?: string;
};

export default function ReportListModal({
  token,
  servId,
}: {
  token: string;
  servId: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); // Form instance

  const handleSubmit: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      console.log({
        reason: values.reason,
        description: values.description,
        service_id: servId,
      });

      const call = await postFetcher({
        link: "/report",
        meth: "POST",
        token: token,
        data: {
          reason: values.reason,
          description: values.description,
          service_id: servId,
        },
      });
      console.log(call);

      if (!call.status) {
        if (call.error) {
          message.error(call.error);
          return;
        }
        message.error(call.message);
        return;
      }
      message.success(call.message);
    } catch (error) {
      console.error(error);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        className="font-bold !border-red-500 border !text-red-500 hover:!text-red-700"
        onClick={() => setIsModalOpen(true)}
      >
        Report Listing
      </Button>

      <Modal
        title={
          <>
            <div className="text-center">
              <WarningFilled className="mr-2" />
              Report Listing
            </div>
          </>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null} // Remove default footer buttons
      >
        <Form
          form={form}
          onFinish={handleSubmit} // Submit form on finish
          layout="vertical"
        >
          <Form.Item
            label="Reason"
            name="reason"
            rules={[{ required: true, message: "Please select a reason" }]}
          >
            <Select
              placeholder="Select reason"
              options={[
                { label: "Fraud", value: "fraud" },
                { label: "Spreading misinformation", value: "misinformation" },
                { label: "Illegal goods or services", value: "illegal_goods" },
                {
                  label: "Sexually explicit content",
                  value: "sexually_explicit",
                },
                { label: "Promoting violence", value: "violence" },
                { label: "Hate group contains", value: "hate_group" },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Please describe the issue"
            name="description"
            rules={[{ required: true, message: "Please describe the issue" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter details here..." />
          </Form.Item>

          <div className="mt-4">
            <Button
              type="primary"
              danger
              className="w-full !bg-[#7849D4] hover:!bg-[#58379b]"
              htmlType="submit" // Trigger form submission
            >
              Submit Report
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
