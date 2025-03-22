import { postFetcher } from "@/lib/simplifier";
import { experienceType } from "@/types/others";
import type { DatePickerProps, FormProps } from "antd";
import { Button, DatePicker, Form, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect } from "react";
import dayjs from "dayjs";

type FieldType = {
  company_name?: string;
  job_role?: string;
  description?: string;
  join_date?: string;
  resign_date?: string;
};

export default function EditExp({
  id,
  token,
  item,
}: {
  id: string;
  token: string;
  item: experienceType;
}) {
  useEffect(() => {
    const joining_date_retr = dayjs(item.join_date);
    const resign_data_retr = dayjs(item.resign_date);
    console.log(resign_data_retr);

    const res_day = resign_data_retr.day();

    // Manually set the form fields
    form.setFields([
      {
        name: "company_name",
        value: item.company_name,
      },
      {
        name: "job_role",
        value: item.job_role,
      },
      {
        name: "description",
        value: item.description,
      },
      {
        name: "join_date",
        value: joining_date_retr,
      },
      {
        name: "resign_date",
        value: isNaN(res_day) ? null : res_day,
      },
    ]);
  }, [item]);

  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    const formattedValues = {
      ...values,
      join_date: values.join_date
        ? values.join_date.format("YYYY-MM-DD")
        : undefined,
      resign_date: values.resign_date
        ? values.resign_date.format("YYYY-MM-DD")
        : null,
    };
    try {
      const call = await postFetcher({
        link: `/update-experience/${id}`,
        token: token,
        data: formattedValues,
        meth: "POST",
      });
      if (!call.status) {
        message.error(call.message);
        return;
      }
      message.success(call.message);
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
    console.log(date, dateString);
  };

  return (
    <div className="p-6 px-[7%]">
      <Title level={4} className="text-center">
        Edit your experience
      </Title>
      <div className="">
        <Form
          form={form}
          name="edit_exp"
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
              { required: true, message: "Please input your company name!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input your job description!" },
            ]}
          >
            <Input.TextArea size="large" className="!resize-none" rows={4} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Your role"
            name="job_role"
            rules={[{ required: true, message: "Please input your role!" }]}
          >
            <Input size="large" />
          </Form.Item>

          <div className="grid grid-cols-1 sm:grid-cols-2 grid-2 sm:gap-4">
            <Form.Item<FieldType>
              label="Joining Date"
              name="join_date"
              rules={[
                { required: true, message: "Please input your joining date!" },
              ]}
            >
              <DatePicker onChange={onChange} size="large" className="w-full" />
            </Form.Item>

            <Form.Item<FieldType> label="Resign Date" name="resign_date">
              <DatePicker onChange={onChange} size="large" className="w-full" />
            </Form.Item>

            <div
              key={10}
              className="w-full col-span-2 h-auto flex flex-row justify-center items-center"
            >
              <Button
                htmlType="submit"
                size="large"
                className="w-full !bg-[#7849D4] hover:bg-[#50308f] !text-background border-none"
              >
                Save
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
