import { useAccount, useReadContracts } from 'wagmi'
import { useQuery } from '@tanstack/react-query'

import { contracts } from '~/utils/constants'
import { primeETHABI } from '~/utils/abis'
import { graphqlClient } from '~/utils/graphql'

export function useUserStats() {
  const { address } = useAccount()

  const connectedAddress =
    address || '0x1111111111111111111111111111111111111111'

  const { data: primeEthData } = useReadContracts({
    contracts: [
      {
        abi: primeETHABI,
        address: contracts.primeETH,
        functionName: 'balanceOf',
        args: [connectedAddress],
      },
    ],
  })

  const userStats = useQuery({
    queryKey: [`dashboard-user-stats-${connectedAddress}`],
    queryFn: graphqlClient<
      {
        lrtPointRecipientStats: {
          elPoints: string
          points: string
          referralPoints: string
        }
        lrtSummaries: {
          elPoints: string
          points: string
        }[]
      },
      { address: string }
    >(
      `
      query PointRecipientStats($address: String!) {
        lrtPointRecipientStats(address: $address) {
          elPoints
          points
          referralPoints
        }
        lrtSummaries(limit: 1, orderBy: id_DESC) {
          elPoints
          points
        }
      }
    `,
      { address: connectedAddress },
    ),
  })

  const elStats = useQuery({
    queryKey: [`el-stats`],
    queryFn: graphqlClient<{ totalEigenLayerPoints: string }>(
      `query ELStats {
         totalEigenLayerPoints
       }`,
    ),
  })

  const isLoading = userStats.isLoading

  let assetBalance = 0n

  if (primeEthData) {
    assetBalance = primeEthData[0].result as bigint
  }

  const lrtPointRecipientStats = userStats.data?.lrtPointRecipientStats
  const lrtSummaries = userStats.data?.lrtSummaries
  const totalEigenLayerPoints = elStats.data?.totalEigenLayerPoints
  const totalPrimeXP = lrtSummaries?.[0]?.points
    ? BigInt(lrtSummaries?.[0]?.points)
    : undefined

  const calculatePercentage = (
    portion: string | bigint | undefined,
    total: string | bigint | undefined,
  ) =>
    portion && total && BigInt(total) > 0
      ? (BigInt(portion) * eth1) / BigInt(total)
      : undefined

  const eth1 = 1_000000000_000000000n
  const percentTotalXp = calculatePercentage(
    lrtPointRecipientStats?.points,
    totalPrimeXP,
  )
  const percentTotalELPoints = calculatePercentage(
    lrtPointRecipientStats?.elPoints,
    totalEigenLayerPoints,
  )

  return {
    isLoading,
    assetBalance,
    lrtPointRecipientStats,
    totalEigenLayerPoints,
    totalPrimeXP,
    percentTotalXp,
    percentTotalELPoints,
  }
}
