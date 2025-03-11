import React from "react";
import Title from "antd/es/typography/Title";
import { Button, Input } from "antd";
export default function Newsletter() {
  return (
    <section className="newsletter-section bg-[#7849D4] py-12 mb-12">
      <div className="container mx-auto px-4 text-center space-y-8">
        <Title
          level={2}
          className="!text-background text-center !text-base md:!text-3xl"
        >
          Subscribe to our newsletter to get news
          <br />
          about our latest job opportunities
        </Title>
        <div className="px-0 md:px-12 w-full md:w-1/2 mx-auto flex flex-row justify-center items-center gap-6">
          <Input className="" placeholder="Example@gmail.com" size="large" />
          <Button
            className="bg-[#FFFFFF] hover:!bg-[#DDDDDD] hover:!text-background border-none font-semibold"
            size="large"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
