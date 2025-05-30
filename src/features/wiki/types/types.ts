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

export enum WikiMenu {
	Magic = 'Magic',
	LightSources = 'Light Sources',
	Welcome = 'Welcome',
	GettingStarted = 'Getting Started',
	Basics = 'Basics',
	Commands = 'Commands',
	Mechanics = 'Mechanics',
	Cosmetics = 'Cosmetics',
	Crafting = 'Crafting',
	Library = 'Library',
	AutoLoot = 'Auto loot',
	Bestiary = 'Bestiary',
	Charms = 'Charms',
	Fishing = 'Fishing',
	Herbalism = 'Herbalism',
	Mining = 'Mining',
	Skinning = 'Skinning',
	PlantingVegetables = 'Planting Vegetables',
	GrowingFruits = 'Growing Fruits',
	MakingRum = 'Making Rum',
	Cooking = 'Cooking',
	WorldChanges = 'World Changes',
	Bosses = 'Bosses',
	Pickholes = 'Pickholes',
	Outfits = 'Outfits',
	Mounts = 'Mounts'
}
