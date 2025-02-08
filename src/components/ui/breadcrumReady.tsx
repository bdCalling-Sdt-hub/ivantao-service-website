"use client";
import React from 'react'
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";
import { useRouter } from 'next/navigation';
interface breadType {
  href?:string,
  title:React.ReactNode
}
export default function BreadcrumbReady({breads}:{breads:breadType[]}) {
  const nav = useRouter();
  return (
    <><div className="flex flex-row justify-start items-center gap-6 py-6">
    <Button className="!rounded-full h-9 w-9" onClick={()=>{nav.back()}}><ArrowLeftOutlined/></Button> <Breadcrumb separator={" / "} items={breads} className="font-semibold text-xl !gap-x-12" />
  </div></>
  )
}
