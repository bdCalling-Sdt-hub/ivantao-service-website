import React from "react";
import BreadcrumbReady from "@/components/ui/breadcrumReady";
import { HomeFilled } from "@ant-design/icons";
import Image from "next/image";
import { Avatar } from "antd";
import Title from "antd/es/typography/Title";
import { StarIcon } from "lucide-react";

export default async function Page({ params }: { params: Promise<{ category: string, product: string }> }) {

    const breads = [
        {
            href: "/",
            title: <HomeFilled className="!text-xl" />,
        },
        {
            href: `/${(await params).category}`,
            title: (await params).category.replace(/\b\w/g, (char) => char.toUpperCase()),
        },
        {
            title: (await params).product.replace(/\b\w/g, (char) => char.toUpperCase()),
        },
    ];

    return (
        <main className="py-12 px-[7%]">
            <BreadcrumbReady breads={breads} />
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-7 w-full">
                    <Image src="/images/categories/laundry.jfif" width={699} height={416} className="w-full rounded-2xl" alt="thumbnail" />
                    <div className="flex flex-row justify-start items-center">
                        <div className=""><Avatar size="large" />
                            <div className="flex flex-col justify-between items-start"><Title level={5} />Md.Hasan<div className=""><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div></div>
                        </div>
                    </div>
                    <div className="col-span-5 w-full"></div>
                </div>
            </div>
        </main>
    );
}
