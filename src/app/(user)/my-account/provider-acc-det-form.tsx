"use client";
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import Services from "./services";
import WorkingHrs from "./working-hrs";
import Title from "antd/es/typography/Title";
import { UserType } from "@/types/userType";
import { useEffect, useState } from "react";
import { postFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";

type FieldType = {
  full_name?: string;
  email?: string;
  address?: string;
  about_yourself?: string;
};

export default function ProvAccDetForm({ user }: { user: UserType }) {
  const [waiting, setWaiting] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [cookies] = useCookies(["raven"]);
  useEffect(() => {
    form.setFields([
      {
        name: "full_name",
        value: user.full_name,
      },
      { name: "email", value: user.email },
      { name: "address", value: user.address },
      { name: "about_yourself", value: user.about_yourself },
    ]);

    console.log(user);
  }, []);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setWaiting(true);

    try {
      const readyData = {
        full_name: values.full_name,
        address: values.address,
        about_yourself: values.about_yourself,
      };
      const call = await postFetcher({
        link: "/auth/profile-update",
        meth: "POST",
        data: readyData,
        token: cookies.raven,
      });
      console.log(call);
      if (call.status) {
        message.success(call.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setWaiting(false);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
        className="w-full"
      >
        <Form.Item<FieldType>
          label="Name"
          name="full_name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="large" placeholder="Seint Josef" />
        </Form.Item>

        <Form.Item<FieldType> label="Email" name="email">
          <Input
            size="large"
            placeholder="abidhasan@gmail.com"
            disabled
            readOnly
          />
        </Form.Item>
        <Form.Item<FieldType> label="Address" name="address">
          <Input size="large" placeholder="lorem ipsum dolor sit......" />
        </Form.Item>
        <Form.Item<FieldType> label="About Yourself" name="about_yourself">
          <Input.TextArea
            rows={6}
            size="large"
            placeholder="lorem ipsum dolor sit......"
          />
        </Form.Item>
        <div className="flex flex-row justify-center items-center !py-12 mb-12">
          <Form.Item<FieldType>>
            <Button
              loading={waiting}
              htmlType="submit"
              className="bg-[#7849D4] font-bold px-12 py-6 hover:!bg-[#5a37a0] !text-background !border-none"
              size="large"
            >
              Save changes
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <Title level={4}>Services</Title>
          <div className="rounded-xl p-6 bg-background h-[400px]">
            <Services id={String(user.id)} />
          </div>
        </div>
        <div className="">
          <Title level={4}>Working Hours</Title>
          <div className="rounded-xl p-6 bg-background h-[400px]">
            <WorkingHrs />
          </div>
        </div>
      </div>
    </>
  );
}
