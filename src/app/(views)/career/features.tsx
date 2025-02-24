import { Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";
import { Users, Globe, Shuffle, LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  color: string;
  icon: LucideIcon;
}
export default function Features() {
  const features: Feature[] = [
    { title: "Connected", color: "#D6EBFF", icon: Globe },
    { title: "Inclusive", color: "#FFF2E8", icon: Users },
    { title: "Flexible", color: "#D7F3FF", icon: Shuffle },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Title level={2}>TAWUN is where the future works</Title>
          <Paragraph className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. At aliquam tristique
            maecenas neque non sit id ultricies vitae. Gravida nec mi maecenas
            dolor gravida hac libero. Quis quis diam sem accumsan est sed enim.
            Tellus molestie commodo feugiat proin non eros. Metus eget
            condimentum nec pellentesque mi turpis nunc.
          </Paragraph>
        </div>
        <Row gutter={[32, 64]}>
          {features.map((item) => (
            <Col xs={24} md={8} key={item.title}>
              <div className="text-center shadow-md relative rounded-xl bg-background">
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 p-4 rounded-xl h-16 w-16 shadow-md shadow-[#8b8b8ba1] flex justify-center items-center"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-8 h-8 text-gray-700" />
                </div>
                <div className="p-6 py-12">
                  <Title level={3}>{item.title}</Title>
                  <Paragraph className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. At aliquam tristique
                    maecenas.
                  </Paragraph>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
