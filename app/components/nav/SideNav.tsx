import alarmSrc from '~/assets/alarm.svg'
import whaleSrc from '~/assets/whale.svg'
import oethSrc from '~/assets/oeth.svg'
import ethSrc from '~/assets/ETH.svg'
import friendsSrc from '~/assets/friends.svg'
import { Tooltip } from '~/components/Tooltip'
import { CopyReferrerLink } from '~/components/CopyReferrerLink'

const boxClass = `border border-gray-border rounded-3xl px-4 pt-6 pb-4 flex flex-col items-center justify-center w-full`
const descriptionClass = `text-gray-500 text-xs text-center mt-2 leading-relaxed`

export const SideNav = () => {
  return (
    <div className="flex flex-col gap-6 pb-12">
      <div className={boxClass}>
        <img src={friendsSrc} alt="friends" />
        <div className="font-medium leading-relaxed">Invite your friends</div>
        <div className={descriptionClass}>
          Get even more primeETH XP when you invite your friends
        </div>
        <div className="mt-4 pb-2">
          <CopyReferrerLink />
        </div>
      </div>
      <div className={boxClass}>
        <img src={alarmSrc} alt="alarm" />
        <div className="font-medium leading-relaxed">Be early!</div>
        <div className={descriptionClass}>
          Early depositers will earn an XP multiplier on their deposit
        </div>
        <div className="text-gray-500 mt-2">
          <Tooltip size={16} placement="right">
            <MultiplierTooltip />
          </Tooltip>
        </div>
      </div>
      <div className={boxClass}>
        <img src={whaleSrc} alt="whale" />
        <div className="font-medium leading-relaxed">Go BIG!</div>
        <div className={descriptionClass}>
          Earn an XP multiplier for larger deposits for the duration of the
          campaign
        </div>
        <div className="text-gray-500 mt-2">
          <Tooltip size={16} placement="right">
            <WhaleTooltip />
          </Tooltip>
        </div>
      </div>
      <div className={boxClass}>
        <img src={oethSrc} alt="oeth" className="w-[40px] h-[40px]" />
        <div className="text-sm text-gray-500 text-center mt-4 leading-relaxed">
          Deposit with OETH and earn
        </div>
        <div className="font-medium leading-relaxed">2X REWARDS*</div>
        <div className="text-gray-500 mt-2">
          <Tooltip
            size={16}
            className="p-2 text-xs text-balance text-center text-gray-500"
          >
            2x bonus applies only to primeETH minted with OETH and held in the
            same wallet
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

const MultiplierTooltip = () => {
  const boxSize = 'h-6'
  const boxClass = `${boxSize} bg-blue-500`
  return (
    <div>
      <div className="text-xs text-gray-500 text-center mb-3">
        Bonus multiplier
      </div>
      <div className="inline-block">
        <div className="grid grid-cols-5 gap-x-2 gap-y-1">
          <div className="font-medium text-gray-500 text-center">5x</div>
          <div className="font-medium text-gray-500 text-center">4x</div>
          <div className="font-medium text-gray-500 text-center">3x</div>
          <div className="font-medium text-gray-500 text-center">2x</div>
          <div className="font-medium text-gray-500 text-center">1x</div>
          <div className={boxClass} />
          <div className={boxSize} />
          <div className={boxSize} />
          <div className={boxSize} />
          <div className={boxSize} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className={boxSize} />
          <div className={boxSize} />
          <div className={boxSize} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className={boxSize} />
          <div className={boxSize} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className={boxSize} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className={boxClass} />
          <div className="text-xs text-gray-500 text-center">Day 1</div>
          <div className="text-xs text-gray-500 text-center">Day 2</div>
          <div className="text-xs text-gray-500 text-center">Day 3</div>
          <div className="text-xs text-gray-500 text-center">Day 4</div>
          <div className="text-xs text-gray-500 text-center">Day 5</div>
        </div>
        <div className="text-xs text-gray-500 text-center mt-3">
          Deposit day
        </div>
      </div>
    </div>
  )
}

const WhaleTooltip = () => {
  const boxSize = 'h-6'
  // const boxClass = `${boxSize} bg-blue-500`
  return (
    <div>
      <div className="text-xs text-gray-500 text-center mb-3">
        Bonus multiplier
      </div>
      <div className="inline-block">
        <div className="grid grid-cols-4 gap-x-2 gap-y-1">
          <div className="font-medium text-gray-500 text-center pb-1">
            1.05x
          </div>
          <div className="font-medium text-gray-500 text-center pb-1">1.1x</div>
          <div className="font-medium text-gray-500 text-center pb-1">
            1.15x
          </div>
          <div className="font-medium text-gray-500 text-center pb-1">1.2x</div>
          <div className={boxSize} />
          <div className={boxSize} />
          <div className={boxSize} />
          <EthBox />

          <div className={boxSize} />
          <div className={boxSize} />
          <EthBox />
          <EthBox />

          <div className={boxSize} />
          <EthBox />
          <EthBox />
          <EthBox />

          <EthBox />
          <EthBox />
          <EthBox />
          <EthBox />
          <div className="text-xs text-gray-500 text-center">10-100</div>
          <div className="text-xs text-gray-500 text-center">100-1K</div>
          <div className="text-xs text-gray-500 text-center">1K-2K</div>
          <div className="text-xs text-gray-500 text-center">2K+</div>
        </div>
        <div className="text-xs text-gray-500 text-center mt-3">ETH amount</div>
      </div>
    </div>
  )
}

const EthBox = () => (
  <div className="flex justify-center">
    <img src={ethSrc} alt="ETH" className="w-8 h-8" />
  </div>
)
