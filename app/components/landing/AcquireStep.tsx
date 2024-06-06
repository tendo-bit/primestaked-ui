import { ReactNode } from 'react'

export const AcquireStep = ({
  step,
  children,
  description
}: {
  step: string,
  children: ReactNode,
  description?: string
}) => {
  return (
    <div className="flex flex-col items-center justify-start border-solid border-[1px] border-gray-200 rounded-3xl py-[36px] px-[20px] md:py-[44px] md:px-[53px]">
      <div className="w-[68px] h-[68px] md:w-[96px] md:h-[96px] bg-red-500 rounded-full text-white text-[54px] md:text-7xl flex items-center justify-center">
        {step}
      </div>
      <div className="md:text-4xl text-2.66xl mt-[21px] md:mt-[31px] text-center">
        {children}
      </div>
      <div className="md:text-2xl text-lg mt-[14px] md:mt-[36px] text-center">
        {description}
      </div>
    </div>
  )
}
