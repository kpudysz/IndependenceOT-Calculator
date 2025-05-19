import { Box, Flex, Table, Tbody, Td, Thead, Tr, useMediaQuery } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { colors } from 'common'
import { formatDistanceToNow, fromUnixTime, getUnixTime, subMonths } from 'date-fns'
import { enUS, pl } from 'date-fns/locale'
import { Languages } from 'lib/types'
import React, { Fragment, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { prepareHighscores } from './helpers'
import { GetHighscoresResponse, SortBy } from './types'

type ProgressMonitorProps = {
    locale: string
}

export const ProgressMonitor: React.FunctionComponent<ProgressMonitorProps> = ({ locale }) => {
    const [sortBy, setSortBy] = useState<SortBy>(SortBy.MONTH)
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { t } = useTranslation('translation', { keyPrefix: 'progressMonitor' })
    const { isPending, data } = useQuery({
        queryKey: ['progressMonitor'],
        queryFn: async () => {
            const dateNow = new Date()
            const dateTo = getUnixTime(dateNow)
            const dateFrom = getUnixTime(subMonths(dateNow, 1))
            const response: AxiosResponse<Array<GetHighscoresResponse>> = await axios.get(`/highscores?dateFrom=${dateFrom}&dateTo=${dateTo}`)
            const preparedHighscores = prepareHighscores(response.data)
            const recentDate = Math.max(...response.data.map(item => item.date))

            return {
                highscores: preparedHighscores,
                lastUpdated: recentDate
            }
        }
    })

    const sortedHighscores = useMemo(() => {
        if (!data?.highscores) {
            return []
        }

        return [...data.highscores].sort((a, b) => {
            switch (sortBy) {
                case SortBy.LEVEL:
                    return b.level - a.level
                case SortBy.NAME:
                    return a.name.localeCompare(b.name)
                case SortBy.YESTERDAY:
                    return b.yesterday - a.yesterday
                case SortBy.DAY:
                    return b.lastDay - a.lastDay
                case SortBy.WEEK:
                    return b.lastWeek - a.lastWeek
                case SortBy.NEXTMONTH:
                    return b.estNextMonth - a.estNextMonth
                case SortBy.NEXTTHREEMONTHS:
                    return b.estNextThreeMonth - a.estNextThreeMonth
                case SortBy.NEXTSIXMONTHS:
                    return b.estNextSixMonth - a.estNextSixMonth
                case SortBy.NEXTYEAR:
                    return b.estNextYear - a.estNextYear
                default:
                case SortBy.MONTH:
                    return b.lastMonth - a.lastMonth
            }
        })
    }, [data, sortBy])

    return (
        <Flex justifyContent="center" height="100%" color={colors.text} width="100vw">
            <Flex
                height="auto"
                width="100%"
                maxWidth="1350px"
                borderRadius="10px"
                background={colors.background}
                alignItems="center"
                flexDirection="column"
                padding={isMobile ? "20px" : "30px"}
            >
                <Flex
                    fontSize={isMobile ? "24px" : "35px"}
                    fontWeight="bold"
                    mt={isMobile ? "20px" : "40px"}
                    textAlign="center"
                >
                    {t('progressMonitor')}
                </Flex>
                {data?.highscores && (
                    <Fragment>
                        <Flex textAlign="center" margin="15px 0 20px">
                            {t('highscoresUpdate', { updateDate: formatDistanceToNow(fromUnixTime(data.lastUpdated || 0), { locale: locale === Languages.En ? enUS : pl }) })}
                        </Flex>
                        <Box width="100%" overflow="auto" style={{ WebkitOverflowScrolling: 'touch' }}>
                            <Table fontSize={isMobile ? "sm" : "md"} variant="simple" width="100%">
                                <Thead>
                                    <Tr>
                                        <Td>{t('number')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.LEVEL)} cursor="pointer" color={sortBy === SortBy.LEVEL ? colors.yellow : colors.text}>{t('level')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.NAME)} cursor="pointer" color={sortBy === SortBy.NAME ? colors.yellow : colors.text}>{t('name')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.YESTERDAY)} cursor="pointer" color={sortBy === SortBy.YESTERDAY ? colors.yellow : colors.text}>{t('yesterday')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.DAY)} cursor="pointer" color={sortBy === SortBy.DAY ? colors.yellow : colors.text}>{t('lastDay')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.WEEK)} cursor="pointer" color={sortBy === SortBy.WEEK ? colors.yellow : colors.text}>{t('lastWeek')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.MONTH)} cursor="pointer" color={sortBy === SortBy.MONTH ? colors.yellow : colors.text}>{t('lastMonth')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.NEXTMONTH)} cursor="pointer" color={sortBy === SortBy.NEXTMONTH ? colors.yellow : colors.text}>{t('estimatedNextMonth')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.NEXTTHREEMONTHS)} cursor="pointer" color={sortBy === SortBy.NEXTTHREEMONTHS ? colors.yellow : colors.text}>{t('estimatedThreeMonths')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.NEXTSIXMONTHS)} cursor="pointer" color={sortBy === SortBy.NEXTSIXMONTHS ? colors.yellow : colors.text}>{t('estimatedSixMonths')}</Td>
                                        <Td onClick={() => setSortBy(SortBy.NEXTYEAR)} cursor="pointer" color={sortBy === SortBy.NEXTYEAR ? colors.yellow : colors.text}>{t('estimatedNextYear')}</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {sortedHighscores.map((player, index) => (
                                        <Tr key={player.name}>
                                            <Td>
                                                {index + 1}
                                            </Td>
                                            <Td>
                                                {player.level}
                                            </Td>
                                            <Td>
                                                {player.name}
                                            </Td>
                                            <Td color={player.yesterdayColor}>
                                                {player.yesterday > 0 ? '+' : ''}{player.yesterday.toLocaleString()}
                                            </Td>
                                            <Td color={player.lastDayColor}>
                                                {player.lastDay > 0 ? '+' : ''}{player.lastDay.toLocaleString()}
                                            </Td>
                                            <Td color={player.lastWeekColor}>
                                                {player.lastWeek > 0 ? '+' : ''}{player.lastWeek.toLocaleString()}
                                            </Td>
                                            <Td color={player.lastMonthColor}>
                                                {player.lastMonth > 0 ? '+' : ''}{player.lastMonth.toLocaleString()}
                                            </Td>
                                            <Td>
                                                {player.estNextMonth}
                                            </Td>
                                            <Td>
                                                {player.estNextThreeMonth}
                                            </Td>
                                            <Td>
                                                {player.estNextSixMonth}
                                            </Td>
                                            <Td>
                                                {player.estNextYear}
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                    </Fragment>
                )}
                {isPending && (
                    <Flex mt="20px">
                        {t('loading')}
                    </Flex>
                )}
            </Flex>
        </Flex>
    )
}
