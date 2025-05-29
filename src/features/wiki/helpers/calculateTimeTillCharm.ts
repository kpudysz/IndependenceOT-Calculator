import { CreatureInformation } from "features/wiki/types"
import { formatTime } from "lib/utils"

export const calculateTimeTillCharm = (creatureInformation: Array<CreatureInformation>, charmPoints: number) => (
	formatTime(creatureInformation
		.slice()
		.sort((a, b) => a.effortPoints - b.effortPoints)
		.reduce(
			(acc, creature) =>
				acc.remaining > 0 && creature.points <= acc.remaining
					? {
						totalEffort: acc.totalEffort + (creature.effortPoints * creature.points),
						remaining: acc.remaining - creature.points
					}
					: acc,
			{ totalEffort: 0, remaining: charmPoints }
		).totalEffort
	)
)
