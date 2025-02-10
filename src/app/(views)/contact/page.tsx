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
      icon: <EnvironmentOutlined />,
      title: "Location",
      detail: ["121 King street Melbourne,", "3000, Australia"],
    },
    {
      icon: <PhoneOutlined />,
      title: "Live support",
      detail: ["+123 456 543 324656", "+123 456 543 324453"],
    },
  ];

  return (
    <main className="py-12 px-4 md:px-[7%]">
      {" "}
      {/* Added responsive padding */}
      <PageHeader
        img="/images/about/contact.jpg"
        title="Get in touch with us"
        para="Lorem ipsum dolor sit amet consectetur. Vulputate orci elementum mauris pellentesque semper non imperdiet in. Auctor blandit ut id turpis libero ultricies diam. Et mauris tortor ultrices in at tristique at donec eu. Condimentum blandit sagittis amet lorem sollicitudin sollicitudin morbi. Amet vulputate neque porta etiam lobortis turpis convallis elit. Ornare est malesuada elit scelerisque pellentesque vestibulum arcu elementum. Nisi a facilisi venenatis"
      />
      <section className="py-12">
        <Title level={2} className="text-center text-lg md:text-2xl">
          {" "}
          {/* Added responsive title size */}
          We have a support team
        </Title>
        <div className="py-8 flex flex-col md:flex-row justify-center items-center gap-6">
          {" "}
          {/* Changed to column on smaller screens */}
          {contactCards.map((item, index) => (
            <div
              key={index}
              className="shadow-md p-6 md:p-8 rounded-xl bg-background w-full md:w-auto" // Added width responsiveness
            >
              <div className="p-4 flex justify-center items-center text-2xl md:text-3xl text-[#A28E69]">
                {" "}
                {/* Added responsive icon size */}
                {item.icon}
              </div>
              <Title level={4} className="text-center text-base md:text-xl">
                {" "}
                {/* Added responsive title size */}
                {item.title}
              </Title>
              <div className="text-sm text-gray-500 text-center">
                {item.detail.map((detailItem) => (
                  <p key={detailItem.trim().toLocaleLowerCase()}>
                    {detailItem}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12">
        <Title level={2} className="text-center text-lg md:text-2xl">
          {" "}
          {/* Added responsive title size */}
          Contact with us for any enquiry
        </Title>
        <div className="py-8 px-4 md:px-0">
          {" "}
          {/* Added responsive padding */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
