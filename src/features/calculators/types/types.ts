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
    DESIREDSKILL = 'desiredSkill'
}

export type SearchedValues = {
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
