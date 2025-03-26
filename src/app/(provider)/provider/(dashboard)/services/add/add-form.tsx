"use client";
import { formPostFetcher, getFetcher } from "@/lib/simplifier";
import { Category, Subcategory } from "@/types/Services";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, message, Select, UploadFile } from "antd";
import Input from "antd/es/input";
import Dragger from "antd/es/upload/Dragger";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type FieldType = {
  category?: string;
  subCategory?: string;
  img?: string;
  title?: string;
  service_type?: string;
  description?: string;
  price?: string;
};

export default function AddForm() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Subcategory[]>([]);
  // const [selectedSubCategory, setSelectedSubCategory] = useState<string>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = Form.useForm();
  const [cookies] = useCookies(["raven"]);
  const navig = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = ({ fileList }: { fileList: any }) =>
    setFileList(fileList);
  useEffect(() => {
    async function getData() {
      const call = await getFetcher({
        link: "/get-all-category",
        token: cookies.raven,
      });
      setCategories(call.data.data);
    }
    getData();
  }, []);

  const handleCategoryChange = (value: string) => {
    const selectedCategory = categories.find(
      (cat) => cat.id.toString() === value
    );
    setSubCategories(selectedCategory?.subcategories || []);
  };
  const handleSubCategoryChange = (value: string) => {
    console.log("Selected subcategory:", value);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async () => {
    const values = await form.validateFields();
    const formData = new FormData();
    formData.append("service_category_id", values.category);
    formData.append("service_sub_categories_id", values.subCategory);
    if (fileList.length > 0 && fileList[0].originFileObj) {
      formData.append("image", fileList[0].originFileObj);
    }
    formData.append("service_type", values.service_type);
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("price", values.price);

    console.log("Form Data:", Object.fromEntries(formData.entries()));

    // console.log("Success:", values);

    try {
      const call = await formPostFetcher({
        link: "/create-service",
        data: formData,
        token: cookies.raven,
        meth: "POST",
      });
      if (!call.status) {
        message.error(call.message);
        return;
      }
      message.success(call.message);
      form.resetFields();
      navig.push("/provider/services");
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
    <Form
      form={form}
      name="add-item"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <Form.Item<FieldType>
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please enter the category" }]}
      >
        <Select
          placeholder="Select your product category"
          size="large"
          onChange={handleCategoryChange}
          options={categories.map((cat) => ({
            value: cat.id.toString(),
            label: cat.name,
          }))}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Sub Category"
        name="subCategory"
        rules={[{ required: true, message: "Please enter the sub category" }]}
      >
        <Select
          placeholder="Select your product sub category"
          size="large"
          onChange={handleSubCategoryChange}
          options={subCategories.map((sub) => ({
            value: sub.id.toString(),
            label: sub.name,
          }))}
        />
      </Form.Item>

      <div className="p-6 bg-background rounded-xl">
        <Form.Item<FieldType>
          label="Image URL"
          name="img"
          rules={[{ required: true, message: "Please enter the image URL" }]}
        >
          <Dragger
            multiple={false}
            fileList={fileList}
            beforeUpload={() => false}
            onChange={handleChange}
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
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input size="large" placeholder="Title" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Service Type"
          name="service_type"
          rules={[{ required: true, message: "Please enter the service type" }]}
        >
          <Select
            placeholder="Select Service Type"
            size="large"
            options={[
              {
                value: "in-person",
                label: "In person",
              },
              {
                value: "virtual",
                label: "Virtual",
              },
              {
                value: "both",
                label: "Both",
              },
            ]}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea
            size="large"
            placeholder="Description"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter the price" }]}
        >
          <Input type="number" size="large" placeholder="Price" />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full mt-8 bg-[#7849D4] text-background font-bold hover:!bg-[#5d38a7]"
            variant="filled"
          >
            Add Item
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
