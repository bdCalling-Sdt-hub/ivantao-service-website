"use client";
import React from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import TextEditorToolbar from "@/components/ui/text-editor-toolbar";
import TextArea from "antd/es/input/TextArea";
import { Button, Form, Input } from "antd";
import {
  MailOutlined,
  TeamOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
export default function Page() {
  return (
    <div className="flex flex-col h-screen w-full px-8 py-6 overflow-y-auto">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          Contact Us
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <TextEditorToolbar />
      <div className="flex-grow w-full mt-8">
        <TextArea rows={10} />
      </div>
      <div className="py-8">
        <Form layout="vertical">
          <div className="space-y-8">
            {/* Help & support section */}
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <MailOutlined className="text-3xl text-[#B19470]" />
              </div>
              <h3 className="text-xl font-medium mb-4">Help & support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
                <Form.Item label="Email Address">
                  <Input placeholder="type here..." size="large" />
                </Form.Item>
                <Form.Item label="Email Address">
                  <Input placeholder="type here..." size="large" />
                </Form.Item>
              </div>
            </div>

            {/* Live support section */}
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <TeamOutlined className="text-3xl text-[#B19470]" />
              </div>
              <h3 className="text-xl font-medium mb-4">Live support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
                <Form.Item label="Number">
                  <Input placeholder="type here..." size="large" />
                </Form.Item>
                <Form.Item label="Number">
                  <Input placeholder="type here..." size="large" />
                </Form.Item>
              </div>
            </div>

            {/* Location section */}
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <EnvironmentOutlined className="text-3xl text-[#B19470]" />
              </div>
              <h3 className="text-xl font-medium mb-4">Location</h3>
              <div className="w-full max-w-3xl">
                <Form.Item label="Location">
                  <Input placeholder="type here..." size="large" />
                </Form.Item>
              </div>
            </div>

            {/* Save button */}
            <div className="flex justify-center mt-8">
              <Button
                className="bg-[#B19470] text-white hover:bg-[#9A815E] border-none px-8"
                size="large"
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
