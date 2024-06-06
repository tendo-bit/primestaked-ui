import { useTime } from 'react-time-sync'
import { Link } from '@remix-run/react'

import { Countdown } from '~/components/Countdown'
import { eigenWeekEnd, eigenWeekStart } from '~/utils/constants'
import eigenLogoSrc from '~/assets/eigen-logo.svg'

export const DepositsCountdown = () => {
  const now = useTime() * 1000
  const eigenStarted = now >= eigenWeekStart.getTime()
  const eigenEnded = now >= eigenWeekEnd.getTime()
  if (eigenEnded) {
    return null
  }
  return (
    <div className="bg-black py-6 sm:py-8 w-full text-white flex px-4 md:px-8 lg:px-12 flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-between">
      {eigenEnded ? (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <div className="min-w-0">
            <img src={eigenLogoSrc} alt="eigenLayer" className="w-8 sm:w-12" />
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start sm:gap-x-4">
            <div className="text-lg sm:text-2xl font-medium leading-relaxed text-center sm:text-left">
              Native ETH Restaking is Live!
            </div>
            {/* <div className="text-xs sm:text-lg text-balance leading-snug text-center sm:text-left mt-2 sm:mt-0">
              Earn more EigenLayer points and get a{' '}
              <span className="font-bold">1.5X boost</span> on your{' '}
              <span className="text-red-500">primeETH</span> XP.
            </div> */}
          </div>
        </div>
      ) : eigenStarted ? (
        <>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="min-w-0">
              <img
                src={eigenLogoSrc}
                alt="eigenLayer"
                className="w-8 sm:w-12"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="text-lg sm:text-2xl font-medium leading-relaxed text-center sm:text-left">
                Eigen Bonus Week Ends Soon
              </div>
              <div className="text-sm sm:text-lg text-balance leading-snug text-center sm:text-left">
                Earn up to 156 EigenLayer Points per ETH Deposited!
              </div>
            </div>
          </div>
          <div className="">
            <Countdown to={eigenWeekEnd} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="min-w-0">
              <img
                src={eigenLogoSrc}
                alt="eigenLayer"
                className="w-8 sm:w-12"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="text-lg sm:text-2xl font-medium leading-relaxed text-center sm:text-left">
                Eigen Bonus Week Starts Soon
              </div>
              <div className="text-sm sm:text-lg text-balance leading-snug text-center sm:text-left">
                Earn up to 156 EigenLayer Points per ETH Deposited!
              </div>
            </div>
          </div>
          <div className="">
            <Countdown to={eigenWeekStart} />
          </div>
        </>
      )}
      <Link
        to="/app/restake"
        className="mt-3 sm:mt-0 sm:mr-5 w-full sm:w-auto sm:px-20 py-3 text-sm rounded-full leading-tight font-medium hover:bg-white hover:text-black transition-all duration-200 ease-in-out border border-white flex items-center gap-2 justify-center"
      >
        Start Earning
      </Link>
    </div>
  )
}
