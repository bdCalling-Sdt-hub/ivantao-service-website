/* eslint-disable @typescript-eslint/no-explicit-any */
import { formPostFetcher } from "@/lib/simplifier";
import { EditOutlined, InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Modal,
  Upload,
  Form,
  FormProps,
  UploadFile,
  message,
} from "antd";
import React, { useState } from "react";

const { Dragger } = Upload;
type FieldType = {
  image?: string;
};

export default function ProfPicUpdater({ token }: { token: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList.slice(-1)); // Always keep only the latest file
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    try {
      const formData = new FormData();
      if (fileList.length > 0 && fileList[0].originFileObj) {
        formData.append("image", fileList[0].originFileObj);
      }

      const call = await formPostFetcher({
        link: "/auth/profile-update",
        meth: "POST",
        token,
        data: formData,
      });
      if (!call.status) {
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
        icon={<EditOutlined />}
        onClick={() => setIsModalOpen(true)}
        className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 flex items-center justify-center bg-white border border-gray-200 shadow-sm"
      />
      <Modal
        title={<div className="text-center">Update Profile Picture</div>}
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          name="updateProf"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item name="image" className="mt-12">
            <Dragger
              name="file"
              multiple={false}
              fileList={fileList}
              beforeUpload={() => false} // Prevent auto-upload
              onChange={handleChange}
              showUploadList={true}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">Support for a single upload.</p>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full !bg-[#7849D4] hover:!bg-[#51318f]"
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
