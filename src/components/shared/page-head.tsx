import Title from 'antd/es/typography/Title'
import React from 'react'

export default function PageHeader({img,title,para}:{img:string,title:string,para?:string}) {
  return (
    <div
          className="h-[400px] w-[100%] mx-auto rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url('${img}')` }}
        >
          <div className="h-full w-full bg-[#00000059] flex flex-col justify-center items-center rounded-2xl backdrop-blur-sm">
            <Title className="!text-background">{title}</Title>
            {para?<p className="text-background text-xl px-[10%] text-center">
              {para}
            </p>:""}
          </div>
        </div>
  )
}
