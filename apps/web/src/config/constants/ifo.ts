import { ERC20Token } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { bscTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET } from './lp'
import { Ifo } from './types'

export const cakeBnbLpToken = new ERC20Token(ChainId.BSC, CAKE_BNB_LP_MAINNET, 18, 'CAKE-BNB LP')

const ifos: Ifo[] = [
  {
    id: 'sable',
    address: '0xD247FFf8005917aDc02f59Ba8F2Dde02c13ee92d',
    isActive: false,
    cIFO: true,
    name: 'SABLE',
    plannedStartTime: 1690372800, // Wed Jul 26 2023 12:00:00 UTC
    poolBasic: {
      raiseAmount: '$156,000',
    },
    poolUnlimited: {
      raiseAmount: '$624,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.sable,
    campaignId: '512200000',
    articleUrl: 'https://elden.fi/voting/proposal/0x01ced179a39d30bc11436fd7f578ae45089bacaace57caa47881146fce7586ba',
    tokenOfferingPrice: 0.06,
    version: 3.2,
    twitterUrl: 'https://twitter.com/SableFinance',
    description:
      'Sable Finance is a decentralized stablecoin protocol that allows users to draw interest-free loans, minting USDS, a USD-pegged stablecoin.',
    vestingTitle:
      '$SABLE is the secondary token issued by Sable Finance, enabling users to capture fee revenue and participate in governance. $SABLE will also be emitted to Stability Providers and Frontend Operators.',
  },
  {
    id: 'arena',
    address: '0xC7d259712a26fa33a9a94cFB58964a67dAB27095',
    isActive: false,
    name: 'ARENA',
    plannedStartTime: 1673870400, // Mon Jan 16 2023 12:00:00 UTC
    poolBasic: {
      raiseAmount: '$350,000',
    },
    poolUnlimited: {
      raiseAmount: '$1,050,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.arena,
    campaignId: '512100000',
    articleUrl: 'https://elden.fi/voting/proposal/0x06598b682d9f33ec5ea0c2acf8eba13dea7c63fa08dd2c4dfd7bc7af16920d51',
    tokenOfferingPrice: 0.04,
    version: 3.2,
    twitterUrl: 'https://twitter.com/ESPL_GLOBAL',
    description:
      'The Esports Players League (ESPL) Arena is a platform that hosts global Esports tournaments and coordinates different aspects such as setting of tournament parameters, score-keeping, prize pool payouts via crypto and more.',
    vestingTitle: 'Use $ARENA to enjoy premium features on ESPL’s Esports tournament platform',
  },
  {
    id: 'squad',
    address: '0x57EB2e676863435A140F8Bc2a0F0e955C36ED446',
    isActive: false,
    cIFO: true,
    name: 'SQUAD',
    plannedStartTime: 1671105600,
    poolBasic: {
      raiseAmount: '$350,000',
    },
    poolUnlimited: {
      raiseAmount: '$525,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.squad,
    campaignId: '512000000',
    articleUrl: 'https://elden.fi/voting/proposal/0x0557149d1dc2f12f4c97b68f9d214fc52acd64aa67b29bde91e19caef30a3153',
    tokenOfferingPrice: 0.035,
    version: 3.2,
    twitterUrl: 'https://twitter.com/Superpow_Squad',
    description:
      'Superpower Squad a super-hero themed mobile shooter with 6 game play modes. It has undergone 3 years of game development from an established gaming studio with the help of crypto native partners.',
    vestingTitle: "$SQUAD - Utility token in Superpower Squad's world, lock into SuperDao to participate Governance.",
  },
  {
    id: 'mgp',
    address: '0x3FE5A79d4264fe65A1a9E3938286428a0E2e214D',
    isActive: false,
    name: 'MGP',
    plannedStartTime: 1666872000,
    poolBasic: {
      raiseAmount: '$437,500',
    },
    poolUnlimited: {
      raiseAmount: '$1,312,500',
    },
    currency: bscTokens.cake,
    token: bscTokens.mgp,
    campaignId: '511900000',
    articleUrl: 'https://elden.fi/voting/proposal/0x5bbaee587df5b7e9b52e2b35f35f30afa08e15ab7098c73cb2503319c8d8ce44',
    tokenOfferingPrice: 0.025,
    version: 3.2,
    twitterUrl: 'https://twitter.com/magpiexyz_io',
    description:
      'Magpie is a customized fork of Convex that helps users in the Wombat ecosystem to obtain better yields and voting power',
    vestingTitle:
      'Earn $MGP by converting $WOM and providing liquidities; Lock $MGP to share revenue and receive bribes.',
  },
  {
    id: 'wmx',
    address: '0xC202eb5f2487DA3675c4aAa2C3D2c071078699c1',
    isActive: false,
    name: 'WMX',
    poolBasic: {
      raiseAmount: '$300,000',
    },
    poolUnlimited: {
      raiseAmount: '$900,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.wmx,
    campaignId: '511800000',
    articleUrl: 'https://elden.fi/voting/proposal/0x8bef379b1f3e1f42e180d877edd3ef5b11476300f9de37196904ca4c2070b470',
    tokenOfferingPrice: 0.3,
    version: 3.2,
    twitterUrl: 'https://twitter.com/WombexFinance',
    description: 'Wombex is a customized fork of Convex, designed specifically for the Wombat Exchange ecosystem',
    vestingTitle: 'Earn $WMX by staking assets; Lock $WMX for Fee-Sharing and Wombat Governance',
  },
  {
    id: 'krs',
    cIFO: true,
    address: '0x4CCB9960dEF2f9a55D1a0454a134a8Adb0047B8e',
    isActive: false,
    name: 'KRS',
    poolBasic: {
      raiseAmount: '$420,000',
    },
    poolUnlimited: {
      raiseAmount: '$630,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.krs,
    campaignId: '511700000',
    articleUrl: 'https://elden.fi/voting/proposal/bafkreicqqvgqpwtnhmlfdwz3ya3hnjm6nvgqbf3fpi4vbxmvqyv6yi3enu',
    tokenOfferingPrice: 0.035,
    version: 3.2,
    twitterUrl: 'https://twitter.com/KingdomRaids',
    description: 'Kingdom Raids is a blockchain-based strategy role-playing game (RPG) game with a NFT metaverse',
    vestingTitle: '$KRS - utility token for Kingdom Raids, a role-playing game (RPG) game.',
  },
  {
    id: 'co',
    address: '0x8baEEE7d68cB332C63B3E4A8740072121070A2df',
    isActive: false,
    name: 'CO',
    poolBasic: {
      raiseAmount: '$367,500',
    },
    poolUnlimited: {
      raiseAmount: '$1,102,500',
    },
    currency: bscTokens.cake,
    token: bscTokens.co,
    campaignId: '511600000',
    articleUrl: 'https://elden.fi/voting/proposal/bafkreiddual5o7vzfcwuazw3lgckis66hka4xytqkttqg2wjtea5pywohy',
    tokenOfferingPrice: 0.035,
    version: 3.2,
    twitterUrl: 'https://twitter.com/Coritecom',
    description:
      'Corite is a blockchain-based music platform jointly powered by fans and artists to finance and promote music in a unique Engage-to-Earn (E2E) model.',
    vestingTitle: '$CO - utility token for the Corite Experience!',
  },
  {
    id: 'hoop',
    address: '0x326e9E1B685C7F366fb320e7eC59599F3d88b1a2',
    isActive: false,
    cIFO: true,
    name: 'HOOP',
    poolBasic: {
      raiseAmount: '$357,472.50',
    },
    poolUnlimited: {
      raiseAmount: '$834,102.50',
    },
    currency: bscTokens.cake,
    token: bscTokens.hoop,
    campaignId: '511500000',
    articleUrl: 'https://elden.fi/voting/proposal/bafkreicsc2nevwvyp7ot5ewkmujvor3bcafh372kuxzncojqbuabnpwupe',
    tokenOfferingPrice: 0.055,
    version: 3.2,
    twitterUrl: 'https://twitter.com/DinosChibi',
    description: `Chibi Dinos is a basketball and dinosaur themed metaverse with games such as Primal Hoop, an arcade basketball game with an adventure role-playing game (RPG) mode and Primal Pick'em, a predictive play-to earn game (P2E).`,
    vestingTitle: '$HOOP - In-game currency for the Chibi Dinos Gaming Universe',
  },
  {
    id: 'wom',
    address: '0x98828e9D69E49104a62ecb4FA3d6F9e06A295CBA',
    isActive: false,
    name: 'WOM',
    poolBasic: {
      raiseAmount: '$210,000',
    },
    poolUnlimited: {
      raiseAmount: '$1,890,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.wom,
    campaignId: '511400000',
    articleUrl: 'https://elden.fi/voting/proposal/bafkreieqv7mbzmumyftstt6l32x6okfzq4syrea7k5zbqgohhcekcvbduu',
    tokenOfferingPrice: 0.075,
    version: 3.2,
    twitterUrl: 'https://twitter.com/WombatExchange',
    description: 'Wombat Exchange is a next generation multi-chain stableswap native to BNB Chain.',
    vestingTitle: 'Earn $WOM by staking stablecoins; Lock $WOM to maximize stablecoin yields',
  },
  {
    id: 'peel',
    address: '0x35Bb6Dd4E8C63491057c32621c8cDdE43BabE201',
    isActive: false,
    name: 'Meta Apes ($PEEL)',
    poolBasic: {
      raiseAmount: '$400,000',
    },
    poolUnlimited: {
      raiseAmount: '$1,600,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.peel,
    campaignId: '511300000',
    articleUrl: 'https://elden.fi/voting/proposal/bafkreibomj5nilvyckdro7ztmm62syt55dcfnonxs63ji6hm2ijq35lru4',
    tokenOfferingPrice: 0.04,
    version: 3.2,
    twitterUrl: 'https://twitter.com/MetaApesGame',
    description:
      'Meta Apes is a free-to-play, play-and-earn massively multiplayer online (MMO) strategy game designed for mobile and the first game to launch on the BNB Sidechain with their own dedicated chain, Ape Chain.',
    vestingTitle: 'Utilize $PEEL for gas and governance in the Meta Apes ecosystem!',
  },
  {
    id: 'trivia',
    address: '0x23C520d8227524E2cDD00360358864fF3fFC36b4',
    isActive: false,
    name: 'TRIVIA',
    poolBasic: {
      raiseAmount: '$350,000',
    },
    poolUnlimited: {
      raiseAmount: '$1,400,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.trivia,
    campaignId: '511200000',
    articleUrl: 'https://elden.fi/voting/proposal/bafkreihrc2d55vrowbn2oajzs77ffv73g4hzch2e7wulnuccmbwl5u4hvq',
    tokenOfferingPrice: 0.035,
    version: 3.2,
    telegramUrl: 'https://t.me/TriviansGlobal',
    twitterUrl: 'https://twitter.com/PlayTrivians',
    description:
      'Trivian is a trivia gaming platform with different game modes such as multiplayer mode, single player mode, 1v1 games, instant play, scheduled tournaments, and live shows … all while earning TRIVIA tokens!',
    vestingTitle: 'Earn $TRIVIA For Each Question You Answer Correctly',
  },
  {
    id: 'duet',
    address: '0xDF24BE326af4c1fb888f567f41D9a981A4752cf1',
    isActive: false,
    name: 'DUET',
    poolBasic: {
      raiseAmount: '$360,000',
    },
    poolUnlimited: {
      raiseAmount: '$1,440,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.duet,
    campaignId: '511190000',
    articleUrl: 'https://elden.fi/voting/proposal/QmXwoYYd8rkahVbxiGKsTa4rYRRFWPxhRGAHy3hVwK3Q2z',
    tokenOfferingPrice: 0.3,
    version: 3.1,
    telegramUrl: 'https://t.me/duetprotocol',
    twitterUrl: 'https://twitter.com/duetprotocol',
    description:
      'DUET Protocol is a multi-chain synthetic assets ecosystem, enabling pegged assets from various markets – from individual stocks, to indexes, ETFs, and commodities.',
  },
  {
    id: 'era',
    address: '0x527201A43f8da24cE9B7C21744a0706942F41Fa3',
    isActive: false,
    name: 'ERA (Game of Truth)',
    poolBasic: {
      raiseAmount: '$360,000',
    },
    poolUnlimited: {
      raiseAmount: '$1,440,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.era,
    campaignId: '511180000',
    articleUrl: 'https://elden.fi/voting/proposal/QmTfN1SKnFidF6XCDcpga7zAf69mFfhb26Zy9b85dYskxW',
    tokenOfferingPrice: 0.09,
    version: 3.1,
    telegramUrl: 'https://t.me/Era7_Official',
    twitterUrl: 'https://twitter.com/Era7_official',
    description:
      'Drawing from their experience in traditional games such as Awakening of Dragon, Era7: Game of Truth combines elements of DeFi, NFTs, and Trading Cards into a play-to-earn game steeped in mythology and magic.',
  },
  {
    id: 'froyo',
    address: '0xE0d6c91860a332068bdB59275b0AAC8769e26Ac4',
    isActive: false,
    name: 'Froyo Games (FROYO)',
    poolBasic: {
      raiseAmount: '$1,200,000',
    },
    poolUnlimited: {
      raiseAmount: '$2,800,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.froyo,
    campaignId: '511170000',
    articleUrl: 'https://elden.fi/voting/proposal/QmRhc4oC73jk4zxU4YkP1kudKHeq6qamgYA1sWoh6XJnks',
    tokenOfferingPrice: 0.06,
    version: 3,
    telegramUrl: 'https://t.me/froyogames',
    twitterUrl: 'https://twitter.com/realfroyogames',
    description: `Froyo Games is a game publisher and decentralized GameFi platform, with a NFT Marketplace that integrates NFTs with their games.\n \n FROYO tokens can be used to buy NFTs and participate in Froyo games`,
  },
  {
    id: 'dpt',
    address: '0x63914805A0864e9557eA3A5cC86cc1BA054ec64b',
    isActive: false,
    name: 'Diviner Protocol (DPT)',
    poolBasic: {
      raiseAmount: '$180,000',
    },
    poolUnlimited: {
      raiseAmount: '$420,000',
    },
    currency: bscTokens.cake,
    token: bscTokens.dpt,
    campaignId: '511160000',
    articleUrl: 'https://elden.fi/voting/proposal/QmQqpknHvuQwshVP259qFxfQsxiWbQ9SLMebohDeRwRzKg',
    tokenOfferingPrice: 0.025,
    version: 3,
  },
  {
    id: 'santos',
    address: '0x69B5D2Ab0cf532a0E22Fc0dEB0c5135639892468',
    isActive: false,
    name: 'FC Santos Fan Token (SANTOS)',
    poolBasic: {
      saleAmount: '120,000 SANTOS',
      raiseAmount: '$300,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '280,000 SANTOS',
      raiseAmount: '$700,000',
      distributionRatio: 0.7,
    },
    currency: bscTokens.cake,
    token: bscTokens.santos,
    campaignId: '511150000',
    articleUrl: 'https://elden.fi/voting/proposal/QmUqRxjwZCWeZWEdgV2vHJ6hex7jMW7i247NKFas73xc8j',
    tokenOfferingPrice: 2.5,
    version: 2,
  },
  {
    id: 'porto',
    address: '0xFDFf29dD0b4DD49Bf5E991A30b8593eaA34B4580',
    isActive: false,
    name: 'FC Porto Fan Token (PORTO)',
    poolBasic: {
      saleAmount: '250,000 PORTO',
      raiseAmount: '$500,000',
      distributionRatio: 0.5,
    },
    poolUnlimited: {
      saleAmount: '250,000 PORTO',
      raiseAmount: '$500,000',
      distributionRatio: 0.5,
    },
    currency: bscTokens.cake,
    token: bscTokens.porto,
    campaignId: '511140000',
    articleUrl: 'https://elden.fi/voting/proposal/QmaakXYpydAwCgTuSPe3R2ZNraRtkCbK6iBRqBCCdzqKEG',
    tokenOfferingPrice: 2,
    version: 2,
  },
  {
    id: 'dar',
    address: '0xb6eF1f36220397c434A6B15dc5EA616CFFDF58CE',
    isActive: false,
    name: 'Mines of Dalarnia (DAR)',
    poolBasic: {
      saleAmount: '6,000,000 DAR',
      raiseAmount: '$450,000',
      distributionRatio: 0.5,
    },
    poolUnlimited: {
      saleAmount: '6,000,000 DAR',
      raiseAmount: '$450,000',
      distributionRatio: 0.5,
    },
    currency: bscTokens.cake,
    token: bscTokens.dar,
    campaignId: '511130000',
    articleUrl: 'https://elden.fi/voting/proposal/QmeJenHcbY45eQxLRebzvpNk5qSCrj2wM1t4EAMHotFoJL',
    tokenOfferingPrice: 0.075,
    version: 2,
  },
  {
    id: 'dkt',
    address: '0x89ab9852155A794e371095d863aEAa2DF198067C',
    isActive: false,
    name: 'Duelist King (DKT)',
    poolBasic: {
      saleAmount: '75,000 DKT',
      raiseAmount: '$131,250',
      cakeToBurn: '$65,625',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '175,000 DKT',
      raiseAmount: '$306,250',
      cakeToBurn: '$153,125',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.dkt,
    campaignId: '511120000',
    articleUrl: 'https://elden.fi/voting/proposal/QmTRWdW9a65fAkyJy1wrAJRU548fNMAZhRUDrSxzMDLmwk',
    tokenOfferingPrice: 1.75,
    version: 2,
  },
  {
    id: 'kalmar',
    address: '0x1aFB32b76696CdF05593Ca3f3957AEFB23a220FB',
    isActive: false,
    name: 'Kalmar (KALM)',
    poolBasic: {
      saleAmount: '375,000 KALM',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '875,000 KALM',
      raiseAmount: '$2,500,000',
      cakeToBurn: '$1,250,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.kalm,
    campaignId: '511110000',
    articleUrl: 'https://pancakeswap.medium.com/kalmar-kalm-ifo-to-be-hosted-on-pancakeswap-4540059753e4',
    tokenOfferingPrice: 2.0,
    version: 2,
  },
  {
    id: 'hotcross',
    address: '0xb664cdbe385656F8c54031c0CB12Cea55b584b63',
    isActive: false,
    name: 'Hot Cross (HOTCROSS)',
    poolBasic: {
      saleAmount: '15,000,000 HOTCROSS',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '35,000,000 HOTCROSS',
      raiseAmount: '$1,750,000',
      cakeToBurn: '$875,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.hotcross,
    campaignId: '511100000',
    articleUrl: 'https://pancakeswap.medium.com/hot-cross-hotcross-ifo-to-be-hosted-on-pancakeswap-10e70f1f6841',
    tokenOfferingPrice: 0.05,
    version: 2,
  },
  {
    id: 'horizon',
    address: '0x6137B571f7F1E44839ae10310a08be86D1A4D03B',
    isActive: false,
    name: 'Horizon Protocol (HZN)',
    poolBasic: {
      saleAmount: '3,000,000 HZN',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '7,000,000 HZN',
      raiseAmount: '$1,750,000',
      cakeToBurn: '$875,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.hzn,
    campaignId: '511090000',
    articleUrl: 'https://pancakeswap.medium.com/horizon-protocol-hzn-ifo-to-be-hosted-on-pancakeswap-51f79601c9d8',
    tokenOfferingPrice: 0.25,
    version: 2,
  },
  {
    id: 'belt',
    address: '0xc9FBedC033a1c479a6AD451ffE463025E92a1d38',
    isActive: false,
    name: 'Belt (BELT)',
    poolUnlimited: {
      saleAmount: '150,000 BELT',
      raiseAmount: '$3,000,000',
      cakeToBurn: '$1,500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.belt,
    campaignId: '511080000',
    articleUrl: 'https://pancakeswap.medium.com/belt-fi-belt-ifo-to-be-hosted-on-pancakeswap-353585117e32',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'watch',
    address: '0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d',
    isActive: false,
    name: 'Yieldwatch (WATCH)',
    poolUnlimited: {
      saleAmount: '8,000,000 WATCH',
      raiseAmount: '$800,000',
      cakeToBurn: '$400,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.watch,
    campaignId: '511070000',
    articleUrl: 'https://pancakeswap.medium.com/yieldwatch-watch-ifo-to-be-hosted-on-pancakeswap-d24301f17241',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'berry',
    address: '0x5d028cE3435B2bB9AceBfaC599EEbA1ccD63d7dd',
    isActive: false,
    name: 'Berry (BRY)',
    poolUnlimited: {
      saleAmount: '2,000,000 BRY',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.bry,
    campaignId: '511060000',
    articleUrl: 'https://pancakeswap.medium.com/berry-bry-ifo-to-be-hosted-on-pancakeswap-b4f9095e9cdb',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'soteria',
    address: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
    isActive: false,
    name: 'Soteria (wSOTE)',
    poolUnlimited: {
      saleAmount: '1,500,000 wSOTE',
      raiseAmount: '$525,000',
      cakeToBurn: '$262,500',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.wsote,
    campaignId: '511050000',
    articleUrl: 'https://pancakeswap.medium.com/soteria-sota-ifo-to-be-hosted-on-pancakeswap-64b727c272ae',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'helmet',
    address: '0xa32509d760ee47Eb2Be96D338b5d69B5FBa4eFEB',
    isActive: false,
    name: 'Helmet.insure (Helmet)',
    poolUnlimited: {
      saleAmount: '10,000,000 Helmet',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.helmet,
    campaignId: '511040000',
    articleUrl: 'https://pancakeswap.medium.com/1-000-000-helmet-helmet-ifo-to-be-hosted-on-pancakeswap-3379a2a89a67',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'tenet',
    address: '0xB922aA19A2603A07C6C9ED6c236618C9bac51f06',
    isActive: false,
    name: 'Tenet (TEN)',
    poolUnlimited: {
      saleAmount: '1,000,000 TEN',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.ten,
    campaignId: '511030000',
    articleUrl: 'https://pancakeswap.medium.com/tenet-ten-ifo-to-be-hosted-on-pancakeswap-b7e1eb4cb272',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'ditto',
    address: '0x570c9eB19553526Fb35895a531928E19C7D20788',
    isActive: false,
    name: 'Ditto (DITTO)',
    poolUnlimited: {
      saleAmount: '700,000 DITTO',
      raiseAmount: '$630,000',
      cakeToBurn: '$315,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.ditto,
    campaignId: '511020000',
    articleUrl: 'https://pancakeswap.medium.com/ditto-money-ditto-ifo-to-be-hosted-on-pancakeswap-342da3059a66',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'blink',
    address: '0x44a9Cc8463EC00937242b660BF65B10365d99baD',
    isActive: false,
    name: 'BLINk (BLK)',
    poolUnlimited: {
      saleAmount: '100,000,000 BLINK',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: bscTokens.blink,
    campaignId: '511010000',
    articleUrl: 'https://medium.com/pancakeswap/1-000-000-ifo-blink-joins-pancakeswap-15841800bdd8',
    tokenOfferingPrice: null,
    version: 1,
  },
]

export default ifos
