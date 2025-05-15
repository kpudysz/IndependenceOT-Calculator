export const calculateNeededExpForLevel = (level: number) => 50 / 3 * (Math.pow(level, 3) - 6 * Math.pow(level, 2) + 17 * level - 12)

export const calculateLevelFromExperience = (experience: number) => {
    const firstPart = Math.pow((3 * experience) / 100 - 3, 2) + 125 / 27
    const secondPart = 3 * experience / 100 - 3
    const firstRoot = Math.cbrt(Math.sqrt(firstPart) + secondPart)
    const secondRoot = Math.cbrt(-Math.sqrt(firstPart) + secondPart)

    return Math.floor(firstRoot + secondRoot + 2)
}

export const missingExpForLevel = (currentLevel: number, percentToNext: number, desiredLevel: number, overallExp?: number) => {
    if (currentLevel === desiredLevel) {
        return overallExp
    }

    const currentLevelRawExp = calculateNeededExpForLevel(currentLevel)
    const nextLevelRawExp = calculateNeededExpForLevel(currentLevel + 1)
    const missingExpRawToNext = (nextLevelRawExp - currentLevelRawExp) * percentToNext / 100
    const summedExperience = overallExp ? overallExp + missingExpRawToNext : missingExpRawToNext

    return missingExpForLevel(currentLevel + 1, 100, desiredLevel, summedExperience)
}

export const calculateExperiencePercentage = (currentLevel: number, percentToNext: number, desiredLevel: number) => {
    const currentLevelExperience = missingExpForLevel(1, 100, currentLevel) || 0
    const nextLevelExperience = missingExpForLevel(currentLevel, 100, currentLevel + 1)
    const percentToNextExperience = missingExpForLevel(currentLevel, percentToNext, currentLevel + 1)
    const totalExperience = currentLevelExperience + (nextLevelExperience - percentToNextExperience)
    const desiredExperience = missingExpForLevel(1, 100, desiredLevel)

    return (totalExperience / desiredExperience * 100).toFixed(2)
}
