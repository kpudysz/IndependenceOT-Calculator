import { Skills } from '../types'
import { intervalToDuration } from 'date-fns'
import { TFunction } from 'i18next'
import { calculateNeededExpForLevel } from './experience'

export const getRealLevel = (skillType: Skills, level: number) => {
    if (skillType === Skills.MAGIC) {
        return level
    }

    return level - 10
}

export const getStartingValue = (skillType: Skills) => {
    switch (skillType) {
        case Skills.MELEE:
            return 50
        case Skills.DISTANCE:
            return 30
        case Skills.MAGIC:
            return 1600
        case Skills.SHIELDING:
            return 100
        case Skills.FISHING:
            return 20
        case Skills.FIST:
        default:
            return 50
    }
}

export const getSkillMultiplier = (skillType: Skills) => {
    switch (skillType) {
        case Skills.MELEE:
            return 2
        case Skills.DISTANCE:
            return 2
        case Skills.MAGIC:
            return 3
        case Skills.SHIELDING:
            return 1.5
        case Skills.FISHING:
            return 1.1
        case Skills.FIST:
        default:
            return 1.5
    }
}

export const calculateSkillTime = (skillType: Skills, rawSkill: number, t:  TFunction<'translation', undefined>) => {
    const secondsPerHit = getSkillTime(skillType)
    const overallSeconds = rawSkill * secondsPerHit

    return secondsToDate(overallSeconds, t)
}

export const secondsToDate = (seconds: number, t:  TFunction<'translation', undefined>) => {
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 })

    return [
        duration.years ? `${duration.years} ${t('basic.years')}` : '',
        duration.months ? `${duration.months} ${t('basic.months')}` : '',
        duration.days ? `${duration.days} ${t('basic.days')}` : '',
        duration.hours ? `${duration.hours} ${t('basic.hours')}`: '',
        duration.minutes ? `${duration.minutes} ${t('basic.minutes')}` : '',
        duration.seconds ? `${duration.seconds} ${t('basic.seconds')}` : ''
    ].filter(Boolean).join(" ")
}

const getSkillTime = (skillType: Skills) => {
    switch (skillType) {
        case Skills.MAGIC:
            return 6
        case Skills.SHIELDING:
            return 1
        case Skills.FISHING:
            return 0.5
        default:
            return 2
    }
}

export const skillEnumToValue = (skillType: Skills) => {
    switch (skillType) {
        case Skills.MAGIC:
            return 'Magic Level'
        case Skills.SHIELDING:
            return 'Shielding'
        case Skills.FIST:
            return 'Fist Fighting'
        case Skills.MELEE:
            return 'Axe/Club/Sword Fighting'
        case Skills.DISTANCE:
            return 'Distance Fighting'
        case Skills.FISHING:
        default:
            return 'Fishing'
    }
}

export const calculateCap = (level: number, withVenore: boolean, withScavenge: boolean) => {
    const totalCap = 390 + (level * 10)
    const venoreBonus = withVenore ? totalCap * 0.1 : 0
    const scavengeBonus = withScavenge ? totalCap * 0.2 : 0

    return totalCap + venoreBonus + scavengeBonus
}

export const calculateOfflineTraining = (requiredHits: number, t: TFunction<'translation', undefined>) => {
    const adjustedHits = Math.ceil(requiredHits / 6) * 6

    if (adjustedHits > 4320) {
        return secondsToDate(adjustedHits / 3 * 60, t)
    }

    return secondsToDate(adjustedHits / 6 * 60, t)
}

export const calculateDeathPenalty = (level: number) => {
    if (level < 24) {
        return calculateNeededExpForLevel(level) * 0.1
    }

    return ((level + 50) / 100) * 50 * (Math.pow(level, 2) - 5 * level + 8)
}
