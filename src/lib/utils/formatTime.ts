export const formatTime = (totalMinutes: number) => {
	const days = Math.floor(totalMinutes / 1440)
	const hours = Math.floor((totalMinutes % 1440) / 60)
	const minutes = totalMinutes % 60

	return [
		days > 0 ? `${days} day${days !== 1 ? 's' : ''}` : null,
		hours > 0 ? `${hours} hr${hours !== 1 ? 's' : ''}` : null,
		minutes > 0 || (days === 0 && hours === 0)
			? `${minutes} min${minutes !== 1 ? 's' : ''}`
			: null
	]
		.filter(Boolean)
		.join(' ')
}
