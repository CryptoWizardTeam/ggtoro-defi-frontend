import {
  Box,
  Flex,
  InjectedModalProps,
  LinkExternal,
  Message,
  Skeleton,
  Text,
  CopyAddress,
  FlexGap,
  useTooltip,
  TooltipText,
  InfoFilledIcon,
  ScanLink,
} from '@pancakeswap/uikit'
import { ELDEN_ADDRESS } from 'config/constants/elden'
import { WNATIVE } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { FetchStatus } from 'config/constants/types'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from '@pancakeswap/localization'
import useAuth from 'hooks/useAuth'
import useNativeCurrency from 'hooks/useNativeCurrency'
import useTokenBalance, { useBSCCakeBalance } from 'hooks/useTokenBalance'
import { ChainLogo } from 'components/Logo/ChainLogo'

import { getBlockExploreLink, getBlockExploreName } from 'utils'
import { getFullDisplayBalance, formatBigInt } from '@pancakeswap/utils/formatBalance'
import { useBalance } from 'wagmi'
import { useDomainNameForAddress } from 'hooks/useDomain'
import { isMobile } from 'react-device-detect'
import { useState } from 'react'
import InternalLink from 'components/Links'
import { SUPPORT_BUY_CRYPTO } from 'config/constants/supportChains'
import EBox from 'components/EBox'
import Button from 'components/EButton'

const COLORS = {
  ETH: '#627EEA',
  BNB: '#14151A',
}

interface WalletInfoProps {
  hasLowNativeBalance: boolean
  switchView: (newIndex: number) => void
  onDismiss: InjectedModalProps['onDismiss']
}

const WalletInfo: React.FC<WalletInfoProps> = ({ hasLowNativeBalance, onDismiss }) => {
  const { t } = useTranslation()
  const { account, chainId, chain } = useActiveWeb3React()
  const { domainName } = useDomainNameForAddress(account)
  const isBSC = chainId === ChainId.BSC
  const nativeBalance = useBalance({ address: account, enabled: !isBSC })
  const native = useNativeCurrency()
  const wNativeToken = !isBSC ? WNATIVE[chainId] : null
  const { balance: wNativeBalance, fetchStatus: wNativeFetchStatus } = useTokenBalance(wNativeToken?.address)
  const { balance: wEldenBalance, fetchStatus: wEldenFetchStatus } = useTokenBalance(ELDEN_ADDRESS)
  const [mobileTooltipShow, setMobileTooltipShow] = useState(false)
  const { logout } = useAuth()

  const handleLogout = () => {
    onDismiss?.()
    logout()
  }

  const showNativeEntryPoint = Number(nativeBalance?.data?.value) === 0 && SUPPORT_BUY_CRYPTO.includes(chainId)

  return (
    <>
      <Text color="secondary" fontSize="14px" fontWeight={400} mb="8px">
        {t('Your Address')}
      </Text>
      <EBox style={{ marginBottom: 24, padding: 8 }}>
        <CopyAddress tooltipMessage={t('copied')} account={account} />
        {domainName ? <Text color="textSubtle">{domainName}</Text> : null}
      </EBox>
      {hasLowNativeBalance && SUPPORT_BUY_CRYPTO.includes(chainId) && (
        <Message variant="warning" mb="24px">
          <Box>
            <Text fontWeight="bold">
              {t('%currency% Balance Low', {
                currency: native.symbol,
              })}
            </Text>
            <InternalLink href="/buy-crypto" onClick={() => onDismiss?.()}>
              <Text color="primary">
                {t('You need %currency% for transaction fees.', {
                  currency: native.symbol,
                })}
              </Text>
            </InternalLink>
          </Box>
        </Message>
      )}
      {!isBSC && chain && (
        <Box mb="12px">
          <Flex justifyContent="space-between" alignItems="center" mb="8px">
            <Flex py="2px" style={{ gap: '10px' }}>
              <ChainLogo chainId={chain.id} />
              <Text color="white">{chain.name}</Text>
            </Flex>
            <LinkExternal href={getBlockExploreLink(account, 'address', chainId)} style={{ fontWeight: 300 }}>
              {getBlockExploreName(chainId)}
            </LinkExternal>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Text color="textSubtle" fontSize="14px" fontWeight={300}>
              {native.symbol} {t('Balance')}
            </Text>
            {!nativeBalance.isFetched ? (
              <Skeleton height="22px" width="60px" />
            ) : (
              <Flex>
                <Text
                  color={showNativeEntryPoint ? 'warning' : 'text'}
                  fontWeight={showNativeEntryPoint ? 'bold' : 'normal'}
                  fontSize="14px"
                >
                  {formatBigInt(nativeBalance?.data?.value ?? 0n, 6)}
                </Text>
                {/* {showNativeEntryPoint ? (
                  <TooltipText
                    ref={buyCryptoTargetRef}
                    onClick={() => setMobileTooltipShow(false)}
                    display="flex"
                    style={{ justifyContent: 'center' }}
                  >
                    <InfoFilledIcon pl="2px" fill="#000" color="#D67E0A" width="22px" />
                  </TooltipText>
                ) : null}
                {buyCryptoTooltipVisible && (!isMobile || mobileTooltipShow) && buyCryptoTooltip} */}
              </Flex>
            )}
          </Flex>
          {/* {wNativeBalance && wNativeBalance.gt(0) && (
            <Flex alignItems="center" justifyContent="space-between">
              <Text color="textSubtle" fontSize="12px">
                {wNativeToken?.symbol} {t('Balance')}
              </Text>
              {wNativeFetchStatus !== FetchStatus.Fetched ? (
                <Skeleton height="22px" width="60px" />
              ) : (
                wNativeToken?.decimals && (
                  <Text fontSize="12px">{getFullDisplayBalance(wNativeBalance, wNativeToken?.decimals, 6)}</Text>
                )
              )}
            </Flex>
          )} */}
          {wEldenBalance && wEldenBalance.gt(0) && (
            <Flex alignItems="center" justifyContent="space-between">
              <Text color="textSubtle" fontSize="14px" fontWeight={300}>
                Elden {t('Balance')}
              </Text>
              {wEldenFetchStatus !== FetchStatus.Fetched ? (
                <Skeleton height="22px" width="60px" />
              ) : (
                <Text fontSize="14px" fontWeight={300}>
                  {getFullDisplayBalance(wEldenBalance, 18, 6)}
                </Text>
              )}
            </Flex>
          )}
        </Box>
      )}
      <Flex justifyContent="center">
        <Button mt={5} handleClick={handleLogout}>
          disconnect
        </Button>
      </Flex>
    </>
  )
}

export default WalletInfo
