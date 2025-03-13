import { SkillIncrements } from '../helpers'

export enum Skills {
    MELEE = 'axeClubSword',
    FIST = 'fist',
    DISTANCE = 'distance',
    SHIELDING = 'shielding',
    MAGIC = 'magic',
    FISHING = 'fishing',
    EXPERIENCE = 'experience'
}

export enum CalculatorFields {
    SELECTSKILL = 'skillToCalculate',
    CURRENTSKILL = 'currentSkill',
    PERCENTTONEXT = 'percentToNext',
    DESIREDSKILL = 'desiredSkill',
    CURRENTLEVEL = 'currentLevel',
    DESIREDLEVEL = 'desiredLevel',
    LEVEL = 'level',
    WITHVENORE = 'withVenore',
    WITHSCAVENGE = 'withScavenge',
    WEAPONATTACK = 'weaponAttack',
    SKILL = 'skill',
    CURRENTSTAMINA = 'currentStamina',
    GOALSTAMINA = 'goalStamina'
}

export type BasicSearchedValues = {
    skillToCalculate: Skills,
    currentSkill: number,
    percentToNext: number,
    desiredSkill: number,
    rawSkill: number,
    percentage: string,
    offlineTraining: string,
    timeForSkill: string
}

export type SearchedMagicCalculatorValues = {
    skillToCalculate: Skills,
    currentSkill: number,
    percentToNext: number,
    desiredSkill: number,
    rawSkill: number,
    percentage: string,
    manaPotions: number,
    timeForSkill: string
}

export type ExperienceSearchedValues = {
    missingExperience: number,
    currentLevel: number,
    percentToNext: number,
    desiredLevel: number,
    percentage: string
}

export type CapacitySearchedValues = {
    level: string,
    withVenore: boolean,
    withScavenge: boolean,
    capacity: number
}

export type FishingSearchedValues = {
    desiredSkill: number,
    currentSkill: number,
    percentToNext: number,
    percentage: string,
    neededTries: number,
    timeForSkill: string
}

export type AttackSearchedValues = {
    attackValue: number,
    attackValueIncrements: Array<SkillIncrements>,
    weaponAttack: string,
    skill: string
}

type RequiredHours = {
    hours: number,
    minutes: number
}

export type StaminaSearchedValues = {
    currentStamina: string,
    goalStamina: string,
    requiredHours: RequiredHours,
    goalTime: string
}
