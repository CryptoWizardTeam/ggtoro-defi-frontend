import { useCallback } from 'react'
import { useEsNFTPoolContract } from 'hooks/useContract1'
import { useAccount } from 'wagmi'
import { parseUnits } from 'viem'

const options = {}

const harvest = async (poolContract, tokenId) => {
  return poolContract.write.harvestPosition([tokenId], { ...options })
}

const add = async (poolContract, tokenId, amount) => {
  return poolContract.write.addToPosition([tokenId, amount], { ...options })
}

const boost = async (poolContract, tokenId, amount) => {
  return poolContract.write.boost([tokenId, amount], { ...options })
}

const unboost = async (poolContract, tokenId, amount) => {
  return poolContract.write.unboost([tokenId, amount], { ...options })
}

const withdrawFromPosition = async (poolContract, tokenId, amount) => {
  return poolContract.write.withdrawFromPosition([tokenId, amount], { ...options })
}

const renewLockPosition = async (poolContract, tokenId) => {
  return poolContract.write.renewLockPosition([tokenId], { ...options })
}

const lockPosition = async (poolContract, tokenId, duration) => {
  return poolContract.write.lockPosition([tokenId, duration], { ...options })
}

const splitPosition = async (poolContract, tokenId, amount) => {
  return poolContract.write.splitPosition([tokenId, amount], { ...options })
}

const mergePositions = async (poolContract, tokenIds, duration) => {
  return poolContract.write.mergePositions([tokenIds, duration], { ...options })
}

const useEsNFTCalls = (poolAddress: string) => {
  const { address } = useAccount()
  const poolContract = useEsNFTPoolContract(poolAddress)

  const handleHarvest = useCallback(
    async (tokenId) => {
      return harvest(poolContract, tokenId)
    },
    [poolContract],
  )

  const handleAddPosition = useCallback(
    async (tokenId, amount) => {
      return add(poolContract, tokenId, parseUnits(amount, 18))
    },
    [poolContract],
  )

  const handleBoost = useCallback(
    async (tokenId, amount) => {
      return boost(poolContract, tokenId, parseUnits(amount, 18))
    },
    [poolContract],
  )

  const handleUnBoost = useCallback(
    async (tokenId, amount) => {
      return unboost(poolContract, tokenId, parseUnits(amount, 18))
    },
    [poolContract],
  )

  const handleWithdraw = useCallback(
    async (tokenId, amount) => {
      return withdrawFromPosition(poolContract, tokenId, parseUnits(amount, 18))
    },
    [poolContract],
  )

  const handleRenewLockPosition = useCallback(
    async (tokenId, amount) => {
      return renewLockPosition(poolContract, tokenId)
    },
    [poolContract],
  )

  const handleLockPosition = useCallback(
    async (tokenId, duration) => {
      return lockPosition(poolContract, tokenId, duration)
    },
    [poolContract],
  )

  const handleSplitPosition = useCallback(
    async (tokenId, amount) => {
      return splitPosition(poolContract, tokenId, parseUnits(amount, 18))
    },
    [poolContract],
  )

  const handleMergePositions = useCallback(
    async (tokenIds, duration) => {
      return mergePositions(poolContract, tokenIds, duration)
    },
    [poolContract],
  )

  return {
    onHarvest: handleHarvest,
    onAddPosition: handleAddPosition,
    onBoost: handleBoost,
    onUnBoost: handleUnBoost,
    onWithdraw: handleWithdraw,
    onRenewLockPosition: handleRenewLockPosition,
    onLockPosition: handleLockPosition,
    onSplitPosition: handleSplitPosition,
    onMergePositions: handleMergePositions,
  }
}

export default useEsNFTCalls
