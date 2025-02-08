import PageHeader from "@/components/shared/page-head";

import React from "react";
import SectionA from "./sec-a";
import SectionB from "./sec-b";

export default function Page() {
  return (
    <main className="pb-12 px-[7%]">
      <PageHeader
        img="/images/about/4b8ec5a1ceda545931ca68d9a8bd1547.jpg"
        title="Empowering your marketplace"
        para="Lorem ipsum dolor sit amet consectetur. Vulputate orci elementum mauris pellentesque semper non imperdiet in. Auctor blandit ut id turpis libero ultricies diam. Et mauris tortor ultrices in at tristique at donec eu. Condimentum blandit sagittis amet lorem sollicitudin sollicitudin morbi. Amet vulputate neque porta etiam lobortis turpis convallis elit. Ornare est malesuada elit scelerisque pellentesque vestibulum arcu elementum. Nisi a facilisi venenatis"
      />
      <SectionA />
      <SectionB />
    </main>
  );
}
