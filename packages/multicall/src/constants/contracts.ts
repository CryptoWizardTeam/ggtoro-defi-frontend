import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

export const MULTICALL_ADDRESS: { [key in ChainId]?: Address } = {
  [ChainId.ZKSYNC]: '0x95071cBD09184083E7F732a710c2e30c9882Fd5f',
  [ChainId.BSC]: '0x39eecaE833c944ebb94942Fa44CaE46e87a8Da17',
  [ChainId.ETHEREUM]: '0xC0916D7E360c31D5F6D0c497E6a36B7B0E80e3cf',
  [ChainId.ARBITRUM_ONE]: '0xbFfE39cDD04f0183e0493c1Deb6E275c5cf84AdF',
  [ChainId.POLYGON_ZKEVM]: '0xe05b539447B17630Cb087473F6b50E5c5f73FDeb',
  [ChainId.LINEA]: '0x6E6B30d65D605DAa4CaC65eB270100Ecca36b140',
  [ChainId.BASE]: '0x3EFaAb8D7A631cfF5ccF5f149d1Bbb3B5bfda2C0',
  [ChainId.OPBNB]: '0xeF1511D29fB37cb87E33339EeC9BE13AB46E3b50',

  [ChainId.SCROLL]: '0x052a99849Ef2e13a5CB28275862991671D4b6fF5',

  [ChainId.POLYGON]: '0x37885f526F2461c0E5021f1143A52F3bDe446a49', // messi-polygon GgtoroInterfaceMulticallV2 contract address

  // Testnets
  [ChainId.BSC_TESTNET]: '0xeeF6ff30cF5D5b8aBA0DE16A01d17A0697a275b5',
  [ChainId.GOERLI]: '0xD55CAFAB2Ffa1139Be46bc5C0b8259c620050dFC',
  [ChainId.SEPOLIA]: '0x1b5E15FF5B2CdC01decCee1799a2A7772B0DE1D4', // messi-sepolia, GgtoroInterfaceMulticallV2
  [ChainId.ARBITRUM_GOERLI]: '0xe12a5c707Fb528acbE6117b20AF1f7c20b0A8077',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x236e713bFF45adb30e25D1c29A887aBCb0Ea7E21',
  [ChainId.ZKSYNC_TESTNET]: '0x8A23CB45E5F4d5a1b2DB673663Ea2aAedc48acff',
  [ChainId.LINEA_TESTNET]: '0x990010b6DBA3e7faa025790bC0433A9f690c65F3',
  [ChainId.BASE_TESTNET]: '0x6F7f93D929d6FBaF16c245e42846EF21aee23437',
  [ChainId.OPBNB_TESTNET]: '0x6A70ED893D85cf6D4059e1CF3e63a48e4D204D32',

  [ChainId.SCROLL_SEPOLIA]: '0x052a99849Ef2e13a5CB28275862991671D4b6fF5',
}