import type { MetaFunction } from '@remix-run/cloudflare'

import friendsSrc from '~/assets/friends.svg'
import eigenPointsSrc from '~/assets/eigen-points.svg'
import primeTokenSrc from '~/assets/prime-eth-token-full.svg'
import primePointsSrc from '~/assets/prime-points.svg'

import { formatEth, formatPercentage, formatPoints } from '~/utils/bigint'
import { CopyReferrerLink } from '~/components/CopyReferrerLink'

import { Link } from '@remix-run/react'
import { Tooltip } from '~/components/Tooltip'
import { useUserStats } from '~/utils/useUserStats'

export const meta: MetaFunction = () => {
  return [
    { title: 'Prime Staked ETH' },
    { name: 'description', content: 'Welcome to Prime Staked ETH!' },
  ]
}

export default function Index() {
  const {
    isLoading,
    assetBalance,
    lrtPointRecipientStats,
    percentTotalXp,
    percentTotalELPoints,
  } = useUserStats()

  const formatDashboardPoints = (val?: bigint | string | undefined) =>
    val ? formatPoints(val) : isLoading ? '...' : '-'

  const headerClass = `font-medium text-center mt-4 text-xl leading-relaxed mb-2`
  const boxClass = `rounded-3xl border border-gray-border bg-white flex gap-2 flex-col md:flex-row justify-between items-center py-4 px-8`

  return (
    <>
      <div className="flex flex-col gap-4 w-full max-w-[700px]">
        <div className={headerClass}>Your Balance</div>
        <div className={boxClass}>
          <div className="sm:w-1/4 flex justify-center">
            <img className="h-16" src={primeTokenSrc} alt="Prime ETH" />
          </div>
          <div className="sm:w-1/2 flex flex-col gap-2 items-center py-6 md:pt-2 md:pb-1">
            <div className="text-gray-500 text-center text-sm font-medium leading-relaxed">
              primeETH
            </div>
            <div className="text-2xl font-medium align-middle leading-relaxed">
              {formatEth(assetBalance)}
            </div>
          </div>
          <div className="sm:w-1/4 flex justify-center">
            <Link to="/app/restake" className="btn text-sm px-6 py-3">
              Restake {assetBalance === 0n ? 'now' : 'more'}
            </Link>
          </div>
        </div>
        <div className={headerClass}>Your Rewards</div>
        <div className={`${boxClass} mb-2`}>
          <div className="sm:w-1/4 flex justify-center">
            <img className="h-16" src={primePointsSrc} alt="Prime ETH Points" />
          </div>
          <div className="sm:w-1/2 flex flex-col gap-3 items-center py-6 md:pt-2 md:pb-2">
            <div className="text-gray-500 text-center text-sm font-medium flex items-center gap-2">
              primeETH XP
              <Tooltip placement="right">
                <div className="flex flex-col gap-2 text-gray-500 text-xs">
                  <div className="flex justify-between items-center gap-12">
                    <div>From balance held</div>
                    <div>
                      {formatDashboardPoints(
                        lrtPointRecipientStats
                          ? BigInt(lrtPointRecipientStats.points) -
                              BigInt(lrtPointRecipientStats.referralPoints)
                          : undefined,
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-8">
                    <div>From referrals</div>
                    <div>
                      {formatDashboardPoints(
                        lrtPointRecipientStats?.referralPoints,
                      )}
                    </div>
                  </div>
                </div>
              </Tooltip>
            </div>
            <div className="text-2xl font-medium">
              {formatDashboardPoints(lrtPointRecipientStats?.points)}
            </div>
          </div>
          <div className="sm:w-1/4 flex justify-center flex-col gap-3 items-center">
            <div className="text-gray-500 text-center text-sm font-medium">
              % of total
            </div>
            <div className="text-2xl font-medium">
              {percentTotalXp ? formatPercentage(percentTotalXp, 3) : '-'}
            </div>
          </div>
        </div>
        <div className={boxClass}>
          <div className="sm:w-1/4 flex justify-center">
            <img className="h-16" src={eigenPointsSrc} alt="Eigen Points" />
          </div>
          <div className="sm:w-1/2 flex flex-col gap-3 items-center py-6 md:pt-2 md:pb-2">
            <div className="text-gray-500 text-center text-sm font-medium">
              EigenLayer Points
            </div>
            <div className="text-2xl font-medium ">
              {formatDashboardPoints(lrtPointRecipientStats?.elPoints)}
            </div>
          </div>
          <div className="sm:w-1/4 flex justify-center flex-col gap-3 items-center">
            <div className="text-gray-500 text-center text-sm font-medium">
              % of total
            </div>
            <div className="text-2xl font-medium">
              {percentTotalELPoints
                ? formatPercentage(percentTotalELPoints, 3)
                : '-'}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
