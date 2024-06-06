import { useState, useEffect } from 'react'
import { useTime } from 'react-time-sync'

import { NumberSpinner } from '~/components/NumberSpinner'

interface CountdownProps {
  to: Date
  onEnd?: () => void
  textOnly?: boolean
  endsSoon?: boolean
}

export const Countdown = (props: CountdownProps) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  return isMounted ? <CountdownCmp {...props} /> : null
}

const CountdownCmp = ({ to, onEnd, textOnly, endsSoon }: CountdownProps) => {
  const now = useTime() * 1000
  const toInMs = to.getTime()

  const allSecondsRaw = Math.floor((toInMs - now.valueOf()) / 1000)
  const allSeconds = allSecondsRaw > 0 ? allSecondsRaw : 0

  const seconds = allSeconds % 60
  const minutes = Math.floor(allSeconds / 60) % 60
  const hours = Math.floor(allSeconds / 60 / 60) % 24
  const days = Math.floor(allSeconds / 60 / 60 / 24)

  useEffect(() => {
    if (allSeconds === 0 && onEnd) {
      onEnd()
    }
  }, [allSeconds, onEnd])

  const gridColsClass =
    days > 0
      ? `grid-cols-[auto,5px,auto,5px,auto,5px,auto]`
      : `grid-cols-[auto,5px,auto,5px,auto]`

  if (textOnly) {
    return [
      days > 0 ? `${days}d` : null,
      days === 0 && hours === 0 ? null : `${hours}h`,
      days === 0 ? `${minutes}m` : null,
      days === 0 && hours === 0 ? `${seconds}s` : null,
    ]
      .filter(Boolean)
      .join(' ')
  }

  const numberClassNames = `text-2xl sm:text-5xl font-medium leading-none flex justify-center`

  return (
    <div className="flex">
      <div className={`grid ${gridColsClass} gap-x-2 sm:gap-x-6`}>
        {days > 0 ? (
          <>
            <div className={numberClassNames}>{days}</div>
            <div className={numberClassNames}>:</div>
          </>
        ) : null}
        <div className={numberClassNames}>
          <NumberSpinner num={hours} slow />
        </div>
        <div className={numberClassNames}>:</div>
        <div className={numberClassNames}>
          <NumberSpinner num={minutes} leftPad slow />
        </div>
        <div className={numberClassNames}>:</div>
        <div className={numberClassNames}>
          <NumberSpinner num={seconds} leftPad />
        </div>
        {days > 0 ? (
          <>
            <div className="text-gray-500 text-sm sm:text-normal">{days > 1 ? 'Days' : 'Day'}</div>
            <div />
          </>
        ) : null}
        <div className="text-gray-500 text-sm sm:text-normal">Hours</div>
        <div />
        <div className="text-gray-500 text-sm sm:text-normal">Minutes</div>
        <div />
        <div className="text-gray-500 text-sm sm:text-normal">Seconds</div>
      </div>
    </div>
  )
}
