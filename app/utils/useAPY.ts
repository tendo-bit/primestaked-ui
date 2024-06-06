import { formatEther } from 'viem'
import { useReadContract } from 'wagmi'

import { contracts } from './constants'
import { lrtOracleAbi } from './abis'

export function useAPY(): number {
  const from = new Date(Date.UTC(2024, 1, 5, 18, 0))
  const to = getPrevious735AMUTC()
  const startPrice = 1000068149686353000n

  const { data: primeETHPrice } = useReadContract({
    abi: lrtOracleAbi,
    address: contracts.lrtOracle,
    functionName: 'primeETHPrice',
  }) as { data: bigint }

  if (!primeETHPrice) {
    return 0
  }

  const apy = calculateAPY(from, to, startPrice, primeETHPrice)
  return apy * 100
}

const calculateAPY = (
  from: Date,
  to: Date,
  fromAmount: bigint,
  toAmount: bigint,
) => {
  if (fromAmount === 0n || toAmount === 0n) {
    return 0
  }

  const diffTime = to.getTime() - from.getTime()
  const dayDiff = diffTime / (1000 * 60 * 60 * 24)

  const apr =
    (Number(formatEther(toAmount)) / Number(formatEther(fromAmount)) - 1) *
    (365.25 / dayDiff)
  const periods_per_year = 365.25 / Number(dayDiff)
  const apy = (1 + apr / periods_per_year) ** periods_per_year - 1

  return apy || 0
}

function getPrevious735AMUTC(): Date {
  const now = new Date()
  // Set the time to 7:35 AM UTC
  now.setUTCHours(7, 35, 0, 0)
  // If the current UTC time is after 7:35 AM today, subtract a day to get the previous occurrence
  if (now > new Date()) {
    now.setUTCDate(now.getUTCDate() - 1)
  }
  return now
}
