"use client";

import type React from "react";
import { useState } from "react";
import { Modal, Button, Form, DatePicker, Select, Input, message } from "antd";
import type { FormProps } from "antd";
import { postFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { Dayjs } from "dayjs";

interface FieldType {
  job_category: string;
  job_role: string;
  address: string;
  description: string;
  job_type: string;
  deadline: Dayjs;
}

const AddJob: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm<FieldType>();
  const [cookies] = useCookies(["raven"]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleSubmit: FormProps<FieldType>["onFinish"] = async (
    values: FieldType
  ) => {
    try {
      console.log("Form Values:", values);
      const finalData = {
        ...values,
        deadline: values.deadline.format("YYYY-M-D"),
      };

      const call = await postFetcher({
        link: "/create-career",
        token: cookies.raven,
        data: finalData,
      });

      if (!call.status) {
        message.error(call.message);
        return;
      }

      message.success(call.message);

      message.success("Job added successfully!");
    } catch (error) {
      message.error(String(error));
    }
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button
        onClick={showModal}
        className="w-full md:w-[300px] bg-[#7849D4] hover:!bg-[#533392] !border-none !text-background"
        size="large"
      >
        + Add new
      </Button>
      <Modal
        title="Add Job"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="w-full">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Job Category"
              name="job_category"
              rules={[{ required: true, message: "Please enter job category" }]}
            >
              <Input placeholder="Design" />
            </Form.Item>
            <Form.Item
              label="Job Role"
              name="job_role"
              rules={[{ required: true, message: "Please enter job role" }]}
            >
              <Input placeholder="UI UX Design" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter address" }]}
            >
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter description" }]}
            >
              <Input.TextArea placeholder="Type here..." rows={4} />
            </Form.Item>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Job Type"
                name="job_type"
                rules={[{ required: true, message: "Please select job type" }]}
              >
                <Select
                  options={[
                    { label: "Full Time", value: "full_time" },
                    { label: "Part Time", value: "part_time" },
                    { label: "Hybrid", value: "hybrid" },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Deadline"
                name="deadline"
                rules={[{ required: true, message: "Please select deadline" }]}
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Add
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddJob;
