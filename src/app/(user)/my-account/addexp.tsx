"use client";
import { postFetcher } from "@/lib/simplifier";
import type { DatePickerProps, FormProps } from "antd";
import { Button, DatePicker, Form, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { useCookies } from "react-cookie";
type FieldType = {
  company_name?: string;
  job_role?: string;
  description?: string;
  join_date?: string;
  resign_date?: string;
};

export default function Addexp() {
  const [form] = Form.useForm();
  const [cookies] = useCookies(["raven"]);
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const formattedValues = {
      ...values,
      join_date: values.join_date
        ? values.join_date.format("YYYY-MM-DD")
        : undefined,
      resign_date: values.resign_date
        ? values.resign_date.format("YYYY-MM-DD")
        : null,
    };
    // console.log("Success:", formattedValues);

    try {
      const call = await postFetcher({
        link: "/add-experience",
        meth: "POST",
        data: formattedValues,
        token: cookies.raven,
      });

      if (!call.status) {
        message.error(call.message);
        return;
      }
      message.success(call.message);
      form.resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log("date: ", dateString);
  };

  return (
    <>
      <div className="p-6 px-[7%]">
        <Title level={4} className="text-center">
          Add your experience
        </Title>
        <div className="">
          <Form
            form={form}
            name="add_exp"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
            className="w-full"
          >
            <Form.Item<FieldType>
              label="Company name"
              name="company_name"
              rules={[
                { required: true, message: "Please input your Company name" },
              ]}
            >
              <Input size="large" className="bg-[#F0E8FF]" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please tell us about your job" },
              ]}
            >
              <Input.TextArea
                size="large"
                className="!resize-none bg-[#F0E8FF]"
                rows={4}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Your role"
              name="job_role"
              rules={[
                { required: true, message: "Please tell us about your role" },
              ]}
            >
              <Input size="large" className="bg-[#F0E8FF]" />
            </Form.Item>
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-2 sm:gap-4">
              <Form.Item<FieldType>
                label="Joining Date"
                name="join_date"
                rules={[
                  {
                    required: true,
                    message: "Please tell us about your joining date",
                  },
                ]}
              >
                <DatePicker
                  format={"YYYY-MM-DD"}
                  onChange={onChange}
                  size="large"
                  className="w-full"
                />
              </Form.Item>
              <Form.Item<FieldType>
                label="Resign Date"
                name="resign_date"
                getValueProps={(value) => ({
                  value,
                  format: "YYYY-MM-DD",
                })}
              >
                <DatePicker
                  format={"YYYY-MM-DD"}
                  onChange={onChange}
                  size="large"
                  className="w-full"
                />
              </Form.Item>
              <div
                key={10}
                className="w-full col-span-2 h-auto flex flex-row justify-center items-center"
              >
                <Button
                  htmlType="submit"
                  size="large"
                  className="w-full bg-[#7849D4] hover:!bg-[#4f2f8f] !text-background border-none"
                >
                  Save
                </Button>
              </div>
              ,
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
