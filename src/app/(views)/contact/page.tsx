import PageHeader from "@/components/shared/page-head";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import React from "react";
import ContactForm from "./contact-form";

export default function Page() {
  const contactCards = [
    {
      icon: <MailOutlined />,
      title: "Help & support",
      detail: ["tawunsupport@gmail.com", "tawunsj434port@gmail.com"],
    },
    {
      icon: <EnvironmentOutlined />, // Changed icon to EnvironmentOutlined
      title: "Location",
      detail: ["121 King street Melbourne,", "3000, Australia"],
    },
    {
      icon: <PhoneOutlined />, // Changed icon to PhoneOutlined
      title: "Live support",
      detail: ["+123 456 543 324656", "+123 456 543 324453"],
    },
  ];
  return (
    <main className="py-12 px-[7%]">
      <PageHeader
        img="/images/about/contact.jpg"
        title="Get in touch with us"
        para="Lorem ipsum dolor sit amet consectetur. Vulputate orci elementum mauris pellentesque semper non imperdiet in. Auctor blandit ut id turpis libero ultricies diam. Et mauris tortor ultrices in at tristique at donec eu. Condimentum blandit sagittis amet lorem sollicitudin sollicitudin morbi. Amet vulputate neque porta etiam lobortis turpis convallis elit. Ornare est malesuada elit scelerisque pellentesque vestibulum arcu elementum. Nisi a facilisi venenatis"
      />
      <section className="py-12">
        <Title className="text-center">We have a support team</Title>
        <div className="py-8 flex flex-row justify-center items-center gap-6">
          {contactCards.map((item, index) => (
            <div key={index} className="shadow-md p-8 rounded-xl bg-background">
              <div className="p-6 flex justify-center items-center text-3xl text-[#A28E69]">
                {item.icon}
              </div>
              <Title className="text-center" level={4}>
                {item.title}
              </Title>
              <div className="text-sm text-gray-500 text-center">
                {item.detail.map((item) => (
                  <p key={item.trim().toLocaleLowerCase()}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12">
        <Title className="text-center">Contact with us for any enquiry</Title>
        <div className="py-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
