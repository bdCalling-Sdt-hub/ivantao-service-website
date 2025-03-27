"use client";
import Title from "antd/es/typography/Title";
import type { FormProps } from "antd";
import { Form, Input } from "antd";

import React from "react";
import { CreditCard, IdCard } from "lucide-react";
import CongModal from "./cong-modal";

type FieldType = {
  card_num?: string;
  exp?: string;
  ccv?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function PaymentForm() {
  return (
    <>
      <Title level={4}>Card information:</Title>
      <div className="">
        <Form
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
            label="Card number"
            name="card_num"
            rules={[
              { required: true, message: "Please Input Your Card Number" },
            ]}
          >
            <Input
              size="large"
              placeholder="123 456 798"
              type="number"
              suffix={[
                <div
                  key={123}
                  className="space-x-1 flex flex-row justify-center items-center"
                >
                  <IdCard />
                  <CreditCard />
                </div>,
              ]}
            />
          </Form.Item>

          <div className="grid grid-cols-2 gap-6">
            <Form.Item<FieldType>
              label="Expiration date"
              name="exp"
              rules={[
                { required: true, message: "Please Input Expiration Date" },
              ]}
            >
              <Input size="large" placeholder="MM/YY" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Security code"
              name="ccv"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input size="large" placeholder="CCV" />
            </Form.Item>
          </div>

          <div className="">
            <Form.Item>
              <CongModal />
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
}
