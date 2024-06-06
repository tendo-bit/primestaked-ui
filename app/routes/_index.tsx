import type { MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'

import { RedBox } from '~/components/landing/RedBox'
import { Token } from '~/components/landing/Token'
import { FaqQuestion } from '~/components/landing/FaqQuestion'
import { Footer } from '~/components/landing/Footer'

import { useTVL } from '~/utils/hooks/useTVL'

import Logo from '~/assets/prime-staked.svg'
import Cow from '~/assets/landing/cow.svg'
import EigenStar from '~/assets/landing/eigen-star.svg'
import Pan from '~/assets/landing/pan.svg'
import EthStakingSrc from '~/assets/landing/eth-staking.svg'

import HowItWorksSrc from '~/assets/landing/how-it-works.png'
import OethSrc from '~/assets/landing/tokens/oeth_token.svg'
import StethSrc from '~/assets/landing/tokens/steth_token.svg'
import SfrxSrc from '~/assets/landing/tokens/frxeth_token.svg'
import MethSrc from '~/assets/landing/tokens/meth_token.svg'
import EthxSrc from '~/assets/landing/tokens/ethx_token.svg'
import RethSrc from '~/assets/landing/tokens/reth_token.svg'
import SwethSrc from '~/assets/landing/tokens/sweth_token.svg'
import EthSrc from '~/assets/landing/tokens/eth_token.svg'
import EthSimpleSrc from '~/assets/landing/eth-simple.svg'
import LimitedTime from '~/assets/landing/limited-time.svg'
import EigenStar2 from '~/assets/landing/eigen-star2.svg'
import PrimeBonusSrc from '~/assets/landing/prime-bonus.svg'

import currencyExchangeSrc from '~/assets/landing/currency_exchange.svg'
import waterDropSrc from '~/assets/landing/water_drop.svg'
import noCheckSrc from '~/assets/landing/no_check.svg'
import { useAPY } from '~/utils/useAPY'
import { Tooltip } from '~/components/Tooltip'

export const meta: MetaFunction = () => {
  return [
    { title: 'Prime Staked ETH' },
    { name: 'description', content: 'Welcome to Prime Staked ETH!' },
  ]
}

export default function Marketing() {
  const { tvl, tvlUsd } = useTVL()
  const apy = useAPY()

  return (
    <>
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-8 lg:px-12 py-8">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[147px]" />
        </Link>
        <a
          href="https://docs.primestaked.com"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:block ml-auto text-gray-950 hover:underline"
        >
          Docs
        </a>
        <Link
          to="/app/restake"
          className="hidden sm:block ml-8 btn-outline px-7 py-3 leading-snug"
        >
          Restake now
        </Link>
      </div>

      <div
        className={`bg-[bottom_-230px_right_130%] sm:bg-[bottom_-137%_right_0%] bg-no-repeat`}
        style={{ backgroundImage: `url(${Cow})` }}
      >
        <div className="mt-4 sm:mt-10 mx-auto w-full max-w-7xl pb-8 sm:pb-32 px-8 lg:px-12">
          <div className="text-4.5xl md:text-7xl text-gray-950 md:leading-[1.1] font-medium">
            Liquid restaking with
            <br className="hidden sm:block" />{' '}
            <span className="text-red-500 font-black">primeETH</span>
          </div>
          <div className="text-gray-500 text-lg md:text-3xl mt-6 md:mt-6 max-w-[1086px] z-10 text-balance font-heading">
            Stack ETH staking yield, EigenLayer points, and primeETH XP Points
            all while remaining liquid.
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center mt-8 sm:mt-16 mb-12 sm:mb-20 sm:pt-2 gap-x-4 gap-y-8 sm:gap-20">
            <div>
              <div className="text-gray-500 text-lg sm:text-2xl">
                Assets restaked
              </div>
              <div className="sm:mt-1 text-2xl sm:text-4.5xl font-bold text-gray-600">{`${tvl} ETH`}</div>
              <div className="mt-1 sm:mt-2 text-gray-600 font-medium text-sm sm:text-base">{`$${tvlUsd}`}</div>
            </div>
            <div className="border-r border-gray-border h-20 hidden sm:block" />
            <div>
              <div className="text-gray-500 text-lg sm:text-2xl">APY</div>
              <div className="sm:mt-1 text-2xl sm:text-4.5xl font-bold text-gray-600">
                {`${apy.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}%`}
              </div>
              <div className="mt-1 sm:mt-2 text-gray-600 font-medium flex items-center gap-3 text-sm sm:text-base flex-wrap">
                <div className="flex gap-3 items-center">
                  <div className="text-gray-200 text-lg sm:text-2xl font-medium">
                    +
                  </div>
                  <div>EigenLayer Points</div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="text-gray-200 text-lg sm:text-2xl font-medium">
                    +
                  </div>
                  <div>PrimeETH XP</div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="text-gray-200 text-lg sm:text-2xl font-medium">
                    +
                  </div>
                  <div>40% SSV Bonus</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/app/restake"
              className="block sm:inline text-center sm:w-auto btn sm:px-10 py-5 text-xl sm:text-2.66xl hover:cursor-pointer"
            >
              Restake ETH now
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12 flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold text-gray-950 mt-14 md:mt-[105px] flex content-center">
            Earn Triple Rewards
          </div>
          <div className="w-full flex justify-between mt-8 sm:mt-24 pt-2 sm:px-4">
            <div className="flex flex-col gap-4 sm:gap-8 flex-1">
              <div className="relative flex justify-center">
                <img
                  alt="ETH Staking"
                  src={EthStakingSrc}
                  className="h-20 sm:h-36"
                />
                <div className="h-[1ex] flex items-center absolute right-0 bottom-1/2 translate-x-1/2 translate-y-1/2 leading-0 sm:w-8 text-3xl sm:text-8xl font-medium font-heading text-gray-400">
                  +
                </div>
              </div>
              <div className="text-sm sm:text-4xl text-center text-balance leading-snug sm:leading-relaxed sm:mt-5">
                <span className="font-medium">ETH staking rewards</span>
                {' (3-5% APY)'}
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-8 flex-1">
              <div className="relative flex justify-center">
                <img
                  alt="ETH Staking"
                  src={EigenStar2}
                  className="h-20 sm:h-36"
                />
                <div className="h-[1ex] flex items-center absolute right-0 bottom-1/2 translate-x-1/2 translate-y-1/2 leading-0 sm:w-8 text-3xl sm:text-8xl font-medium font-heading text-gray-400">
                  +
                </div>
              </div>
              <div className="text-sm sm:text-4xl text-center text-balance leading-snug sm:leading-relaxed sm:mt-5">
                EigenLayer <br />
                points
              </div>
            </div>
            <div className="relative flex flex-col gap-4 sm:gap-8 flex-1">
              <img
                alt="ETH Staking"
                src={PrimeBonusSrc}
                className="h-20 sm:h-36"
              />
              <div className="text-sm sm:text-4xl text-center text-balance leading-snug sm:leading-relaxed sm:mt-5">
                <div className="text-red-500">primeETH</div>
                XP
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-24 mx-auto w-full max-w-8xl pb-28 px-4 md:px-8 lg:px-12 flex flex-col items-center">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 w-full px-3">
            <RedBox iconSrc={waterDropSrc} text="Stay liquid" />
            <RedBox iconSrc={noCheckSrc} text="No need to run a validator" />
            <RedBox
              iconSrc={currencyExchangeSrc}
              text="Get rewarded automatically"
            />
          </div>
        </div>
      </div>

      <div
        className="hidden bg-[#586CF8] text-white w-full sm:flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 py-24 bg-[bottom_left] sm:bg-[bottom_left] bg-no-repeat"
        style={{ backgroundImage: `url(${EigenStar})` }}
      >
        <div className="text-balance text-6xl text-center font-bold mb-16">
          For a limited time, PrimeStaked is giving away up to 1,000,000
          EigenLayer points
        </div>
        <a
          href="https://www.originprotocol.com/primestaked-eth-restaking"
          target="_blank"
          rel="noreferrer"
          className="mt-2 rounded-full px-20 py-4 border border-white text-2.66xl font-medium hover:bg-white hover:text-[#586CF8]"
        >
          Learn more
        </a>
      </div>

      <div className="mt-14 sm:mt-28 pt-2 mx-auto w-full max-w-8xl pb-20 sm:pb-24 px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="min-w-0 flex-1">
            <div className="text-4xl md:text-6xl font-bold text-gray-950 flex text-balance">
              Native ETH restaking now supported
            </div>
            <div className="text-lg sm:text-2xl mt-7 leading-relaxed text-gray-600 font-heading">
              To start earning, just deposit ETH and get primeETH in return. The
              LST deposit window is currently closed but may re-open in the
              future.
            </div>
          </div>
          <div className="mt-12 sm:mt-0 sm:px-24 min-w-0 flex items-center justify-center">
            <img src={EthSrc} alt="ETH" className="h-64 sm:h-80" />
          </div>
        </div>
      </div>

      <div
        className={`bg-[bottom_-50%_right_0%] bg-[length:50%] sm:bg-[bottom_-93%_right_0%] bg-no-repeat`}
        style={{ backgroundImage: `url(${Pan})` }}
      >
        <div className="mx-auto w-full max-w-8xl px-8 lg:px-16">
          <div className="text-4xl md:text-6xl font-bold text-gray-950">
            <span className="text-red-500">primeETH</span>
            {' is backed by hard assets'}
          </div>
        </div>
        <div className="px-8 mx-auto w-full max-w-8xl pb-24 sm:pb-56">
          <div className="grid grid-cols-3 sm:grid-cols-4 mt-8 sm:mt-20 gap-y-8 sm:gap-y-24 gap-x-6">
            <Token iconSrc={EthSrc} text="ETH" isActive={true} />
            <Token iconSrc={OethSrc} text="OETH" isActive={false} />
            <Token iconSrc={StethSrc} text="stETH" isActive={false} />
            <Token iconSrc={SwethSrc} text="swETH" isActive={false} />

            <Token iconSrc={EthxSrc} text="ETHx" isActive={false} />
            <Token iconSrc={MethSrc} text="mEth" isActive={false} />
            <Token iconSrc={RethSrc} text="rEth" isActive={false} />
            <Token iconSrc={SfrxSrc} text="sfrxETH" isActive={false} />
          </div>
        </div>
      </div>
      <div className="bg-white pt-16 sm:pt-28 pb-10 sm:pb-32">
        <div className="mx-auto w-full max-w-8xl px-8 lg:px-16">
          <div className="text-4xl sm:text-6xl font-bold text-gray-950 text-center">
            How do I acquire <span className="text-red-500">primeETH</span>?
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 sm:mt-16 gap-8 pt-2">
            <div className="border border-gray-500 rounded-3xl p-8 sm:p-10 flex flex-col items-center gap-6">
              <div className="flex items-center justify-center bg-red-500 rounded-full h-16 w-16 sm:h-24 sm:w-24 mt-1">
                <img
                  src={EthSimpleSrc}
                  alt="ETH"
                  className="h-12 sm:h-[74px] sm:w-[74px]"
                />
              </div>
              <div className="text-2xl sm:text-4xl font-medium leading-relaxed text-center">
                Deposit ETH on PrimeStaked
              </div>
              <div className="text-lg sm:text-2xl leading-normal text-balance text-center mb-3">
                Stay tuned to our Twitter for information on any future LST
                deposit windows.
              </div>
              <Link
                to="/app/restake"
                className="btn-outline text-sm mt-auto w-full sm:w-auto sm:px-20 py-3 mb-2 text-center"
              >
                Deposit now
              </Link>
            </div>
            <div className="border border-gray-500 rounded-3xl py-10 px-8 sm:px-16 flex flex-col items-center gap-6">
              <div className="flex items-center justify-center bg-red-500 rounded-full h-16 w-16 sm:h-24 sm:w-24 mt-1">
                <img
                  src={EthSimpleSrc}
                  alt="ETH"
                  className="h-12 sm:h-[74px] sm:w-[74px]"
                />
              </div>
              <div className="text-2xl sm:text-4xl font-medium leading-relaxed text-center">
                Buy it on Uniswap
              </div>
              <div className="text-lg sm:text-2xl leading-normal text-balance text-center mb-3">
                Our platform will handle the rest, providing you with three
                types of yield as your assets are restaked.
              </div>
              <a
                href="https://app.uniswap.org/swap?outputCurrency=0x6ef3D766Dfe02Dc4bF04aAe9122EB9A0Ded25615&inputCurrency=ETH"
                className="btn-outline text-sm mt-auto w-full sm:w-auto sm:px-20 py-3 mb-2 text-center"
                target="_blank"
                rel="noreferrer"
              >
                Visit Uniswap
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-8xl pt-10 sm:pt-12 pb-16 sm:pb-40 px-8 lg:px-16 flex flex-col items-center">
        <div className="text-4xl sm:text-6xl font-bold text-gray-950 text-center mb-20">
          How it works
        </div>
        <div
          style={{ backgroundImage: `url(${HowItWorksSrc})` }}
          className="w-full max-w-[1122px] bg-contain bg-no-repeat sm:ml-20 relative"
        >
          <div style={{ paddingTop: '56.25%' }} />
          <a
            href="https://www.originprotocol.com/primestaked-eth-restaking"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-0 right-0 w-[37%] h-[43%] text-transparent"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="bg-white pt-12 sm:pt-28 pb-12 sm:pb-32">
        <div className="mx-auto w-full max-w-8xl px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row">
          <div className="flex-1">
            <div className="text-4xl sm:text-6xl font-bold text-gray-950 text-balance">
              Refer your friends and earn extra{' '}
              <span className="text-red-500">primeETH</span>
              {' XP'}
            </div>
            <div className="mt-10 text-gray-500 text-lg sm:text-3xl text-balance font-heading">
              For a limited time only, earn 20% of the XP points accrued by your
              referrals. Anyone who uses a referral link also earns 20% more XP.{' '}
              <Tooltip size={24} className="p-4 text-gray-500">
                20% referral bonus only applies to base XP earned, not including
                other points multiplers.
              </Tooltip>
              <div className="mt-4 sm:mt-10">
                Launch our app to get the referral link.
              </div>
            </div>
            <div className="mt-12 sm:mt-20">
              <Link
                to="/app/restake"
                className="btn block sm:inline text-center px-20 py-5 text-2.66xl hover:cursor-pointer"
              >
                Launch App
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:w-2/5">
            <img src={LimitedTime} alt="Limited Time" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-8xl sm:pt-10 pb-24 px-8 lg:px-16 flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-bold text-gray-950 mt-[74px] md:mt-[54px] text-center w-full">
          FAQs
        </div>
        <FaqQuestion
          question="What is EigenLayer and Restaking?"
          answer="EigenLayer is a platform that enhances the security of various protocols by integrating them with Ethereum's security model through data availability services, eliminating the need for protocols to establish their own set of validators. It achieves this through a suite of smart contracts and enables Ethereum stakers to restake their tokens on EigenLayer. By doing so, stakers can earn extra yield while taking on the risk of slashing, using EigenLayer's Actively Validator Services (AVS) to secure multiple networks."
        />
        <FaqQuestion
          question="What type of fees do you charge?"
          answer="PrimeStaked does not charge any fees for now on EigenLayer Restaked points or XP. 100% of these rewards are passed onto the holder. More details on the fee model will be shared in the future. Rest assured, redemptions will be enabled before fees are turned on."
        />
        <FaqQuestion
          question="Can I withdraw my funds?"
          answer="Withdrawals will be enabled in the near future. Liquidity is available on Uniswap enabling conversion of primeETH to ETH for those needing to exit."
        />
      </div>
      <Footer />
    </>
  )
}
