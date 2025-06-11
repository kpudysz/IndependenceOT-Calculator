import { colors } from 'common'
import { getUnixTime, isBefore, setHours, setMinutes, setSeconds, subDays, subMonths, subWeeks } from 'date-fns'
import { GetHighscoresResponse } from '../types'
import { calculateLevelFromExperience } from './experience'

const calculateDifference = (filteredEntries: Array<GetHighscoresResponse>) => {
    const sorted = [...filteredEntries].sort((a, b) => a.date - b.date)
    const earliest = sorted[0]
    const latest = sorted[sorted.length - 1]

    return {
        expDiff: Number(latest?.experience) - Number(earliest?.experience) || 0,
        experience: Number(latest?.experience)
    }
}

export const prepareHighscores = (highscores: Array<GetHighscoresResponse>) => {
    const now = new Date()
    const todayAt11AM = setSeconds(setMinutes(setHours(now, 11), 0), 0)
    const referenceTime = isBefore(now, todayAt11AM) ? setSeconds(setMinutes(setHours(subDays(now, 1), 11), 0), 0) : todayAt11AM
    const yesterday11AM = subDays(referenceTime, 1)
    const unixReferenceTime = getUnixTime(referenceTime)
    const unixYesterday11AM = getUnixTime(yesterday11AM)
    const previousDay = getUnixTime(subDays(now, 1))
    const previousWeek = getUnixTime(subWeeks(now, 1))
    const previousMonth = getUnixTime(subMonths(now, 1))
    const groupedPlayers = highscores.reduce((acc, entry) => ({
        ...acc,
        [entry.name]: [...(acc[entry.name] ?? []), entry]
    }), {} as Record<string, Array<GetHighscoresResponse>>)

    return Object.entries(groupedPlayers).map(([name, entries]) => {
        const today = entries.filter(entry => entry.date >= unixReferenceTime)
        const lastDayEntries = entries.filter(entry => entry.date >= previousDay)
        const lastWeekEntries = entries.filter(entry => entry.date >= previousWeek)
        const lastMonthEntries = entries.filter(entry => entry.date >= previousMonth)
        const yesterdayEntries = entries.filter(entry => entry.date >= unixYesterday11AM && entry.date <= unixReferenceTime)
        const experience = calculateDifference(lastDayEntries).experience
        const level = calculateLevelFromExperience(experience)
        const lastDay = calculateDifference(today).expDiff
        const yesterday = calculateDifference(yesterdayEntries).expDiff
        const lastWeek = calculateDifference(lastWeekEntries).expDiff
        const lastMonth = calculateDifference(lastMonthEntries).expDiff
        const yesterdayColor = determineColor(yesterday)
        const lastDayColor = determineColor(lastDay)
        const lastWeekColor = determineColor(lastWeek)
        const lastMonthColor = determineColor(lastMonth)
        const estNextMonth = calculateLevelFromExperience(lastMonth + experience)
        const estNextThreeMonth = calculateLevelFromExperience(Math.ceil(lastMonth * 3) + experience)
        const estNextSixMonth = calculateLevelFromExperience(Math.ceil(lastMonth * 6) + experience)
        const estNextYear = calculateLevelFromExperience(Math.ceil(lastMonth * 12) + experience)

        return {
            name,
            level,
            estNextMonth,
            estNextThreeMonth,
            estNextSixMonth,
            estNextYear,
            lastDay,
            yesterday,
            lastWeek,
            lastMonth,
            yesterdayColor,
            lastDayColor,
            lastWeekColor,
            lastMonthColor
        }
    })
        .filter(player => player.lastDay || player.lastWeek || player.lastMonth)
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

export const fetchHighscores = () => {

}
