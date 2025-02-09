/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import {
  Layout,
  Button,
  Input,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Divider,
  theme,
} from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const { Header, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function Page() {
  const { token } = theme.useToken();

  return (
    <Layout>
      <Content>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container mx-auto px-4">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={12}>
                <Title level={1}>Work with us.</Title>
                <Paragraph className="text-gray-600 text-lg mb-8">
                  Lorem ipsum dolor sit amet consectetur. At aliquam tristique
                  maecenas neque non sit id ultrices vitae. Gravida nec mi
                  maecenas dolor gravida.
                </Paragraph>
                <Space>
                  <Button type="primary" size="large">
                    View Careers
                  </Button>
                  <Button size="large">Looking for Internships?</Button>
                </Space>
              </Col>
              <Col xs={24} md={12}>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Team illustration"
                  width={500}
                  height={400}
                  className="w-full"
                />
              </Col>
            </Row>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Title level={2}>TAWUN is where the future works</Title>
              <Paragraph className="text-gray-600 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. At aliquam tristique
                maecenas neque non sit id ultrices vitae.
              </Paragraph>
            </div>
            <Row gutter={[32, 32]}>
              {["Connected", "Inclusive", "Flexible"].map((title) => (
                <Col xs={24} md={8} key={title}>
                  <Card className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt={title}
                        width={32}
                        height={32}
                      />
                    </div>
                    <Title level={3}>{title}</Title>
                    <Paragraph className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur. At aliquam
                      tristique maecenas.
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Title level={2} className="text-white">
                Our core values
              </Title>
              <Paragraph className="text-white/80 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. At aliquam tristique
                maecenas neque.
              </Paragraph>
            </div>
            <Row gutter={[32, 32]}>
              {[
                { title: "Honesty", icon: "Users" },
                { title: "Responsibility", icon: "Shield" },
                { title: "Kindness", icon: "Heart" },
              ].map((value) => (
                <Col xs={24} md={8} key={value.title} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt={value.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <Title level={3} className="text-white">
                    {value.title}
                  </Title>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Row gutter={[32, 32]}>
              {["Rising Tides", "Employee resource groups", "Rising Tides"].map(
                (title, i) => (
                  <Col xs={24} md={8} key={i}>
                    <Card>
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt={title}
                        width={48}
                        height={48}
                        className="mb-4"
                      />
                      <Title level={3}>{title}</Title>
                      <Paragraph className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur. Nisi eget
                        pellentesque condimentum vel sed quis mattis viverra.
                      </Paragraph>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Row justify="space-between" align="middle" className="mb-8">
              <Col>
                <Title level={2} className="mb-0">
                  Career opportunities
                </Title>
              </Col>
              <Col>
                <Text type="secondary">3 open positions</Text>
              </Col>
            </Row>
            <Paragraph className="text-gray-600 mb-8">
              Explore our open roles for working totally remotely, from the
              office or somewhere in between.
            </Paragraph>
            <Space direction="vertical" className="w-full">
              {[
                {
                  role: "UI/UX Designer",
                  location: "Bangalore, Dhaka",
                  category: "Design",
                },
                {
                  role: "Graphic Designer",
                  location: "Bangalore, Dhaka",
                  category: "Design",
                },
                {
                  role: "React native developer",
                  location: "Bangalore, Dhaka",
                  category: "Development",
                },
              ].map((job, i) => (
                <Card key={i}>
                  <Row justify="space-between" align="middle">
                    <Col>
                      <Text type="secondary">{job.category}</Text>
                      <Title level={4} className="mb-0">
                        {job.role}
                      </Title>
                      <Text type="secondary">{job.location}</Text>
                    </Col>
                    <Col>
                      <Button type="primary">Apply</Button>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Space>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="container mx-auto px-4 text-center">
            <Title level={2}>
              Subscribe to our newsletter to get news
              <br />
              about our latest job opportunities
            </Title>
            <Row justify="center">
              <Col xs={24} sm={16} md={12} lg={8}>
                <Space.Compact className="w-full">
                  <Input placeholder="Email" size="large" />
                  <Button type="primary" size="large">
                    Subscribe
                  </Button>
                </Space.Compact>
              </Col>
            </Row>
          </div>
        </section>
      </Content>

      {/* Footer */}
      <Footer className="border-t">
        <div className="container mx-auto px-4">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={6}>
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="TAWUN Logo"
                width={120}
                height={40}
                className="mb-4"
              />
              <Space direction="vertical" className="text-gray-600">
                <Text>Street name, Area address</Text>
                <Text>City name, Country</Text>
                <Text>+880-2441015655</Text>
                <Text>team21@tawun.com</Text>
              </Space>
            </Col>
            <Col xs={24} md={6}>
              <Title level={4}>Categories</Title>
              <Space direction="vertical">
                {[
                  "Everyday essentials",
                  "Household",
                  "Professional",
                  "Education",
                ].map((item) => (
                  <a key={item} href="#" className="text-gray-600">
                    {item}
                  </a>
                ))}
              </Space>
            </Col>
            <Col xs={24} md={6}>
              <Title level={4}>Company</Title>
              <Space direction="vertical">
                {[
                  "About Tawun",
                  "Help & support",
                  "Terms of service",
                  "Privacy policy",
                ].map((item) => (
                  <a key={item} href="#" className="text-gray-600">
                    {item}
                  </a>
                ))}
              </Space>
            </Col>
            <Col xs={24} md={6}>
              <Title level={4}>Social media</Title>
              <Space>
                <Button type="text" icon={<FacebookOutlined />} />
                <Button type="text" icon={<GoogleOutlined />} />
              </Space>
            </Col>
          </Row>
          <Divider />
          <Row justify="center">
            <Col>
              <Text type="secondary">© Tawun 2024. All Rights Reserved</Text>
            </Col>
          </Row>
        </div>
      </Footer>
    </Layout>
  );
}
