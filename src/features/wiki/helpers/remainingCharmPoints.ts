import { regexes } from "lib/utils"

export const remainingCharmPoints = (text: string) => {
	const match = text.match(regexes.charmPointsRegex)
	const collected = match ? parseInt(match[1], 10) : 0

	return 50 - collected
}
