"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Modal, Button, Form, DatePicker, Select, Input, message } from "antd";
import type { FormProps } from "antd";
import { getFetcher, postFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import dayjs, { Dayjs } from "dayjs";
import { PencilLineIcon } from "lucide-react";

interface FieldType {
  job_category: string;
  job_role: string;
  address: string;
  description: string;
  job_type: string;
  deadline: Dayjs;
}

const AddJob = ({ id }: { id: string }) => {
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

  useEffect(() => {
    async function getData() {
      try {
        const call = await getFetcher({ link: `/job-details/${id}` });
        if (!call.status) {
          message.error(call.message);
          return;
        }
        form.setFieldsValue({
          job_category: call.data.job_category,
          job_role: call.data.job_role,
          address: call.data.address,
          description: call.data.description,
          job_type: call.data.job_type,
          deadline: dayjs(call.data.deadline),
        });
        // console.log(call);
      } catch (error) {
        message.error(String(error));
      }
    }

    getData();
  }, []);

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
        link: `/update-career/${id}`,
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
      <Button className="border-none bg-blue-100 !p-2" onClick={showModal}>
        <PencilLineIcon className="text-xl text-blue-600" />
      </Button>
      <Modal
        title="Edit Job"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="w-full">
          <Form
            requiredMark={false}
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
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
                Update
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddJob;
