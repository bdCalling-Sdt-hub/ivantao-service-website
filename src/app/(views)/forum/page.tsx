import PageHeader from "@/components/shared/page-head";
import Title from "antd/es/typography/Title";
import React from "react";
import Categories from "./categories";
import PopPosts from "./pop-posts";

export default function Page() {
  return (
    <>
      <main className="py-12 px-4 md:px-[7%]">
        <PageHeader img="/images/blur-section.jpg" title="Community Forum" />
        <div className="py-12">
          <Title level={3}>How to use Forum?</Title>
          <ul className="list-decimal list-inside space-y-4">
            <li>Select a category</li>
            <li>See all the posts related to the category.</li>
            <li>
              Also you can create a post about what you think about that
              category.
            </li>
          </ul>
        </div>
        <section>
          <Categories />
        </section>
        <section>
          <PopPosts />
        </section>
      </main>
    </>
  );
}
