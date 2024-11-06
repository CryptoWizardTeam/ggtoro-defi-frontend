import { useTranslation } from '@pancakeswap/localization'
import { Swap } from '@pancakeswap/widgets-internal'
import { ChainId } from '@pancakeswap/chains'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { EXCHANGE_HELP_URLS } from 'config/constants'

const Page: React.FC<
  React.PropsWithChildren<{
    removePadding?: boolean
    hideFooterOnDesktop?: boolean
    noMinHeight?: boolean
    helpUrl?: string
  }>
> = ({
  children,
  removePadding = false,
  hideFooterOnDesktop = false,
  noMinHeight = false,
  helpUrl = EXCHANGE_HELP_URLS,
  ...props
}) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const isBase = chainId === ChainId.BASE || chainId === ChainId.BASE_TESTNET
  const externalText = isBase ? t('Bridge assets to Base Chain') : ''
  const externalLinkUrl = isBase ? 'https://bridge.elden.fi/' : ''

  return (
    <Swap.Page
      removePadding={removePadding}
      noMinHeight={noMinHeight}
      hideFooterOnDesktop={hideFooterOnDesktop}
      helpUrl={helpUrl}
      externalText={externalText}
      externalLinkUrl={externalLinkUrl}
      {...props}
    >
      {children}
    </Swap.Page>
  )
}

export default Page
