"use client";
import { postFetcher } from "@/lib/simplifier";
import type { FormProps } from "antd";
import { Button, Form, Input, message, Select } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useCookies } from "react-cookie";

type FieldType = {
  category_name?: string;
  sub_categories: string[];
};

export default function AddCatForm() {
  const [form] = Form.useForm();
  const [cookeis] = useCookies(["raven"]);
  const [subCats, setSubCats] = useState<
    { name: string; icon: string | null }[]
  >([]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);

    const readyData = {
      category_name: values.category_name,
      sub_categories: subCats,
    };

    try {
      const call = await postFetcher({
        link: "/create-with-subcategory",
        token: cookeis.raven,
        data: readyData,
        meth: "POST",
      });
      if (!call.status) {
        message.error(call.message);
      }
      message.success(call.message);
      form.resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value: string[]) => {
    console.log("Selected Sub Categories:", value);
    setSubCats(value.map((v) => ({ name: v, icon: null })));
    //here the {name:"",icon:null}[] will go
    console.log(subCats);
  };

  return (
    <>
      <div className="p-6 px-[7%]">
        <Title level={4} className="text-center">
          Add New Category
        </Title>
        <div>
          <Form
            form={form}
            name="addCategory"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
            className="w-full"
          >
            <Form.Item<FieldType>
              label="Category Name"
              name="category_name"
              rules={[
                { required: true, message: "Please enter category name!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Sub Categories"
              name="sub_categories"
              rules={[
                {
                  required: true,
                  message: "Please enter at least one sub-category!",
                },
              ]}
            >
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Enter sub-categories"
                onChange={handleChange}
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                className="w-full bg-[#7849D4] hover:!bg-[#533392] !text-background border-none"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
