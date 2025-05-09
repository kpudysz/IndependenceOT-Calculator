import { subDays, subWeeks, subMonths, getUnixTime } from 'date-fns'
import { GetHighscoresResponse } from '../types'
import { colors } from 'common'

const calculateDifference = (filteredEntries: Array<GetHighscoresResponse>) => {
    if (filteredEntries.length < 2) {
        return 0
    }

    const sorted = [...filteredEntries].sort((a, b) => a.date - b.date)
    const earliest = sorted[0]
    const latest = sorted[sorted.length - 1]

    return Number(latest.experience) - Number(earliest.experience)
}

export const prepareHighscores = (highscores: Array<GetHighscoresResponse>) => {
    const now = new Date()
    const previousDay = getUnixTime(subDays(now, 1))
    const previousWeek = getUnixTime(subWeeks(now, 1))
    const previousMonth = getUnixTime(subMonths(now, 1))
    const groupedPlayers = highscores.reduce((acc, entry) => ({
            ...acc,
            [entry.name]: [...(acc[entry.name] ?? []), entry]
        }), {} as Record<string, Array<GetHighscoresResponse>>)

    return Object.entries(groupedPlayers).map(([name, entries]) => {
        const lastDayEntries = entries.filter(entry => entry.date >= previousDay)
        const lastWeekEntries = entries.filter(entry => entry.date >= previousWeek)
        const lastMonthEntries = entries.filter(entry => entry.date >= previousMonth)
        const lastDay = calculateDifference(lastDayEntries)
        const lastWeek = calculateDifference(lastWeekEntries)
        const lastMonth = calculateDifference(lastMonthEntries)
        const lastDayColor = determineColor(lastDay)
        const lastWeekColor = determineColor(lastWeek)
        const lastMonthColor = determineColor(lastMonth)

        return {
            name,
            lastDay,
            lastWeek,
            lastMonth,
            lastDayColor,
            lastWeekColor,
            lastMonthColor
        }
    })
        .filter(player => player.lastDay || player.lastWeek || player.lastMonth)
        .sort((a, b) => b.lastMonth - a.lastMonth)
}

export const determineColor = (experience: number) => {
    if (experience > 0) {
        return colors.green
    }

    if (experience < 0) {
        return colors.red
    }

    return colors.text
}
