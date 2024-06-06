import { Link, useLocation } from 'react-router-dom'

interface ToggleProps {
  tabs: {
    label: string
    href: string
  }[]
  className?: string
}

export const Toggle = (props: ToggleProps) => {
  const location = useLocation()
  const activeTab = props.tabs.findIndex(
    (tab) => location.pathname === tab.href,
  )

  const base = 'px-6 py-2 text-center rounded-full font-medium text-sm leading-relaxed'
  const active = `${base} bg-red-500 text-white pointer-events-none`
  const inactive = `${base} text-gray-500 hover:text-black cursor-pointer`
  return (
    <div
      className="rounded-full flex"
      style={{ boxShadow: 'inset 0px 0px 0px 1px #d8dee5' }}
    >
      {props.tabs.map((tab, idx) => (
        <Link
          key={idx}
          to={tab.href}
          className={activeTab === idx ? active : inactive}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  )
}
