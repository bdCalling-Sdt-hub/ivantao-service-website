"use client";

import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Upload, message } from "antd";
import Input from "antd/es/input";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import BackText from "@/components/ui/back-text";
import type { UploadFile } from "antd/es/upload/interface";
import { formPostFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

interface FormValues {
  name: string;
  email: string;
  cover_letter?: string;
  document?: File;
}

export default function Page({ params }: { params: { detail: string } }) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [cookies] = useCookies(["raven"]);
  const navig = useRouter();
  const [waiting, setWaiting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (info: any) => {
    const { file, fileList: newFileList } = info;

    // Check file size (10MB limit)
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error("File must be smaller than 10MB!");
      return false;
    }

    // Update file list state
    setFileList(newFileList);
    return false;
  };

  const onFinish = async (values: FormValues) => {
    setWaiting(true);
    setErrorMessage("");

    // Create FormData instance
    const formData = new FormData();

    // Append form data fields
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("cover_letter", values.cover_letter || "");
    formData.append("career_id", params.detail);

    // Check if the file is available and append it to FormData
    if (fileList.length > 0 && fileList[0].originFileObj) {
      console.log("Appending file:", fileList[0].originFileObj); // Debugging the actual file
      formData.append("document", fileList[0].originFileObj);
    } else {
      message.error("Please upload a file.");
      setWaiting(false);
      return;
    }

    try {
      const call = await formPostFetcher({
        link: "/apply-form",
        meth: "POST",
        token: cookies.raven,
        data: formData,
      });

      if (!call.status) {
        // Handle error object properly
        if (typeof call.message === "string") {
          message.error(call.message);
        } else if (call.message && typeof call.message === "object") {
          // If message is an object, format it for display
          const errorMessages = Object.entries(call.message)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ");
          setErrorMessage(errorMessages);
          message.error("Validation error. Please check the form.");
        } else {
          message.error("An unknown error occurred");
        }
        setWaiting(false);
        return;
      }

      message.success(
        typeof call.message === "string"
          ? call.message
          : "Application submitted successfully"
      );
      navig.push("/career");
    } catch (error) {
      console.error("Error during submission:", error);
      message.error("Failed to submit application");
    } finally {
      setWaiting(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main className="py-12 px-[7%]">
      <BackText text={"Back"} />
      <section>
        <Title className="text-center" level={3}>
          Applying for UI-UX Designer
        </Title>
        <div className="px-[5%] md:px-[20%] lg:px-[30%]">
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">
              {errorMessage}
            </div>
          )}
          <Form
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item<FormValues>
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input size="large" placeholder="Abid Hasan" />
            </Form.Item>
            <Form.Item<FormValues>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input size="large" placeholder="example@gmail.com" />
            </Form.Item>
            <Form.Item<FormValues> label="Cover Letter" name="cover_letter">
              <Input.TextArea size="large" rows={8} placeholder="Type here" />
            </Form.Item>
            <Form.Item label="Upload your resume">
              <Upload.Dragger
                name="document"
                fileList={fileList}
                multiple={false}
                beforeUpload={() => false} // Prevent auto upload
                onChange={handleFileChange}
                accept=".pdf,application/pdf"
                maxCount={1}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined className="!text-[#7849D4]" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">Max 10 MB</p>
              </Upload.Dragger>
            </Form.Item>
            <Form.Item>
              <Button
                loading={waiting}
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full mt-8 text-background !bg-[#7849D4] hover:!bg-[#5d39a5] font-bold"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </main>
  );
}
