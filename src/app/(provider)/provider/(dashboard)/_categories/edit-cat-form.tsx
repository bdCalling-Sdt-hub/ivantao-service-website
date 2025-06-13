/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import type { FormProps, UploadFile } from "antd";
import { Button, Form, Input, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { formPostFetcher } from "@/lib/simplifier";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";

type FieldType = {
  icon?: string;
  category_name?: string;
  sub_categories: string[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EditCatForm({ item }: { item: any }) {
  const [cookies] = useCookies(["raven"]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [subCats, setSubCats] = useState<
    { name: string; image: string | null }[]
  >(item.sub_categories || []);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (item.subcategories && item.subcategories.length > 0) {
      form.setFieldsValue({
        category_name: item.name,
        sub_categories: item.subcategories.map(
          (sub: { name: string; image: string | null }) => sub.name
        ),
      });
    } else {
      form.setFieldsValue({
        category_name: item.category_name,
      });
    }
  }, [item, form]);

  const handleChange = (value: string[]) => {
    setSubCats(value.map((v) => ({ name: v, image: null })));
  };
  const handleImgChange = ({ fileList }: { fileList: any }) => {
    setFileList(fileList);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async () => {
    const values = await form.validateFields();
    const formData = new FormData();
    console.log("Success:", values);
    setLoading(true);

    // const readyData = {
    //   category_name: values.category_name,
    //   sub_categories: subCats,
    // };
    if (fileList.length > 0 && fileList[0].originFileObj) {
      formData.append("icon", fileList[0].originFileObj);
    }
    if (!subCats) {
      message.error("At least one sub category is required");
      return;
    }
    formData.append("category_name", values.category_name);
    subCats.forEach((subed, index) => {
      formData.append(`sub_categories[${index}][name]`, subed.name);
      formData.append(
        `sub_categories[${index}][image]`,
        subed.image ? subed.image : ""
      );
    });

    // formData.append("sub_categories", subCats);

    try {
      const call = await formPostFetcher({
        link: `/update-with-subcategory/${item.id}`,
        token: cookies.raven,
        data: formData,
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
              label="Icon URL"
              name="icon"
              rules={[
                { required: true, message: "Please enter the image URL" },
              ]}
            >
              <Dragger
                multiple={false}
                fileList={fileList}
                beforeUpload={() => false}
                onChange={handleImgChange}
                showUploadList={true}
                className="bg-transparent"
              >
                <p className="ant-upload-drag-icon !text-[#7849D4]">
                  <InboxOutlined className="" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </Form.Item>
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
