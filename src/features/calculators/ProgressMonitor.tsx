import React, { Fragment, useEffect, useState } from 'react'
import { formatDistanceToNow, fromUnixTime, getUnixTime, subMonths } from 'date-fns'
import { GetHighscoresResponse, Highscores, SortBy } from './types'
import { Flex, Table, Tbody, Td, Thead, Tr, useMediaQuery } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { ApiURL, colors } from 'common'
import { prepareHighscores } from './helpers'
import { Languages } from 'lib/types'
import { enUS, pl } from 'date-fns/locale'

type ProgressMonitorProps = {
    locale: string
}

export const ProgressMonitor: React.FunctionComponent<ProgressMonitorProps> = ({ locale }) => {
    const [highscores, setHighscores] = useState<Array<Highscores>>()
    const [sortBy, setSortBy] = useState<SortBy>(SortBy.MONTH)
    const [lastUpdated, setLastUpdated] = useState<number>()
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { t } = useTranslation('translation', { keyPrefix: 'progressMonitor' })

    useEffect(() => {
        const dateNow = new Date()

        const dateTo = getUnixTime(dateNow)
        const dateFrom = getUnixTime(subMonths(dateNow, 1))

        fetch(`${ApiURL}/highscores?dateFrom=${dateFrom}&dateTo=${dateTo}`)
            .then(response => response.json() as Promise<Array<GetHighscoresResponse>>)
            .then(responseData => {
                const preparedHighscores = prepareHighscores(responseData)
                const recentDate = Math.max(...responseData.map(item => item.date))

                setHighscores(preparedHighscores)
                setLastUpdated(recentDate)
            })
    }, [])

    useEffect(() => {
        if (!sortBy || !highscores) {
            return
        }

        const sortedHighscores = [...highscores].sort((a, b) => {
            switch (sortBy) {
                case SortBy.NAME:
                    return a.name.localeCompare(b.name)
                case SortBy.DAY:
                    return b.lastDay - a.lastDay
                case SortBy.WEEK:
                    return b.lastWeek - a.lastWeek
                default:
                case SortBy.MONTH:
                    return b.lastMonth - a.lastMonth
            }
        })
        setHighscores(sortedHighscores)
    }, [sortBy])

    return (
        <Flex justifyContent="center" height="100%" color={colors.text} px={isMobile ? 4 : 0}>
            <Flex
                height="auto"
                width={isMobile ? "100%" : "850px"}
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
                {highscores && lastUpdated && (
                    <Fragment>
                        <Flex textAlign="center" margin="15px 0 20px">
                            {t('highscoresUpdate', { updateDate: formatDistanceToNow(fromUnixTime(lastUpdated || 0), { locale: locale === Languages.En ? enUS : pl }) })}
                        </Flex>
                        <Table fontSize={isMobile ? "sm" : "md"} variant="simple" width="100%">
                            <Thead>
                                <Tr>
                                    <Td>{t('number')}</Td>
                                    <Td onClick={() => setSortBy(SortBy.NAME)} cursor="pointer" color={sortBy === SortBy.NAME ? colors.yellow : colors.text}>{t('name')}</Td>
                                    <Td onClick={() => setSortBy(SortBy.DAY)} cursor="pointer" color={sortBy === SortBy.DAY ? colors.yellow : colors.text}>{t('lastDay')}</Td>
                                    <Td onClick={() => setSortBy(SortBy.WEEK)} cursor="pointer" color={sortBy === SortBy.WEEK ? colors.yellow : colors.text}>{t('lastWeek')}</Td>
                                    <Td onClick={() => setSortBy(SortBy.MONTH)} cursor="pointer" color={sortBy === SortBy.MONTH ? colors.yellow : colors.text}>{t('lastMonth')}</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                            {highscores?.map((player, index) => (
                                <Tr key={player.name}>
                                    <Td>
                                        {index + 1}
                                    </Td>
                                    <Td>
                                        {player.name}
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
                                </Tr>
                            ))}
                            </Tbody>
                        </Table>
                    </Fragment>
                )}
                {(!highscores || !lastUpdated) && (
                    <Flex mt="20px">
                        {t('loading')}
                    </Flex>
                ) }
            </Flex>
        </Flex>
    )
}
