import { useEffect } from 'react'

import { useLocalStorageValue } from '@react-hookz/web'
import { useSearchParams } from 'react-router-dom'

interface ReferrerTrackerValue {
  id: string
  timestamp: number
}

const validRegex = /^[0-9A-Z]{4,42}$/i

export function useReferrerTracker(defaultReferrerId: string) {
  const { value: storedTxReferrerId, set: setTxReferrerId } =
    useLocalStorageValue(`@origin/referrer-track`)
  const [searchParams, setSearchParams] = useSearchParams()
  const referrerId = searchParams.get('r')

  useEffect(() => {
    if (!referrerId) {
      if (!storedTxReferrerId) {
        setTxReferrerId({ id: defaultReferrerId, timestamp: Date.now() })
      }
      return
    }

    if (referrerId.match(validRegex)) {
      console.log(`Track ID ${referrerId}`)
      setTxReferrerId({ id: referrerId, timestamp: Date.now() })
    } else {
      console.log(`Invalid Track ID ${referrerId}`)
    }

    searchParams.delete('r')
    setSearchParams(searchParams)
  }, [
    referrerId,
    setSearchParams,
    setTxReferrerId,
    storedTxReferrerId,
    searchParams,
    defaultReferrerId,
  ])

  return null
}
export function getReferrerId() {
  let value: ReferrerTrackerValue | undefined

  if (typeof window !== 'undefined') {
    try {
      const rawValue = window.localStorage.getItem(`@origin/referrer-track`)
      if (rawValue) {
        value = JSON.parse(rawValue) as ReferrerTrackerValue
      }
    } catch (e) {
      /* Ignore */
    }
  }

  return value?.id.match(validRegex) ? value.id : undefined
}
