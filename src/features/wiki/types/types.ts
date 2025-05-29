export enum SortByBestiary {
	NAME = 'Name',
	POINTS = 'Points',
	MISSINGKILLS = 'Missing Kills',
	DIFFICULTY = 'Difficulty',
	EFFORTPOINTS = 'Effort Points',
	TTF = 'TTF'
}

export type CreatureInformation = {
  name: string,
  missingKills: number,
  points: number,
  difficulty: number,
  effortPoints: number,
  charmPoints: number
}
