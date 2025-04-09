import Image from "next/image";
import Link from "next/link";
import React from "react";

type LinkItem = {
  name: string;
  href: string;
};
type iconLink = {
  icon: React.ReactNode;
  href: string;
  color: string;
};

const categories: LinkItem[] = [
  { name: "Everyday essentials", href: "/service/categories/everyday" },
  { name: "Household", href: "/service/categories/household" },
  { name: "Professional", href: "/service/categories/professional" },
  { name: "Education", href: "/service/categories/education" },
  { name: "Creative", href: "/service/categories/creative" },
  {
    name: "Information technology",
    href: "/service/categories/information-technology",
  },
  { name: "Specialized", href: "/service/categories/specialized" },
  { name: "Commercial", href: "/service/categories/commercial" },
  { name: "Tailored Service", href: "/service/categories/custom" },
];

const companyLinks: LinkItem[] = [
  { name: "About Tawun", href: "/about" },
  { name: "How it works", href: "/how-it-works" },
  { name: "Help & support", href: "/contact" },
  { name: "Terms of service", href: "/tnc" },
  { name: "Privacy policy", href: "/privacy-policy" },
  { name: "Careers", href: "/career" },
  { name: "Investors section", href: "/investors" },
  { name: "Charity & Donations", href: "/charity" },
  { name: "Community Forum", href: "/forum" },
];

const socialMediaLinks: iconLink[] = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="#ffffff"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "https://facebook.com",
    color: "text-blue-600",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="#ffffff"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "https://google.com",
    color: "text-red-600",
  },
];

export default function Footer() {
  return (
    <footer className="w-full pt-12 bg-[#7849D4] !text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="block mb-8">
              <Image
                src="/logo.png"
                alt="Tawun Logo"
                width={240}
                height={240}
                className="w-auto h-16"
              />
            </Link>
            <address className="not-italic !text-background">
              <p>Street name, Area address</p>
              <p>City name, Country</p>
            </address>
            <div className="">
              <div className="flex items-center gap-2 !text-background">
                <Link
                  href="/contact"
                  className="hover:underline font-bold !no-underline hover:text-black"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-12">Categories</h2>
            <ul className="space-y-2">
              {categories.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="!text-background hover:!text-black"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-12">Company</h2>
            <ul className="space-y-2">
              {companyLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="!text-background hover:!text-black"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-12">Social Media</h2>
            <div className="flex gap-4">
              {socialMediaLinks.map(({ icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={` ${color} hover:opacity-80`}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="py-4 mt-12 text-center !text-background font-bold">
          <p>© Tawun 2024 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
