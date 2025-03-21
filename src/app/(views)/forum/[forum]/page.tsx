import Title from "antd/es/typography/Title";
import Poster from "./poster";
import PopPosts from "../pop-posts";

export default function Page() {
  return (
    <>
      <main className="py-12 px-4 md:px-[7%]">
        <Title level={3} className="text-center pb-12">
          {/* <span className="capitalize">{params.forum}</span> Forum */}
        </Title>
        <Poster />
        <section>
          <PopPosts notitle />
        </section>
      </main>
    </>
  );
}
