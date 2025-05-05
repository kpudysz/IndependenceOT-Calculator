import { SkillIncrements } from '../helpers'

export enum Skills {
    MELEE = 'axeClubSword',
    FIST = 'fist',
    DISTANCE = 'distance',
    SHIELDING = 'shielding',
    MAGIC = 'magic',
    FISHING = 'fishing'
}

export enum CalculatorFields {
    SELECTSKILL = 'skillToCalculate',
    CURRENTSKILL = 'currentSkill',
    PERCENTTONEXT = 'percentToNext',
    DESIREDSKILL = 'desiredSkill',
    CURRENTLEVEL = 'currentLevel',
    CURRENTEXPERIENCE = 'currentExperience',
    DESIREDLEVEL = 'desiredLevel',
    LEVEL = 'level',
    WITHCARLIN = 'withCarlin',
    WITHVENORE = 'withVenore',
    WITHBOH = 'withBoh',
    WITHHASTE = 'withHaste',
    WITHMOUNT = 'withMount',
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

export type PenaltySearchedValues = {
    currentLevel: number
    experienceLoss: number,
    percentage: string
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
    withCarlin: boolean,
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

export type SpeedSearchedValues = {
    level: string,
    withBoh: boolean,
    withMount: boolean,
    withVenore: boolean,
    resolvedBreakpoints: ResolvedBreakpoints,
}

type SpeedBreakpoint = {
    breakpointLevel: number,
    missingSpeed: number,
    currentSpeed: number
}

export type ResolvedBreakpoints = {
    drawbridge: SpeedBreakpoint,
    floorMarbleCobble: SpeedBreakpoint,
    dirtTown: SpeedBreakpoint,
    rock: SpeedBreakpoint,
    dirtFloorFast: SpeedBreakpoint,
    grass: SpeedBreakpoint,
    dirtFloorSlower: SpeedBreakpoint,
    water: SpeedBreakpoint,
    wheat: SpeedBreakpoint,
    muddyFloor: SpeedBreakpoint,
    speed: number
}
