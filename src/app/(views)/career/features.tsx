import { Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { User2 } from "lucide-react";
import React from "react";

export default function Features() {
  const features = [
    { title: "Connected", color: "#D6EBFF" },
    { title: "Inclusive", color: "#FFF2E8" },
    { title: "Flexible", color: "#D7F3FF" },
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
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 p-4 rounded-xl bg-[${item.color}] h-16 w-16 shadow-md shadow-[#8b8b8ba1] flex justify-center items-center`}
                >
                  <User2 />
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
