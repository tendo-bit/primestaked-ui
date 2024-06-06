import { ArrowUpRight } from '~/components/Icons'

export const ExitContent = () => {
  return (
    <div className="bg-white text-center rounded-b-3xl py-24 text-xl font-medium">
      <em>Still cooking...</em><br />
      <br />
      You can always <a href="https://app.uniswap.org/swap?inputCurrency=0x6ef3D766Dfe02Dc4bF04aAe9122EB9A0Ded25615&outputCurrency=ETH" className="text-red-500" target="_blank">sell primeETH on Uniswap</a>.
    </div>
  )
}
