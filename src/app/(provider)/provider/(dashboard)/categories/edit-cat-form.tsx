"use client";
import type { FormProps } from "antd";
import { Button, Form, Input, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { postFetcher } from "@/lib/simplifier";

type FieldType = {
  category_name?: string;
  sub_categories: string[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EditCatForm({ item }: { item: any }) {
  const [cookies] = useCookies(["raven"]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [subCats, setSubCats] = useState<
    { name: string; icon: string | null }[]
  >(item.sub_categories || []);

  useEffect(() => {
    if (item.subcategories && item.subcategories.length > 0) {
      form.setFieldsValue({
        category_name: item.name,
        sub_categories: item.subcategories.map(
          (sub: { name: string; icon: string | null }) => sub.name
        ),
      });
    } else {
      form.setFieldsValue({
        category_name: item.category_name,
      });
    }
  }, [item, form]);

  const handleChange = (value: string[]) => {
    setSubCats(value.map((v) => ({ name: v, icon: null })));
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    setLoading(true);
    const readyData = {
      category_name: values.category_name,
      sub_categories: subCats,
    };

    try {
      const call = await postFetcher({
        link: `/update-with-subcategory/${item.id}`,
        token: cookies.raven,
        data: readyData,
        meth: "POST",
      });
      if (!call.status) {
        message.error(call.message);
      } else {
        message.success(call.message);
        form.resetFields();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="p-6 px-[7%]">
        <div>
          <Form
            form={form}
            name="editCatg"
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
                // defaultValue={item.sub_categories.map((sub: any) => sub.name)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                loading={loading}
                className="w-full bg-[#7849D4] hover:!bg-[#533392] !text-background border-none"
              >
                {loading ? "Updating..." : "Update"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
