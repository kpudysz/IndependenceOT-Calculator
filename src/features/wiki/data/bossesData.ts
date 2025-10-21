import { useTranslation } from 'react-i18next'

export const bossesData = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.bosses' })

	return [
		{
			name: 'Ben',
			image: 'https://tibiopedia.pl/images/static/monsters/bear.gif',
			location: t('ben'),
			common: [
				{
					name: 'Bear Paw',
					image: 'https://tibiopedia.pl/images/static/items/bear_paw.gif'
				}
			],
			rare: [
				{
					name: 'Honeycomb',
					image: 'https://tibiopedia.pl/images/static/items/honeycomb.gif'
				}
			],
			veryRare: [
				{
					name: 'Slingshot',
					image: 'https://tibiopedia.pl/images/static/items/slingshot.gif'
				}
			]
		},
		{
			name: 'Risen Ghoul',
			image: 'https://tibiopedia.pl/images/static/monsters/ghoul.gif',
			location: t('risenGhoul'),
			common: [
				{
					name: 'Small Amethyst',
					image: 'https://tibiopedia.pl/images/static/items/small_amethyst.gif'
				}
			],
			rare: [
				{
					name: 'Chain Legs',
					image: 'https://tibiopedia.pl/images/static/items/chain_legs.gif'
				}
			],
			veryRare: [
				{
					name: 'Steel Axe',
					image: 'https://tibiopedia.pl/images/static/items/steel_axe.gif'
				}
			]
		},
		{
			name: 'Teleskor',
			image: 'https://tibiopedia.pl/images/static/monsters/teleskor.gif',
			location: t('teleskor'),
			common: [
				{
					name: 'Garlic Necklace',
					image: 'https://tibiopedia.pl/images/static/items/garlic_necklace.gif'
				}
			],
			rare: [
				{
					name: 'Daramian Mace',
					image: 'https://tibiopedia.pl/images/static/items/daramian_mace.gif'
				}
			],
			veryRare: [
				{
					name: 'Bone Shield',
					image: 'https://tibiopedia.pl/images/static/items/bone_shield.gif'
				},
				{
					name: 'Bone Sword',
					image: 'https://tibiopedia.pl/images/static/items/bone_sword.gif'
				}
			]
		},
		{
			name: 'Munster',
			image: 'https://tibiopedia.pl/images/static/monsters/munster.gif',
			location: t('munster'),
			common: [
				{
					name: 'Bone Club',
					image: 'https://tibiopedia.pl/images/static/items/bone_club.gif'
				}
			],
			rare: [
				{
					name: 'Cookie',
					image: 'https://tibiopedia.pl/images/static/items/cookie.gif'
				}
			],
			veryRare: [
				{
					name: 'Die',
					image: 'https://tibiopedia.pl/images/static/items/die.gif'
				}
			]
		},
		{
			name: 'Apprentice Sheng',
			image: 'https://tibiopedia.pl/images/static/monsters/minotaur_mage.gif',
			location: t('apprenticeSheng'),
			common: [
				{
					name: 'Magic Light Wand',
					image: 'https://tibiopedia.pl/images/static/items/magic_light_wand.gif'
				},
				{
					name: 'Knife',
					image: 'https://tibiopedia.pl/images/static/items/knife.gif'
				}
			],
			rare: [
				{
					name: 'Golden Key',
					image: 'https://tibiopedia.pl/images/static/items/golden_key.gif'
				}
			],
			veryRare: [
				{
					name: '?',
					image: undefined
				}
			]
		},
		{
			name: 'Mendog',
			image: 'https://tibiopedia.pl/images/static/monsters/dwarf.gif',
			location: t('mendog'),
			common: [
				{
					name: 'Nothing',
					image: undefined
				}
			],
			rare: [
				{
					name: 'Nothing',
					image: undefined
				}
			],
			veryRare: [
				{
					name: 'Nothing',
					image: undefined
				}
			]
		},
		{
			name: 'Spider Queen',
			image: 'https://tibiopedia.pl/images/static/monsters/tarantula.gif',
			location: t('spiderQueen'),
			common: [
				{
					name: 'Small Emerald',
					image: 'https://tibiopedia.pl/images/static/items/small_emerald.gif'
				}
			],
			rare: [
				{
					name: '?',
					image: undefined
				}
			],
			veryRare: [
				{
					name: '?',
					image: undefined
				}
			]
		},
		{
			name: 'Undead Cavebear',
			image: 'https://tibiopedia.pl/images/static/monsters/undead_cavebear.gif',
			location: t('undeadCavebear'),
			common: [
				{
					name: 'Maxilla',
					image: 'https://tibiopedia.pl/images/static/items/maxilla.gif'
				}
			],
			rare: [
				{
					name: 'Health Potion',
					image: 'https://tibiopedia.pl/images/static/items/health_potion.gif'
				}
			],
			veryRare: [
				{
					name: '?',
					image: undefined
				}
			]
		},
		{
			name: 'Willi Wasp',
			image: 'https://tibiopedia.pl/images/static/monsters/willi_wasp.gif',
			location: t('williWasp'),
			common: [
				{
					name: 'Silver Amulet',
					image: 'https://tibiopedia.pl/images/static/items/silver_amulet.gif'
				}
			],
			rare: [
				{
					name: 'Small Emerald',
					image: 'https://tibiopedia.pl/images/static/items/small_emerald.gif'
				}
			],
			veryRare: [
				{
					name: '?',
					image: undefined
				}
			]
		},
		{
			name: 'Kraknaknork',
			image: 'https://tibiopedia.pl/images/static/monsters/kraknaknork.gif',
			location: t('kraknaknork'),
			common: [
				{
					name: 'Star Ring',
					image: 'https://tibiopedia.pl/images/static/items/star_ring.gif'
				},
				{
					name: 'Small Ruby',
					image: 'https://tibiopedia.pl/images/static/items/small_ruby.gif'
				}
			],
			rare: [
				{
					name: 'Book of Orc Language',
					image: 'https://tibiopedia.pl/images/static/items/book_of_orc_language.gif'
				}
			],
			veryRare: [
				{
					name: 'Wooden Sword',
					image: 'https://tibiopedia.pl/images/static/items/wooden_sword.gif'
				},
				{
					name: 'Magic Wand',
					image: 'https://tibiopedia.pl/images/static/items/wand_of_vortex.gif'
				}
			]
		},
		{
			name: 'The Hog',
			image: 'https://tibiopedia.pl/images/static/monsters/boar.gif',
			location: t('theHog'),
			common: [
				{
					name: 'Haunch of Boar',
					image: 'https://tibiopedia.pl/images/static/items/haunch_of_boar.gif'
				}
			],
			rare: [
				{
					name: '?',
					image: undefined
				}
			],
			veryRare: [
				{
					name: '?',
					image: undefined
				}
			]
		},
		{
			name: 'Rottie the Rotworm',
			image: 'https://tibiopedia.pl/images/static/monsters/rotworm.gif',
			location: t('rottietheRotworm'),
			common: [
				{
					name: 'Katana',
					image: 'https://tibiopedia.pl/images/static/items/katana.gif'
				},
				{
					name: 'Legion Helmet',
					image: 'https://tibiopedia.pl/images/static/items/legion_helmet.gif'
				},
				{
					name: 'Copper Shield',
					image: 'https://tibiopedia.pl/images/static/items/copper_shield.gif'
				}
			],
			rare: [
				{
					name: 'Soldier Helmet',
					image: 'https://tibiopedia.pl/images/static/items/soldier_helmet.gif'
				}
			],
			veryRare: [
				{
					name: 'Jagged Sword',
					image: 'https://tibiopedia.pl/images/static/items/jagged_sword.gif'
				},
				{
					name: 'Steel Shield',
					image: 'https://tibiopedia.pl/images/static/items/steel_shield.gif'
				}
			]
		},
		{
			name: 'Rotworm Queen',
			image: 'https://tibiopedia.pl/images/static/monsters/rotworm_queen.gif',
			location: t('rotwormQueen'),
			common: [
				{
					name: '?',
					image: undefined
				}
			],
			rare: [
				{
					name: '?',
					image: undefined
				}
			],
			veryRare: [
				{
					name: '?',
					image: undefined
				}
			]
		},
		{
			name: 'Elyan Glar',
			image: 'https://tibiopedia.pl/images/static/monsters/white_deer.gif',
			location: t('elyanGlar'),
			common: [
				{
					name: 'Small Sapphire',
					image: 'https://tibiopedia.pl/images/static/items/small_sapphire.gif'
				},
				{
					name: 'White Deer Antlers',
					image: 'https://tibiopedia.pl/images/static/items/white_deer_antlers.gif'
				}
			],
			rare: [
				{
					name: 'Crystal ring',
					image: 'https://tibiopedia.pl/images/static/items/crystal_ring.gif'
				}
			],
			veryRare: [
				{
					name: '?',
					image: undefined
				}
			]
		},
		{
			name: 'Moodrake',
			image: 'https://tibiopedia.pl/images/static/monsters/minotaur_guard.gif',
			location: t('moodrake'),
			common: [
				{
					name: 'Meat',
					image: 'https://tibiopedia.pl/images/static/items/meat.gif'
				}
			],
			rare: [
				{
					name: '?',
					image: undefined
				}
			],
			veryRare: [
				{
					name: '?',
					image: undefined
				}
			]
		},
		{
			name: 'Yeti',
			image: 'https://tibiopedia.pl/images/static/monsters/yeti.gif',
			location: t('yeti'),
			common: [
				{
					name: 'Snowball',
					image: 'https://tibiopedia.pl/images/static/items/snowball.gif'
				}
			],
			rare: [
				{
					name: 'Wolf Tooth Chain',
					image: 'https://tibiopedia.pl/images/static/items/wolf_tooth_chain.gif'
				}
			],
			veryRare: [
				{
					name: 'Bunnyslippers',
					image: 'https://tibiopedia.pl/images/static/items/bunnyslippers.gif'
				}
			]
		}
	]
}
