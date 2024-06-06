import { ReactNode } from 'react'

export const LearnStep = ({
  icon,
  title,
  description,
  bodyImage
}: {
  icon: string,
  title: string,
  description: string,
  bodyImage: string
}) => {
  return (
    <div className="flex flex-col items-center justify-start border-solid border-[1px] border-gray-200 rounded-3xl py-[36px] px-[20px] md:py-[44px] md:px-[53px]">
      <img src={icon}/>
      <div className="md:text-4xl text-2.66xl mt-[10px] md:mt-[14px] text-center">
        {title}
      </div>
      <div className="md:text-lg text-sm text-gray-500 mt-[8px] md:mt-[15px] text-center">
        {description}
      </div>
      <img src={bodyImage}/>
    </div>
  )
}
