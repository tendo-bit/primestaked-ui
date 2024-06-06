import { useReadContracts } from 'wagmi'
import { formatEth, formatUSD } from '~/utils/bigint'
import { parseAbi } from 'viem'

import { primeETHABI, oracleAbi } from '~/utils/abis'
import { contracts, lrtOraclePriceMethod } from '~/utils/constants'

export const useTVL = () => {

  const { data } = useReadContracts({
    contracts: [
      {
        abi: parseAbi([
          `function ${lrtOraclePriceMethod}() view returns (uint256)`
        ]),
        address: contracts.lrtOracle,
        functionName: lrtOraclePriceMethod
      },
      {
        abi: primeETHABI,
        address: contracts.primeETH,
        functionName: 'totalSupply'
      },
      {
        abi: oracleAbi,
        address: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
        functionName: 'latestAnswer'
      }
    ]
  })

  if (!data) {
    return {
      tvl: '...',
      tvlUsd: '...'
    }
  }

  let rsETHPrice = 0n
  let tvl = 0n
  let tvlUsd = 0n

  try {
    rsETHPrice = data[0].result
    tvl = (rsETHPrice * data[1].result) / 10n ** 18n
    tvlUsd = (tvl * data[2].result) / 10n ** 8n
  } catch (e) {
    /* Ignore */
  }

  return {
    tvl: tvl ? formatEth(tvl, true, 0) : '-',
    tvlUsd: tvlUsd ? formatUSD(tvlUsd, 0) : '-'
  }
}