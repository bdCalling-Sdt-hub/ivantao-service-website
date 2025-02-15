import React from "react";
import DashTitle from "@/components/ui/dash-title";
import Title from "antd/es/typography/Title";
import TextEditorToolbar from "@/components/ui/text-editor-toolbar";
import TextArea from "antd/es/input/TextArea";
import { Button } from "antd";
export default function Page() {
  return (
    <div className="flex flex-col h-screen w-full px-8 py-6">
      <DashTitle admin>
        <Title level={3} className="flex items-center text-2xl">
          About us
        </Title>
        <p className="text-gray-400">
          Admin with access to this workspace can promote or demote user
          maintain business insights
        </p>
      </DashTitle>
      <TextEditorToolbar />
      <div className="flex-grow w-full mt-8">
        <TextArea rows={20} />
        <div className="pt-4 flex justify-end items-center">
          <Button
            className="p-4 px-8 bg-[#B7A481] hover:!bg-[#968669] !text-background"
            size="large"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
