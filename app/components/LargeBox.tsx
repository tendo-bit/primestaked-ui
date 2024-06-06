import { ReactNode } from 'react'

export const LargeBox = ({
  title,
  children,
}: {
  title?: string
  children: ReactNode
}) => {
  return (
    <div>
      {title && (
        <div className="py-6 px-6 border-b border-gray-border">{title}</div>
      )}
      {children}
    </div>
  )
}
