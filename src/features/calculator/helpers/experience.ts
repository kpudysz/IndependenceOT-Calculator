export const calculateNeededExpForLevel = (level: number) => 50 / 3 * (Math.pow(level, 3) - 6 * Math.pow(level, 2) + 17 * level - 12)

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
