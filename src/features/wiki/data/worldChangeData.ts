import { useTranslation } from 'react-i18next'

export const worldChangeData = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.worldChange' })

	return [
		{
			name: 'Deer',
			image: 'https://tibiopedia.pl/images/static/monsters/deer.gif',
			requirement: '50 Antlers',
			requirementImage: 'https://tibiopedia.pl/images/static/items/antlers.gif',
			description: t('deerDescription'),
			place: t('deerPlace')
		},
		{
			name: 'Bear Cave',
			image: 'https://tibiopedia.pl/images/static/monsters/bear.gif',
			requirement: '80 Bear Paw',
			requirementImage: 'https://tibiopedia.pl/images/static/items/bear_paw.gif',
			description: t('bearCaveDescription'),
			place: t('bearCavePlace')
		},
		{
			name: 'Burning Library',
			image: 'https://tibiopedia.pl/images/static/monsters/troll_guard.gif',
			requirement: '150 Bunch of Troll Hair',
			requirementImage: 'https://tibiopedia.pl/images/static/items/bunch_of_troll_hair.gif',
			description: t('burningLibraryDescription'),
			place: t('burningLibraryPlace')
		},
		{
			name: 'The Nest',
			image: 'https://tibiopedia.pl/images/static/monsters/carrion_worm.gif',
			requirement: '100 Carrion Worm Fang',
			requirementImage: 'https://tibiopedia.pl/images/static/items/carrion_worm_fang.gif',
			description: t('nestDescription'),
			place: t('nestPlace')
		},
		{
			name: 'Chicken',
			image: 'https://tibiopedia.pl/images/static/monsters/chicken.gif',
			requirement: '100 Chicken Feather',
			requirementImage: 'https://tibiopedia.pl/images/static/items/chicken_feather.gif',
			description: t('chickenDescription'),
			place: t('chickenPlace')
		},
		{
			name: 'Deeper Ice Island',
			image: 'https://tibiopedia.pl/images/static/monsters/frost_troll.gif',
			requirement: '100 Frosty Ear of a Troll',
			requirementImage: 'https://tibiopedia.pl/images/static/items/frosty_ear_of_a_troll.gif',
			description: t('iceIslandDescription'),
			place: t('iceIslandPlace')
		},
		{
			name: 'Goblin Hideout',
			image: 'https://tibiopedia.pl/images/static/monsters/goblin.gif',
			requirement: '150 Goblin Ear',
			requirementImage: 'https://tibiopedia.pl/images/static/items/goblin_ear.gif',
			description: t('goblinHideoutDescription'),
			place: t('goblinHideoutPlace')
		},
		{
			name: 'The Apiary',
			image: 'https://tibiopedia.pl/images/static/monsters/wasp.gif',
			requirement: '80 Honeycomb',
			requirementImage: 'https://tibiopedia.pl/images/static/items/honeycomb.gif',
			description: t('apiaryDescription'),
			place: t('apiaryPlace')
		},
		{
			name: 'Rotworm Caves',
			image: 'https://tibiopedia.pl/images/static/monsters/rotworm.gif',
			requirement: '120 Lump of Dirt',
			requirementImage: 'https://tibiopedia.pl/images/static/items/lump_of_dirt.gif',
			description: t('rotwormCavesDescription'),
			place: t('rotwormCavesPlace')
		},
		{
			name: 'Minotaur Horn',
			image: 'https://tibiopedia.pl/images/static/monsters/minotaur.gif',
			requirement: '120 Minotaur Horn',
			requirementImage: 'https://tibiopedia.pl/images/static/items/minotaur_horn.gif',
			description: t('minotaurHornDescription'),
			place: t('minotaurHornPlace')
		},
		{
			name: 'Mino Loop',
			image: 'https://tibiopedia.pl/images/static/monsters/minotaur.gif',
			requirement: '100 Minotaur Leather',
			requirementImage: 'https://tibiopedia.pl/images/static/items/minotaur_leather.gif',
			description: t('minotaurLoopDescription'),
			place: t('minotaurLoopPlace')
		},
		{
			name: `Kraknaknork's Lair`,
			image: 'https://tibiopedia.pl/images/static/monsters/orc_shaman.gif',
			requirement: '150 Orc Leather',
			requirementImage: 'https://tibiopedia.pl/images/static/items/orc_leather.gif',
			description: t('kraknaknorkDescription'),
			place: t('kraknaknorkPlace')
		},
		{
			name: 'Orc Underground City',
			image: 'https://tibiopedia.pl/images/static/monsters/orc_spearman.gif',
			requirement: '100 Orc Tooth',
			requirementImage: 'https://tibiopedia.pl/images/static/items/orc_tooth.gif',
			description: t('orcUndergroundCityDescription'),
			place: t('orcUndergroundCityPlace')
		},
		{
			name: 'Skeleton Crypt',
			image: 'https://tibiopedia.pl/images/static/monsters/skeleton_warrior.gif',
			requirement: '250 Pelvis Bone',
			requirementImage: 'https://tibiopedia.pl/images/static/items/pelvis_bone.gif',
			description: t('skeletonCryptDescription'),
			place: t('skeletonCryptPlace')
		},
		{
			name: 'Pig',
			image: 'https://tibiopedia.pl/images/static/monsters/pig.gif',
			requirement: '50 Pig Foot',
			requirementImage: 'https://tibiopedia.pl/images/static/items/pig_foot.gif',
			description: t('pigDescription'),
			place: t('pigPlace')
		},
		{
			name: 'Poison Loop',
			image: 'https://tibiopedia.pl/images/static/monsters/poison_spider.gif',
			requirement: '150 Poison Spider Shell',
			requirementImage: 'https://tibiopedia.pl/images/static/items/poison_spider_shell.gif',
			description: t('poisonLoopDescription'),
			place: t('poisonLoopPlace')
		},
		{
			name: 'Eradicated Lair',
			image: 'https://tibiopedia.pl/images/static/monsters/spider.gif',
			requirement: '200 Spider Fangs',
			requirementImage: 'https://tibiopedia.pl/images/static/items/spider_fangs.gif',
			description: t('eradicatedLairDescription'),
			place: t('eradicatedLairPlace')
		},
		{
			name: 'Wolf',
			image: 'https://tibiopedia.pl/images/static/monsters/wolf.gif',
			requirement: '100 Wolf Paw',
			requirementImage: 'https://tibiopedia.pl/images/static/items/wolf_paw.gif',
			description: t('wolfDescription'),
			place: t('wolfPlace')
		},
		{
			name: 'Sheep',
			image: 'https://tibiopedia.pl/images/static/monsters/sheep.gif',
			requirement: '80 Wool',
			requirementImage: 'https://tibiopedia.pl/images/static/items/wool.gif',
			description: t('sheepDescription'),
			place: t('sheepPlace')
		}
	]
}

export const otherWorldChangeData = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.worldChange' })

	return [
		{
			name: 'Thais',
			requirement: '10000 Fish',
			requirementImage: 'https://tibiopedia.pl/images/static/items/fish.gif',
			description: t('thaisDescription'),
			place: t('thaisPlace')
		},
		{
			name: 'Carlin',
			requirement: '10000 Fish',
			requirementImage: 'https://tibiopedia.pl/images/static/items/fish.gif',
			description: t('carlinDescription'),
			place: t('carlinPlace')
		},
		{
			name: 'Venore',
			requirement: '10000 Fish',
			requirementImage: 'https://tibiopedia.pl/images/static/items/fish.gif',
			description: t('venoreDescription'),
			place: t('venorePlace')
		},
		{
			name: 'Horse Stables',
			requirement: '20 Bunch of Wheat',
			requirementImage: 'https://tibiopedia.pl/images/static/items/bunch_of_wheat.gif',
			description: t('horseStablesDescription'),
			place: t('horseStablesPlace')
		},
		{
			name: 'Quarantine',
			requirement: 'None - Random',
			requirementImage: 'https://tibiopedia.pl/images/static/items/medicine_pouch.gif',
			description: t('quarantineDescription'),
			place: t('quarantinePlace')
		},
		{
			name: 'Ice Island',
			requirement: 'None - Random',
			requirementImage: 'https://tibiopedia.pl/images/static/items/ice_cube.gif',
			description: t('iceIslandDescription'),
			place: t('iceIslandPlace')
		},
		{
			name: 'Billy',
			requirement: 'Sell more fruits than vegetables',
			requirementImage: 'https://tibiopedia.pl/images/static/items/red_apple.gif',
			description: t('billyDescription'),
			place: t('billyPlace')
		},
		{
			name: 'Willy',
			requirement: 'Sell more vegetables than fruits',
			requirementImage: 'https://tibiopedia.pl/images/static/items/cucumber.gif',
			description: t('willyDescription'),
			place: t('willyPlace')
		},
		{
			name: 'Dwarven Domination',
			requirement: 'Destroy more Spider Eggs/Webs than structures at the mine',
			requirementImage: 'https://tibiopedia.pl/images/static/items/pick.gif',
			description: t('dwarvenDescription'),
			place: t('dwarvenPlace')
		},
		{
			name: 'Rapid Respawn',
			requirement: 'Throw overall 100k gold to the well',
			requirementImage: 'https://tibiopedia.pl/images/static/items/crystal_coin.gif',
			description: t('rapidRespawnDescription'),
			place: t('rapidRespawnPlace')
		}
	]
}
