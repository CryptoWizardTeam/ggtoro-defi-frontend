import { useTranslation } from '@pancakeswap/localization'
import { Box, Card, Flex, Heading } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useMemo, useState } from 'react'
import {
  useAllTokenDataSWR,
  useProtocolChartDataSWR,
  useProtocolDataSWR,
  useProtocolTransactionsSWR,
} from 'state/info/hooks'
import { TokenData } from 'state/info/types'
import { styled } from 'styled-components'
import BarChart from 'views/Info/components/InfoCharts/BarChart'
import LineChart from 'views/Info/components/InfoCharts/LineChart'
import PoolTable from 'views/Info/components/InfoTables/PoolsTable'
import TokenTable from 'views/Info/components/InfoTables/TokensTable'
import TransactionTable from 'views/Info/components/InfoTables/TransactionsTable'
import EBox from 'components/EBox'
import EButtonSm from 'components/EButtonSm'
import HoverableChart from '../components/InfoCharts/HoverableChart'
import { useNonSpamPoolsData } from '../hooks/usePoolsData'

export const ChartCardsContainer = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 0;
  gap: 1em;

  & > * {
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const TabButton = styled(EButtonSm)`
  width: 120px;
  &.active {
    border: 1px solid rgb(41, 240, 105);
    background: rgb(37, 59, 56);
  }
`

const Overview: React.FC<React.PropsWithChildren> = () => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()

  const [listType, setListType] = useState(0)

  const protocolData = useProtocolDataSWR()
  const chartData = useProtocolChartDataSWR()
  const transactions = useProtocolTransactionsSWR()

  const currentDate = useMemo(
    () => new Date().toLocaleString(locale, { month: 'short', year: 'numeric', day: 'numeric' }),
    [locale],
  )

  const allTokens = useAllTokenDataSWR()

  const formattedTokens = useMemo(() => {
    return Object.values(allTokens)
      .map((token) => token.data)
      .filter<TokenData>((token): token is TokenData => token?.name !== 'unknown')
  }, [allTokens])

  const { poolsData } = useNonSpamPoolsData()

  const somePoolsAreLoading = useMemo(() => {
    return poolsData.some((pool) => !pool?.token0Price)
  }, [poolsData])

  return (
    <Flex marginTop={10} flexDirection="column">
      <ChartCardsContainer>
        <EBox>
          <HoverableChart
            chartData={chartData}
            protocolData={protocolData}
            currentDate={currentDate}
            valueProperty="liquidityUSD"
            title={t('Liquidity')}
            ChartComponent={LineChart}
          />
        </EBox>
        <EBox>
          <HoverableChart
            chartData={chartData}
            protocolData={protocolData}
            currentDate={currentDate}
            valueProperty="volumeUSD"
            title={t('Volume 24H')}
            ChartComponent={BarChart}
          />
        </EBox>
      </ChartCardsContainer>

      <Flex style={{ gap: 12 }} my={20}>
        <TabButton className={listType === 0 ? 'active' : ''} onClick={() => setListType(0)}>
          Top Tokens
        </TabButton>
        <TabButton className={listType === 1 ? 'active' : ''} onClick={() => setListType(1)}>
          Top Pairs
        </TabButton>
        <TabButton className={listType === 2 ? 'active' : ''} onClick={() => setListType(2)}>
          Transactions
        </TabButton>
      </Flex>

      {listType === 0 && <TokenTable tokenDatas={formattedTokens} />}
      {listType === 1 && <PoolTable poolDatas={poolsData} />}
      {listType === 2 && <TransactionTable transactions={transactions} />}
    </Flex>
  )
}

export default Overview
