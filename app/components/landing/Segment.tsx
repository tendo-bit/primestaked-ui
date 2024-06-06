import { ReactNode } from 'react'

export const Segment = ({
  isWhite,
  hasGradientBg,
  children,
  isRelative,
  hideOverflow,
  width,
  alignCenter,
  style,
  className,
}: {
  isWhite: boolean
  hasGradientBg: boolean
  isRelative: boolean
  hideOverflow: boolean
  alignCenter: boolean
  width: string // normal (1308px), large(1476px)
  children: ReactNode
  className?: string
  style?: object
}) => {
  return (
    <div
      className={`${
        hasGradientBg
          ? 'bg-footer-gradient'
          : isWhite
          ? 'bg-white'
          : 'bg-gray-100'
      }
      ${hideOverflow ? 'overflow-hidden' : ''}
      ${isRelative ? 'relative' : ''}
      ${className ? className : ''}
      w-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-12`}
      style={style}
    >
      <div
        className={`max-w-[333px] ${
          width == 'large' ? 'sm:max-w-[1476px]' : ''
        } ${
          width == 'normal' ? 'sm:max-w-[1308px]' : ''
        } w-full flex flex-col justify-center ${
          alignCenter ? 'items-center' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}
