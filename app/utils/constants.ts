import ethxSrc from '~/assets/ethx.svg'
import sfrxSrc from '~/assets/sfrx.svg'
import stEthSrc from '~/assets/stETH.svg'
import mEthSrc from '~/assets/mETH.svg'
import oethSrc from '~/assets/oeth.svg'
import rethSrc from '~/assets/rETH.svg'
import swethSrc from '~/assets/swETH.svg'

export interface Tag {
  title: string
  color: string
  tooltip?: string
}

export interface Asset {
  symbol: string
  src: string
  name: string
  tags?: Tag[]
}

export const assets = [
  {
    symbol: 'OETH',
    src: oethSrc,
    name: 'Origin Ether',
    tags: [{ title: '2x primeETH XP Boost', color: 'red' }],
  },
  { symbol: 'stETH', src: stEthSrc, name: 'Lido Staked ETH' },
  { symbol: 'mETH', src: mEthSrc, name: 'Mantle Staked Ether' },
  {
    symbol: 'ETHx',
    src: ethxSrc,
    name: 'Stader ETHx',
    tags: [
      {
        title: 'Eigen Turbocharge',
        color: 'green',
        tooltip: `1M Extra EigenLayer pts - 50 extra EL pts per ETHx minted and restaked`,
      },
    ],
  },
  { symbol: 'sfrxETH', src: sfrxSrc, name: 'Staked Frax Ether' },
  { symbol: 'swETH', src: swethSrc, name: 'Swell ETH' },
  {
    symbol: 'rETH',
    src: rethSrc,
    name: 'Rocket Pool ETH',
    tags: [
      {
        title: '1.1x primeETH XP Boost',
        color: 'red-outline',
      },
    ],
  },
] as Asset[]

// Ensure there is a contract address for each asset above
export const contracts = {
  ETHx: '0xa35b1b31ce002fbf2058d22f30f95d405200a15b',
  stETH: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
  sfrxETH: '0xac3E018457B222d93114458476f3E3416Abbe38F',
  OETH: '0x856c4Efb76C1D1AE02e20CEB03A2A6a08b0b8dC3',
  mETH: '0xd5f7838f5c461feff7fe49ea5ebaf7728bb0adfa',
  rETH: '0xae78736cd615f374d3085123a210448e74fc6393',
  swETH: '0xf951e335afb289353dc249e82926178eac7ded78',

  primeETH: '0x6ef3D766Dfe02Dc4bF04aAe9122EB9A0Ded25615',
  lrtOracle: '0xA755c18CD2376ee238daA5Ce88AcF17Ea74C1c32',
  lrtDepositPool: '0xA479582c8b64533102F6F528774C536e354B8d32',
  lrtConfig: '0xF879c7859b6DE6FAdaFB74224Ff05b16871646bF',
} as const

export const lrtOraclePriceMethod = 'primeETHPrice'

export const depositsEndDate = new Date()
depositsEndDate.setUTCFullYear(2024, 1, 9)
depositsEndDate.setUTCHours(19, 55, 0, 0)

export const eigenWeekStart = new Date()
eigenWeekStart.setUTCFullYear(2024, 2, 18)
eigenWeekStart.setUTCHours(19, 0, 0, 0)

export const eigenWeekEnd = new Date()
eigenWeekEnd.setUTCFullYear(2024, 2, 25)
eigenWeekEnd.setUTCHours(19, 0, 0, 0)
