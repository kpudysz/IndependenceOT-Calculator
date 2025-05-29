export const remainingCharmPoints = (text: string) => {
	const match = text.match(/You have collected (\d+) Charm Points/i)
	const collected = match ? parseInt(match[1], 10) : 0

	return 50 - collected
}
