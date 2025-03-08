import { Skills } from '../types'
import { intervalToDuration } from 'date-fns'

type SkillIncrements = {
    skill: number,
    attackValue: number
}

type ReduceSkillIncrement = {
    previousAttack: number,
    increments: Array<SkillIncrements>
}

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

export const calculateSkillTime = (skillType: Skills, rawSkill: number) => {
    const secondsPerHit = getSkillTime(skillType)
    const overallSeconds = rawSkill * secondsPerHit

    return secondsToDate(overallSeconds)
}

export const secondsToDate = (seconds: number) => {
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 })

    return [
        duration.years ? `${duration.years} years` : '',
        duration.months ? `${duration.months} months` : '',
        duration.days ? `${duration.days} days` : '',
        duration.hours ? `${duration.hours} hours`: '',
        duration.minutes ? `${duration.minutes} minutes` : '',
        duration.seconds ? `${duration.seconds} seconds` : ''
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

export const calculateAttackValue = (weaponAttack: number, skill: number) => (Math.floor(Math.floor((6 / 5) * weaponAttack) * ((skill + 4) / 28)))

export const findAttackValueIncrements = (weaponAttack: number, skill: number, limit: number) => {
    const preparedArray = Array.from({ length: limit - skill }, (_, index) => skill + 1 + index)
        .reduce<ReduceSkillIncrement>((acc, nextSkill) => {
            const newAttack = calculateAttackValue(weaponAttack, nextSkill)
            const lastAttack = acc.previousAttack

            if (newAttack > lastAttack) {
                return {previousAttack: newAttack, increments: [...acc.increments, { attackValue: newAttack, skill: nextSkill }]}
            }

            return acc

        }, { previousAttack: calculateAttackValue(weaponAttack, skill), increments: [] as Array<SkillIncrements>})

    return preparedArray.increments
}

export const calculateStamina = (currentStamina: string, goalStamina: string) => {

}
