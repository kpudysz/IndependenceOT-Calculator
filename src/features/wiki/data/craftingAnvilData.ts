import { images } from "assets"

export const anvilData = [
	{
		name: 'Jagged Sword',
		image: 'https://tibiopedia.pl/images/static/items/jagged_sword.gif',
		level: '30',
		chance: '0,5%',
		ingredients: [
			{
				name: 'Steel Ingot',
				image: images.steelIngot,
				count: '5'
			},
			{
				name: 'Broken Sword',
				image: 'https://tibiopedia.pl/images/static/items/broken_sword.gif',
				count: '1'
			}
		]
	},
	{
		name: 'Soldier Helmet',
		image: 'https://tibiopedia.pl/images/static/items/soldier_helmet.gif',
		level: '30',
		chance: '0,5%',
		ingredients: [
			{
				name: 'Steel Ingot',
				image: images.steelIngot,
				count: '5'
			},
			{
				name: 'Broken Helmet',
				image: 'https://tibiopedia.pl/images/static/items/broken_helmet.gif',
				count: '1'
			}
		]
	},
	{
		name: 'Crossbow',
		image: 'https://tibiopedia.pl/images/static/items/crossbow.gif',
		level: '30',
		chance: '0,5%',
		ingredients: [
			{
				name: 'Steel Ingot',
				image: images.steelIngot,
				count: '5'
			},
			{
				name: 'Broken Crossbow',
				image: 'https://tibiopedia.pl/images/static/items/broken_crossbow.gif',
				count: '1'
			}
		]
	}
]
