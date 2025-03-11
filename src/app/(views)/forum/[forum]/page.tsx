"use client";
import React, { useState } from "react";
import PopPosts from "../pop-posts";
import { Avatar, Button, Form, Input, Modal } from "antd";
import { ChevronLeft, ImageIcon, SendIcon } from "lucide-react";
import Title from "antd/es/typography/Title";
import FormItem from "antd/es/form/FormItem";

export default function Page({ params }: { params: { forum: string } }) {
  console.log(params.forum);
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
      <main className="py-12 px-4 md:px-[7%]">
        <Title level={3} className="text-center pb-12">
          <span className="capitalize">{params.forum}</span> Forum
        </Title>
        <section className="flex flex-row justify-start items-center gap-3">
          <Button
            className="!text-black !bg-zinc-200"
            type="primary"
            shape="circle"
          >
            <ChevronLeft />
          </Button>
          <div className="">
            <Avatar size="large" className="!size-9 aspect-square" />
          </div>
          <Input
            size="large"
            className="bg-gray-200 !border-none"
            placeholder="Whats in your mind?"
            readOnly
            onClick={showModal}
          />
          <Modal
            className="!w-[70%] h-auto"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            title={null}
            footer={
              <div className="flex flex-row justify-between items-center">
                <Button type="primary">
                  <ImageIcon className="!size-4" /> Add Image
                </Button>
                <Button
                  type="primary"
                  className="bg-[#F48023] hover:!bg-[#e08b45] "
                >
                  <SendIcon className="!size-4" /> Publish
                </Button>
              </div>
            }
          >
            <div className="pt-12">
              <Form>
                <FormItem>
                  <Input placeholder="Title" />
                </FormItem>
                <FormItem>
                  <Input.TextArea placeholder="Type your comment" rows={12} />
                </FormItem>
              </Form>
            </div>
          </Modal>
          <Button
            onClick={showModal}
            size="large"
            className="bg-[#7849D4] hover:!bg-[#5d39a5] !text-background !border-none"
          >
            Create post
          </Button>
        </section>
        <section>
          <PopPosts notitle />
        </section>
      </main>
    </>
  );
}
