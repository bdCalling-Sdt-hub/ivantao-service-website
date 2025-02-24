import Title from "antd/es/typography/Title";
import Image from "next/image";
import React from "react";

export default function Page() {
  const how_it_works = [
    {
      title: "How it works?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Potenti sit porttitor nam in lacus tempor cras. Nunc elementum turpis commodo odio massa aliquet ultrices. Etiam in est duis feugiat pretium nec fermentum pharetra. Varius duis dictum lectus iaculis amet mi commodo sit mauris. Nec neque consequat morbi placerat nibh. Non lorem interdum interdum sapien pretium interdum amet nibh. Turpis risus eget nascetur blandit consequat risus. Gravida cras massa neque amet adipiscing egestas donec. Nam egestas diam amet at tincidunt. Orci sed id aenean mi cursus viverra. Mi quis tristique dictumst tellus dignissim. Facilisi rutrum diam commodo in. Pellentesque diam purus potenti velit tincidunt arcu venenatis ut. At tortor a bibendum gravida ac amet. Sit tellus id nulla nunc elit cursus ",
      image: "/images/how-it-works/1.webp",
    },
    {
      title: "How to do payments on the work page?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Potenti sit porttitor nam in lacus tempor cras. Nunc elementum turpis commodo odio massa aliquet ultrices. Etiam in est duis feugiat pretium nec fermentum pharetra. Varius duis dictum lectus iaculis amet mi commodo sit mauris. Nec neque consequat morbi placerat nibh. Non lorem interdum interdum sapien pretium interdum amet nibh. Turpis risus eget nascetur blandit consequat risus. Gravida cras massa neque amet adipiscing egestas donec. Nam egestas diam amet at tincidunt. Orci sed id aenean mi cursus viverra. Mi quis tristique dictumst tellus dignissim. Facilisi rutrum diam commodo in. Pellentesque diam purus potenti velit tincidunt arcu venenatis ut. At tortor a bibendum gravida ac amet. Sit tellus id nulla nunc elit cursus ",
      image: "/images/how-it-works/2.webp",
    },
    {
      title: "How is personal information data secured on our platform page?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Potenti sit porttitor nam in lacus tempor cras. Nunc elementum turpis commodo odio massa aliquet ultrices. Etiam in est duis feugiat pretium nec fermentum pharetra. Varius duis dictum lectus iaculis amet mi commodo sit mauris. Nec neque consequat morbi placerat nibh. Non lorem interdum interdum sapien pretium interdum amet nibh. Turpis risus eget nascetur blandit consequat risus. Gravida cras massa neque amet adipiscing egestas donec. Nam egestas diam amet at tincidunt. Orci sed id aenean mi cursus viverra. Mi quis tristique dictumst tellus dignissim. Facilisi rutrum diam commodo in. Pellentesque diam purus potenti velit tincidunt arcu venenatis ut. At tortor a bibendum gravida ac amet. Sit tellus id nulla nunc elit cursus ",
      image: "/images/how-it-works/3.webp",
    },
    {
      title: "How payment details are secured on our platform?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Potenti sit porttitor nam in lacus tempor cras. Nunc elementum turpis commodo odio massa aliquet ultrices. Etiam in est duis feugiat pretium nec fermentum pharetra. Varius duis dictum lectus iaculis amet mi commodo sit mauris. Nec neque consequat morbi placerat nibh. Non lorem interdum interdum sapien pretium interdum amet nibh. Turpis risus eget nascetur blandit consequat risus. Gravida cras massa neque amet adipiscing egestas donec. Nam egestas diam amet at tincidunt. Orci sed id aenean mi cursus viverra. Mi quis tristique dictumst tellus dignissim. Facilisi rutrum diam commodo in. Pellentesque diam purus potenti velit tincidunt arcu venenatis ut. At tortor a bibendum gravida ac amet. Sit tellus id nulla nunc elit cursus ",
      image: "/images/how-it-works/4.webp",
    },
  ];
  return (
    <main className="py-12 px-[7%]">
      <section className="py-12">
        {how_it_works.map((Item, index) => (
          <div
            className="w-full grid grid-cols-12 items-center gap-8"
            key={Item.title.toLocaleLowerCase().trim()}
          >
            <div
              className={`col-span-7 ${
                index % 2 === 0 ? "order-1" : "order-2"
              }`}
            >
              <Title className="!text-2xl lg:!text-4xl">{Item.title}</Title>
              <p className="pl-6">{Item.description}</p>
            </div>
            <div
              className={`col-span-5 flex justify-center ${
                index % 2 === 0 ? "order-2" : "order-1"
              }`}
            >
              <Image
                src={Item.image}
                alt="thumbnail"
                width={400}
                height={400}
                className="h-[400px] w-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
