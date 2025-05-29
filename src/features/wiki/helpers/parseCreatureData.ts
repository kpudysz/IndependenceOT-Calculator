import { bestiaryData } from "features/wiki/data"
import { remainingCharmPoints } from "features/wiki/helpers/remainingCharmPoints"
import { regexes } from "lib/utils"

export const parseCreatureData = (data: string) => {
	const creatureSection = data
		.split('\n')
		.slice(
			data.split('\n').findIndex(line => line.startsWith('Known Creatures')),
			data.split('\n').findIndex(line => line.startsWith('Known Bosses'))
		)

	const charmPoints = remainingCharmPoints(data)

	return creatureSection
		.filter(line => regexes.killCountRegex.test(line))
		.map(line => {
			const match = line.match(regexes.killCountRegex)

			if (!match) {
				return {
					name: 'Unknown',
					missingKills: 666,
					points: 666,
					difficulty: 666,
					charmPoints: 666,
					effortPoints: 666
				}
			}

			const [, rawName, killsString, stars] = match
			const points = (stars ? stars.length : 0) + 1
			const difficulty = bestiaryData.find(monster => monster.name.toLowerCase() === rawName.trim().toLowerCase())?.difficulty || 1
			const kills = parseInt(killsString, 10)
			const nextPowerOf10 = Math.max(100, Math.pow(10, kills.toString().length))
			const missingKills = nextPowerOf10 - kills || 1

			return {
				name: rawName.trim().toLowerCase(),
				missingKills,
				points,
				difficulty,
				charmPoints,
				effortPoints: Math.round((difficulty * missingKills) / 100 / points)
			}
		})
		.filter(Boolean)
}
