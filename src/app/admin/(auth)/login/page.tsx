"use client";
import Title from "antd/es/typography/Title";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { postFetcher } from "@/lib/simplifier";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

export default function Page() {
  const navig = useRouter();
  const [, setCookies] = useCookies();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);

    try {
      const formattedData = {
        email: values.email,
        meth: "POST",
        password: values.password,
      };
      const call = await postFetcher({
        link: "/auth/login",
        data: formattedData,
      });
      console.log(call);

      if (!call.status) {
        message.error(call.message);
        form.setFields([
          {
            name: "password",
            errors: [call.message],
          },
        ]);
        return;
      }

      setCookies("raven", call.access_token);
      message.success(call.message);
      navig.push("/admin/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main className="h-dvh w-dvw flex flex-row justify-center items-center">
      <div className="w-[80dvh] aspect-square p-8 border-2 rounded-2xl flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <Title level={2} className="mb-2">
            Log in to your account
          </Title>
          <p className="text-center mb-6 text-[#5C5C5C]">
            Please enter your email and password to continue
          </p>
          <Form
            form={form}
            name="admin_login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
            className="w-full"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                size="large"
                placeholder="abidhasan@gmail.com"
                className="bg-[#F0E8FF]"
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="*********"
                className="bg-[#F0E8FF]"
              />
            </Form.Item>

            <div className="flex flex-row justify-between items-center">
              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                className="mb-4"
              >
                <Checkbox className="text-lg">Remember me</Checkbox>
              </Form.Item>
              <Link
                href="/provider/forgot-pass"
                className="text-[#7849D4] font-bold text-base"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="flex flex-row justify-center items-center">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-[#7849D4] px-8 py-6"
                  size="large"
                >
                  Sign in
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}
