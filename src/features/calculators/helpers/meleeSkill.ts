import { Skills } from '../types'
import { getRealLevel, getSkillMultiplier, getStartingValue } from './functions'

type CalculatedSkill = {
    neededHits: number,
    percentage: string
}

export const calculateSkill = (skillType: Skills, currentSkill: number, percentToNext: number, desiredSkill: number): CalculatedSkill => {
    const nextLevelRequirement = calculateRawValue(skillType, currentSkill)
    const currentRawValue = nextLevelRequirement * (percentToNext / 100)
    const startingSkill = skillType === Skills.MAGIC ? 0 : 10
    const fullLevelsValue = calculateNeededRawValue(skillType, startingSkill, 0, currentSkill)
    const nextLevelProgressValue = nextLevelRequirement - currentRawValue
    const currentHits = fullLevelsValue + nextLevelProgressValue
    const hitsNeeded = desiredSkill === currentSkill + 1 ? currentRawValue : calculateNeededRawValue(skillType, currentSkill + 1, currentRawValue, desiredSkill)
    const percentage = ((currentHits / (hitsNeeded + currentHits)) * 100).toFixed(2)

    return {
        neededHits: hitsNeeded,
        percentage
    }
}

const calculateNeededRawValue = (skillType: Skills, currentSkill: number, currentRawValue: number, desiredSkill: number) => {
    if (currentSkill === desiredSkill) {
        return currentRawValue
    }

    const skillRawValue = calculateRawValue(skillType, currentSkill)

    return calculateNeededRawValue(skillType, currentSkill + 1, currentRawValue + skillRawValue, desiredSkill)
}

export const calculateRawValue = (skillType: Skills, level: number) => {
    const startingValue = getStartingValue(skillType)
    const skillMultiplier = getSkillMultiplier(skillType)
    const realLevel = getRealLevel(skillType, level)

    return Math.floor(startingValue * Math.pow(skillMultiplier, realLevel)) || startingValue
}
