import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

import { ProfileIcon } from '~/components/Icons'
import { truncateAddress } from '~/utils/string'

export const ConnectButton = () => {
  const { isConnected, address } = useAccount()
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()

  return (
    <>
      {isConnected ? (
        <button
          className="btn-secondary pl-1.5 pr-4 py-1.5 text-sm flex items-center gap-3 font-medium self-stretch text-gray-500"
          onClick={openAccountModal}
        >
          <div className="rounded-full overflow-hidden">
            <ProfileIcon />
          </div>
          <div>{truncateAddress(address)}</div>
        </button>
      ) : (
        <button className="btn px-6 py-3" onClick={openConnectModal}>
          Connect
        </button>
      )}
    </>
  )
}
