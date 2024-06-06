import { ReactNode } from 'react'

import { Tooltip } from './Tooltip'

export const StatBox = ({
  title,
  children,
  cols = 1,
}: {
  title: string
  children: ReactNode
  cols: 1 | 2
}) => {
  const gridCols = cols === 1 ? 'grid-cols-1' : 'grid-cols-2'
  return (
    <div className="border border-gray-border rounded-3xl bg-gray-bg1 font-medium">
      <div className="py-6 px-6 border-b border-gray-border text-sm leading-relaxed">
        {title}
      </div>
      <div className={`py-4 px-6 grid ${gridCols} gap-6`}>{children}</div>
    </div>
  )
}

export const StatBoxItem = ({
  label,
  value,
  description,
  logo,
  tooltip,
}: {
  label: string
  value: ReactNode
  description?: ReactNode
  logo?: string
  tooltip?: string
}) => {
  return (
    <div>
      <div className="text-gray-500 text-sm flex items-center gap-1">
        {logo ? <img src={logo} alt="Logo" className="h-4" /> : null}
        {label}
        {tooltip ? <Tooltip className="p-2 text-xs">{tooltip}</Tooltip> : null}
      </div>
      <div className="mt-1">{value}</div>{' '}
      {description && (
        <div className="text-gray-500 text-sm">{description}</div>
      )}
    </div>
  )
}
