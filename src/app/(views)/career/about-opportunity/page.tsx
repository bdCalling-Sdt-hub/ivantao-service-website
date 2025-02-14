/* eslint-disable @typescript-eslint/no-explicit-any */
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
import React, { JSX } from "react";
interface JobOpportunity {
  title: string;
  to: string;
  company: {
    name: string;
    website: string;
    logo?: string;
  };
  location: string;
  employment_type: string;
  posted_date: string;
  end_date: string;
  about_us: {
    text: string;
    link?: string;
  };
  about_position: {
    text: string;
  };
  what_youll_do: {
    text: string;
  };
  what_you_should_have: {
    items: string[];
  };
  nice_to_have: {
    items: string[];
  };
  icons: {
    location: JSX.Element;
    clock: JSX.Element;
    calendar: JSX.Element;
    globe: JSX.Element;
    pin: JSX.Element;
    hourglass: JSX.Element;
  };
}

const job_opp: JobOpportunity = {
  title: "UI/UX Designer",
  to: "/career/about-opportunity/apply-role",
  company: {
    name: "Tawun",
    website: "tawun.com",
  },
  location: "California, San Francisco",
  employment_type: "Full time",
  end_date: "End date: 20-03-2025",
  about_us: {
    text: "Lorem ipsum dolor sit amet consectetur. Purus augue commodo lectus...",
  },
  about_position: {
    text: "Lorem ipsum dolor sit amet consectetur. Purus augue commodo lectus...",
  },
  what_youll_do: {
    text: "Lorem ipsum dolor sit amet consectetur. Purus augue commodo lectus...",
  },
  what_you_should_have: {
    items: [
      "Strong UI/UX design skills",
      "Experience with Figma",
      "Knowledge of accessibility standards",
    ],
  },
  nice_to_have: {
    items: [
      "Experience with motion design",
      "Familiarity with front-end development",
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
  posted_date: "",
};

export default function Page() {
  return (
    <main className="py-12 px-6 md:px-[7%]">
      <BackText text={"Back to Careers"} />
      <div className="py-12 grid grid-cols-1 lg:grid-cols-7 gap-6">
        <div className="lg:col-span-5 rounded-t-xl overflow-hidden w-full bg-background pb-4">
          <div className="w-full">
            <div className="py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-start md:items-center bg-[#BBA782]">
              <Title
                level={3}
                className="!m-0 !text-background text-lg md:text-xl"
              >
                {job_opp.title}
              </Title>
              <ApplyButton
                to={job_opp.to}
                //  className="mt-4 md:mt-0"
              />
            </div>
          </div>
          <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg space-y-6">
              {renderJobDetail(job_opp.icons.location, job_opp.company.name)}
              {renderJobDetail(job_opp.icons.globe, job_opp.company.website)}
              {renderJobDetail(job_opp.icons.pin, job_opp.location)}
            </div>
            <div className="p-6 border rounded-lg space-y-6">
              {renderJobDetail(
                job_opp.icons.hourglass,
                job_opp.employment_type
              )}
              {renderJobDetail(job_opp.icons.clock, job_opp.employment_type)}
              {renderJobDetail(job_opp.icons.calendar, job_opp.end_date)}
            </div>
          </div>
          <Section title="About Position" text={job_opp.about_position.text} />
          <Section title="What you'll do" text={job_opp.what_youll_do.text} />
          <ListSection
            title="What you should have"
            items={job_opp.what_you_should_have.items}
          />
          <ListSection
            title="Nice to have"
            items={job_opp.nice_to_have.items}
          />
        </div>
        <div className="lg:col-span-2">
          <div className="w-full">
            <div className="py-6 px-4 md:px-6 rounded-t-xl bg-[#BBA782]">
              <Title
                level={3}
                className="!m-0 !text-background text-lg md:text-xl"
              >
                About us
              </Title>
            </div>
          </div>
          <div className="bg-background p-4 md:p-6">
            {job_opp.about_us.text}{" "}
            <span className="font-bold">Read more...</span>
          </div>
        </div>
      </div>
    </main>
  );
}

function renderJobDetail(icon: JSX.Element, text: string) {
  return (
    <div className="flex flex-row justify-start gap-4 items-center">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div className="pt-8 px-4 md:px-6">
      <Title level={3} className="!m-0 text-lg md:text-xl">
        {title}
      </Title>
      <p className="mt-2 text-sm md:text-base">{text}</p>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ListSection({ title, items }: { title: string; items: any }) {
  return (
    <div className="pt-8 px-4 md:px-6 space-y-4">
      <Title level={3} className="!m-0 text-lg md:text-xl">
        {title}
      </Title>
      <ul className="list-disc pl-4 text-sm md:text-base">
        {items.map(
          (
            item:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  unknown,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactPortal
                  | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined,
            i: React.Key | null | undefined
          ) => (
            <li key={i}>{item}</li>
          )
        )}
      </ul>
    </div>
  );
}
