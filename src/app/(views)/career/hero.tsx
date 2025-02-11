import { Button, Col, Row, Space } from "antd";

import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="hero-section py-12 pt-[120px]">
      <div className="container mx-auto px-4">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <Title level={3}>Careers at TAWUN</Title>
            <Title className="!m-0 !text-6xl !mb-8">Work with us.</Title>
            <Paragraph className="text-gray-600 text-lg mb-8 pr-12">
              Lorem ipsum dolor sit amet consectetur. At aliquam tristique
              maecenas neque non sit id ultricies vitae. Gravida nec mi maecenas
              dolor gravida hac libero. Quis quis diam sem accumsan est sed
              enim. Tellus molestie commodo feugiat proin non eros. Metus eget
              condimentum nec pellentesque mi turpis nunc.
            </Paragraph>
            <Space>
              <div className="flex flex-col justify-start gap-2">
                <Button
                  className="px-12 py-6 bg-[#88744F] hover:!bg-[#726244] font-semibold"
                  size="large"
                  type="primary"
                >
                  View Careers <ArrowUpRight />
                </Button>
                <Button
                  size="large"
                  className="underline"
                  type="link"
                  variant="link"
                >
                  Looking for Internships?
                </Button>
              </div>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <Image
              src="/images/career/header.jfif"
              alt="Team illustration"
              width={500}
              height={400}
              className="w-full"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
