import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { StarIcon } from "lucide-react";
import React from "react";

export default function Feedback() {
  const feedbacks = [
    {
      name: "Md. Abid Hasan",
      location: "Dhaka, Bangladesh",
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Proin pellentesque nisl volutpat mattis sed vitae. Tellus nunc turpis arcu sagittis massa volutpat vel consequat. Aliquet laoreet senectus feugiat tellus maecenas auctor maecenas quis tristique. At mattis amet nec ullamcorper vestibulum ut libero. Vel facilisi tortor viverra sit maecenas odio tristique. Turpis massa adipiscing quis aliquam at fames. Quisque non vulputate porttitor dignissim in id velit lectus. Ipsum velit leo neque fermentum. Scelerisque leo tristique sed nunc urna porttitor in faucibus.",
      rate: 5,
    },
    {
      name: "Md. Abid Hasan",
      location: "Dhaka, Bangladesh",
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Proin pellentesque nisl volutpat mattis sed vitae. Tellus nunc turpis arcu sagittis massa volutpat vel consequat. Aliquet laoreet senectus feugiat tellus maecenas auctor maecenas quis tristique. At mattis amet nec ullamcorper vestibulum ut libero. Vel facilisi tortor viverra sit maecenas odio tristique. Turpis massa adipiscing quis aliquam at fames. Quisque non vulputate porttitor dignissim in id velit lectus. Ipsum velit leo neque fermentum. Scelerisque leo tristique sed nunc urna porttitor in faucibus.",
      rate: 5,
    },
    {
      name: "Md. Abid Hasan",
      location: "Dhaka, Bangladesh",
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Proin pellentesque nisl volutpat mattis sed vitae. Tellus nunc turpis arcu sagittis massa volutpat vel consequat. Aliquet laoreet senectus feugiat tellus maecenas auctor maecenas quis tristique. At mattis amet nec ullamcorper vestibulum ut libero. Vel facilisi tortor viverra sit maecenas odio tristique. Turpis massa adipiscing quis aliquam at fames. Quisque non vulputate porttitor dignissim in id velit lectus. Ipsum velit leo neque fermentum. Scelerisque leo tristique sed nunc urna porttitor in faucibus.",
      rate: 5,
    },
  ];
  return (
    <section id="feedback" className="px-[7%] py-12 pb-[200px]">
      <Title className="py-8">What our customer says ?</Title>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="w-full h-min bg-background shadow-lg p-8 rounded-xl"
          >
            <div className="h-full mx-auto">
              <div className="h-full flex flex-row justify-center items-center gap-4 pb-8">
                <Avatar size="large" className="h-12 w-12" />
                <div className="">
                  <Title level={4} className="!m-0 !p-0">
                    {item.name}
                  </Title>
                  <p className="text-gray-600">{item.location}</p>
                </div>
              </div>
            </div>
            <p className="">{item.feedback}</p>
            <div className="flex flex-row justify-center items-center py-8">
              {Array.from({ length: item.rate }, (_, i) => (
                <StarIcon fill="#FFBB00" stroke="" key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
