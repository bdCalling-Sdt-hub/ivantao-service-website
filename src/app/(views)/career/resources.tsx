import { Card, Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import React from "react";

export default function Resources() {
  const resources = [
    {
      title: "Rising Tides",
      para: "Lorem ipsum dolor sit amet consectetur. Nisi eget pellentesque condimentum vel nisl quis mattis viverra. Vel mi interdum lectus mi hac ultrices pulvinar. Nibh eros quam viverra viverra. Adipiscing amet sapien massa fringilla. Faucibus libero praesent orci volutpat volutpat iaculis posuere tincidunt.",
      color: "#E5F9FF",
      icon: "1",
    },
    {
      title: "Employee resource groups",
      para: "Lorem ipsum dolor sit amet consectetur. Nisi eget pellentesque condimentum vel nisl quis mattis viverra. Vel mi interdum lectus mi hac ultrices pulvinar. Nibh eros quam viverra viverra. Adipiscing amet sapien massa fringilla. Faucibus libero praesent orci volutpat volutpat iaculis posuere tincidunt. ",
      color: "#F5EDFF",
      icon: "2",
    },
    {
      title: "Inclusive Networks",
      para: "Lorem ipsum dolor sit amet consectetur. Nisi eget pellentesque condimentum vel nisl quis mattis viverra. Vel mi interdum lectus mi hac ultrices pulvinar. Nibh eros quam viverra viverra. Adipiscing amet sapien massa fringilla. Faucibus libero praesent orci volutpat volutpat iaculis posuere tincidunt. ",
      color: "#F5F5F5",
      icon: "3",
    },
  ];
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20">
      <Title className="text-center text-lg md:text-2xl lg:text-3xl">
        Creating an Inclusive Environment
      </Title>
      <p className="px-4 sm:px-12 md:px-24 lg:px-32 text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur. Nisi eget pellentesque
        condimentum vel nisl quis mattis viverra. Vel mi interdum lectus mi hac
        ultrices pulvinar. Nibh eros quam viverra viverra. Adipiscing amet
        sapien massa fringilla. Faucibus libero praesent orci volutpat volutpat
        iaculis posuere tincidunt. Gravida hac scelerisque amet sed aenean nunc
        est quisque. Ornare aliquet hendrerit eros purus vulputate dictum
        facilisis volutpat. Donec rhoncus arcu netus mi magnis bibendum.
      </p>
      <div className="container mx-auto px-4 pt-16">
        <Row gutter={[16, 16]} justify="center">
          {resources.map((item, i) => (
            <Col xs={24} sm={12} md={10} xl={8} key={i}>
              <Card className="shadow-lg rounded-lg">
                <div className="flex flex-row justify-start items-center gap-4 mb-4">
                  <div
                    className="size-16 flex justify-center items-center rounded-full overflow-hidden"
                    style={{ background: item.color }}
                  >
                    <Image
                      height={64}
                      width={64}
                      src={`/images/icons/career_res/${item.icon}.png`}
                      alt="icon"
                      className="size-10"
                    />
                  </div>
                  <Title level={4} className="!m-0 text-base md:text-lg">
                    {item.title}
                  </Title>
                </div>
                <Paragraph className="text-gray-600 text-sm md:text-base">
                  {item.para}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
