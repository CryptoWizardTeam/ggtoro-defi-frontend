import { ChainId } from '@pancakeswap/chains'

export const SUPPORTED_CHAIN_IDS = [
  ChainId.BSC,
  ChainId.BSC_TESTNET,
  ChainId.ETHEREUM,
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.ZKSYNC,
  ChainId.ZKSYNC_TESTNET,
  ChainId.LINEA_TESTNET,
  ChainId.POLYGON_ZKEVM_TESTNET,
  // ChainId.GOERLI, // messi
  // ChainId.SEPOLIA, // messi-sepolia
  // ChainId.POLYGON, // messi-polygon
] as const

export type SupportedChainId = (typeof SUPPORTED_CHAIN_IDS)[number]
