"use client";

import { EyeFilled } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Modal } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";

export default function ViewModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className="border-none bg-orange-100 !p-2" onClick={showModal}>
        <EyeFilled className="text-xl text-[#F96D10]" />
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="py-6 flex flex-col justify-start items-center ">
          <Avatar className="w-[100px] h-[100px]" />
          <Title level={4} className="!m-0 pt-2">
            Md. Abid
          </Title>

          <Form layout="vertical" requiredMark={false} className="w-4/5">
            <Form.Item label="Service name">
              <Input size="large" value="Cooking" readOnly />
            </Form.Item>

            <Form.Item label="Category">
              <Input size="large" value="In person" readOnly />
            </Form.Item>

            <Form.Item label="Date">
              <Input size="large" value="20-01-2025" readOnly />
            </Form.Item>
            <Form.Item label="Category">
              <Input.TextArea
                className="text-xs"
                size="large"
                value="Lorem ipsum dolor sit amet consectetur. Ultrices mi morbi pulvinar at in pretium orci ipsum id. Sed nunc varius lobortis morbi tortor egestas. A mauris in pellentesque commodo quis tincidunt aenean. Aliquet commodo amet morbi massa nullam sed non laoreet tempor. Sit sapien a risus laoreet blandit nullam lectus sem sem. Tortor ut quis in dui tempus diam eros at. Purus euismod pretium eu pharetra vitae tortor amet id mauris. Ut sit lectus in nullam non arcu velit lectus. Senectus amet dui aenean aliquam facilisis ut."
                rows={8}
                readOnly
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
}
