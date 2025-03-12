import { Skills } from '../types/types'
import { calculateRawValue } from './meleeSkill'

const calculateFistSkill = (skillType: Skills, currentSkill: number, percentToNext: number): number => {
    const nextLevelRequirement = calculateRawValue(skillType, currentSkill)

    return nextLevelRequirement * (percentToNext / 100)
}

export const calculateFistPercentageTime = (desiredSkill: number, timeToSkill: number) => {
    const fistAllLevelsTime = calculateFistSkillTime(10, 100, desiredSkill)

    return (((fistAllLevelsTime - timeToSkill) / fistAllLevelsTime) * 100).toFixed(2)
}

export const calculateFistSkillTime = (level: number, percentToNext: number, desiredSkill: number) => {
    const arrayLength = desiredSkill - level

    const arrayOfLevels = [...Array(arrayLength)].map((_, index) => index)
    const secondsToDesiredSkill = arrayOfLevels.reduce((acc, item, index) => {
        const fistSecondsPerHit = (level - 10) + item >= 25 ? 1 : 2 - ((level - 10 + item) * 0.04)
        const handlePartialLevels = !index ? percentToNext : 100
        const rawValue = calculateFistSkill(Skills.FIST, level + index, handlePartialLevels)

        return acc + (rawValue * fistSecondsPerHit)
    }, 0)

    return secondsToDesiredSkill
}
