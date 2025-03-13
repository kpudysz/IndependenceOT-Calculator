export type SkillIncrements = {
    skill: number,
    attackValue: number
}

type ReduceSkillIncrement = {
    previousAttack: number,
    increments: Array<SkillIncrements>
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
