import ApplyButton from "@/components/ui/apply-button";
import BackText from "@/components/ui/back-text";
import Title from "antd/es/typography/Title";
import {
  Building2,
  CalendarDays,
  Clock,
  Globe,
  Hourglass,
  MapPin,
} from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main className="py-12 px-[7%]">
      <BackText text={"Back to Careers"} />
      <div className="py-12 grid grid-cols-7 gap-6">
        <div className="col-span-5 rounded-t-xl overflow-hidden w-full bg-background pb-4">
          <div className="w-full">
            <div className="py-8 w-full p-6 flex flex-row justify-between items-center bg-[#BBA782]">
              <Title level={3} className="!m-0 !text-background">
                {job_opp.title}
              </Title>
              <ApplyButton to={job_opp.to} />
            </div>
          </div>
          <div className="p-6 grid grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg space-y-6">
              <div className="flex flex-row justify-start gap-4 items-center">
                <div className="">{job_opp.icons.location}</div>
                <div className="">{job_opp.company.name}</div>
              </div>
              <div className="flex flex-row justify-start gap-4 items-center">
                <div className="">{job_opp.icons.globe}</div>
                <div className="">{job_opp.company.website}</div>
              </div>
              <div className="flex flex-row justify-start gap-4 items-center">
                <div className="">{job_opp.icons.pin}</div>
                <div className="">{job_opp.location}</div>
              </div>
            </div>
            <div className="p-6 border rounded-lg space-y-6">
              <div className="flex flex-row justify-start gap-4 items-center">
                <div className="">{job_opp.icons.hourglass}</div>
                <div className="">{job_opp.employment_type}</div>
              </div>
              <div className="flex flex-row justify-start gap-4 items-center">
                <div className="">{job_opp.icons.clock}</div>
                <div className="">{job_opp.employment_type}</div>
              </div>
              <div className="flex flex-row justify-start gap-4 items-center">
                <div className="">{job_opp.icons.calendar}</div>
                <div className="">{job_opp.end_date}</div>
              </div>
            </div>
          </div>
          <div className="pt-12 px-6">
            <Title className="!m-0" level={3}>
              About Postion
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur. Purus augue commodo lectus
              id non nisl eu. Dignissim cras consectetur dolor accumsan
              ullamcorper orci aenean vitae. Volutpat donec blandit eget in
              nulla ante libero scelerisque. Dui nulla in et habitasse faucibus
              tempor accumsan tortor nibh. Felis pretium vitae dictum in amet
              et. Ornare cras pharetra lorem magna feugiat quis. Varius nec at
              elit orci. Diam dis non vel risus. Erat in tortor eleifend congue
              semper cras at enim.
            </p>
          </div>
          <div className="pt-12 px-6">
            <Title className="!m-0" level={3}>
              What you&apos;ll do
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur. Purus augue commodo lectus
              id non nisl eu. Dignissim cras consectetur dolor accumsan
              ullamcorper orci aenean vitae. Volutpat donec blandit eget in
              nulla ante libero scelerisque. Dui nulla in et habitasse faucibus
              tempor accumsan tortor nibh. Felis pretium vitae dictum in amet
              et. Ornare cras pharetra lorem magna feugiat quis. Varius nec at
              elit orci. Diam dis non vel risus. Erat in tortor eleifend congue
              semper cras at enim.
            </p>
          </div>
          <div className="pt-12 px-6 space-y-4">
            <Title className="!m-0" level={3}>
              What you should have
            </Title>
            <ul>
              {job_opp.what_you_should_have.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="pt-12 px-6 space-y-4">
            <Title className="!m-0" level={3}>
              Nice to have
            </Title>
            <ul>
              {job_opp.what_you_should_have.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <div className="w-full">
            <div className="py-8 rounded-t-xl w-full p-6 flex flex-row justify-between items-center bg-[#BBA782]">
              <Title level={3} className="!m-0 !text-background">
                About us
              </Title>
              <div className=""></div>
            </div>
          </div>
          <div className="bg-background p-4">
            Lorem ipsum dolor sit amet consectetur. Purus augue commodo lectus
            id non nisl eu. Dignissim cras consectetur dolor accumsan
            ullamcorper orci aenean vitae. Volutpat donec blandit eget in nulla
            ante libero scelerisque. Dui nulla in et habitasse faucibus tempor
            accumsan tortor nibh. Felis pretium vitae dictum in amet et. Ornare
            cras pharetra lorem magna feugiat quis. Varius nec at elit orci.
            Diam dis non vel risus. Erat in tortor eleifend congue semper cras
            at enim. <span className="font-bold">Read more...</span>
          </div>
        </div>
      </div>
    </main>
  );
}

const job_opp = {
  title: "UI/UX Designer",
  to: "/career/about-opportunity/apply-role",
  company: {
    name: "Tawun",
    website: "tawun.com",
    logo: "/static/images/company-logo.svg",
  },
  location: "California, San francisco",
  employment_type: "Full time",
  posted_date: "Posted yesterday",
  end_date: "End date: 20-03-2025",
  about_us: {
    text: "Lorem ipsum dolor sit amet consectetur. Purus augue commodo lectus id non nisl eu. Dignissim cras consectetur dolor accumsan ullamcorper orci aenean vitae. Volutpat donec blandit eget in nulla ante libero scelerisque. Dui nulla in et habitasse faucibus tempor accumsan tortor nibh. Felis pretium vitae dictum in amet et. Ornare cras pharetra lorem magna feugiat quis. Varius nec at elit orci. Diam dis non vel risus. Erat in tortor eleifend congue semper cras at enim. Read more...",
    link: "/about-us",
  },
  about_position: {
    text: "Lorem ipsum dolor sit amet consectetur. Purus augue commodo lectus id non nisl eu. Dignissim cras consectetur dolor accumsan ullamcorper orci aenean vitae. Volutpat donec blandit eget in nulla ante libero scelerisque. Dui nulla in et habitasse faucibus tempor accumsan tortor nibh. Felis pretium vitae dictum in amet et. Ornare cras pharetra lorem magna feugiat quis. Varius nec at elit orci. Diam dis non vel risus. Erat in tortor eleifend congue semper cras at enim.",
  },
  what_youll_do: {
    text: "Lorem ipsum dolor sit amet consectetur. Purus augue commodo lectus id non nisl eu. Dignissim cras consectetur dolor accumsan ullamcorper orci aenean vitae. Volutpat donec blandit eget in nulla ante libero scelerisque. Dui nulla in et habitasse faucibus tempor accumsan tortor nibh. Felis pretium vitae dictum in amet et. Ornare cras pharetra lorem magna feugiat quis, Varius nec at elit orci. Diam dis non vel risus. Erat in tortor eleifend congue semper cras at enim.",
  },
  what_you_should_have: {
    items: [
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
    ],
  },
  nice_to_have: {
    items: [
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
      "Lorem ipsum dolor sit amet consectetur. Purus augue commodo",
    ],
  },
  icons: {
    location: <Building2 />,
    clock: <Clock />,
    calendar: <CalendarDays />,
    globe: <Globe />,
    pin: <MapPin />,
    hourglass: <Hourglass />,
  },
};
