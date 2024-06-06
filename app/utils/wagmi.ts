import { http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

export const config = getDefaultConfig({
  appName: 'PrimeStakedETH',
  projectId: 'b6187205b37dc9d704772f16dca5b71e',
  chains: [mainnet],
  ssr: true,

  transports: {
    [mainnet.id]: http(
      'https://eth-mainnet.g.alchemy.com/v2/EP6A_NXNsgvvMTKyz2DWegRdJTliwLT_',
    ),
    // [mainnet.id]: http('http://localhost:8545')
  },
})
