"use client";
import Title from "antd/es/typography/Title";
import type { GetProps } from "antd";
import { Button, Form, Input } from "antd";
import Link from "next/link";

type OTPProps = GetProps<typeof Input.OTP>;

export default function Page() {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const onInput: OTPProps["onInput"] = (value) => {
    console.log("onInput:", value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };
  return (
    <main className="h-dvh w-dvw flex flex-row justify-center items-center">
      <div className="w-[80dvh] aspect-square p-8 border-2 rounded-2xl flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <Title level={2} className="mb-2">
            Verification code
          </Title>
          <p className="text-center mb-6 text-[#5C5C5C] px-[20%]">
            We sent a reset link to contact@dscode...com enter 5 digit code that
            is mentioned in the email
          </p>

          <div className="py-12">
            <Input.OTP length={6} {...sharedProps} />
          </div>

          <div className="flex flex-row justify-center items-center">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#7849D4] px-8 py-6"
                size="large"
              >
                Verify Code
              </Button>
            </Form.Item>
          </div>
          <p>
            You have not received the email?{" "}
            <Link href="#" className="font-semibold text-[#6F5B36]">
              Resend
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
