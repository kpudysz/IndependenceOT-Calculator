import { useTranslation } from "react-i18next"

export const outfitsData = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.outfits' })

	return [
		{
			name: 'citizen',
			firstAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=1&g=0&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			secondAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=1&g=0&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			femaleFirst: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=1&g=1&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			femaleSecond: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=1&g=1&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			descriptionFirst: t('citizen.firstAddon'),
			descriptionSecond: t('citizen.secondAddon')
		},
		{
			name: 'mage',
			firstAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=3&g=0&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			femaleFirst: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=6&g=1&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			descriptionFirst: t('mage.firstAddon')
		},
		{
			name: 'noble',
			firstAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=5&g=0&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			secondAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=5&g=0&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			femaleFirst: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=5&g=1&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			femaleSecond: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=5&g=1&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			descriptionFirst: t('noble.firstAddon'),
			descriptionSecond: t('noble.secondAddon')
		},
		{
			name: 'summoner',
			firstAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=6&g=0&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			femaleFirst: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=3&g=1&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			descriptionFirst: t('summoner.firstAddon')
		},
		{
			name: 'warrior',
			firstAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=7&g=0&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			femaleFirst: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=7&g=1&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			descriptionFirst: t('warrior.firstAddon')
		},
		{
			name: 'druid',
			firstAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=9&g=0&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			secondAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=9&g=0&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			femaleFirst: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=9&g=1&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			femaleSecond: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=9&g=1&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			descriptionFirst: t('druid.firstAddon'),
			descriptionSecond: t('druid.secondAddon')
		},
		{
			name: 'afflicted',
			baseOutfit: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=25&g=0&r=0&h=78&p=69&s=58&d=76&a=0&m=1&ac=0',
			baseOutfitFemale: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=25&g=1&r=0&h=78&p=69&s=58&d=76&a=0&m=1&ac=0',
			firstAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=25&g=0&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			secondAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=25&g=0&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			femaleFirst: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=25&g=1&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			femaleSecond: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=25&g=1&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			description: t('afflicted.description'),
			descriptionFirst: t('afflicted.firstAddon'),
			descriptionSecond: t('afflicted.secondAddon')
		},
		{
			name: 'lupine',
			baseOutfit: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=55&g=0&r=0&h=78&p=69&s=58&d=76&a=0&m=1&ac=0',
			baseOutfitFemale: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=55&g=1&r=0&h=78&p=69&s=58&d=76&a=0&m=1&ac=0',
			firstAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=55&g=0&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			secondAddon: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=55&g=0&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			femaleFirst: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=55&g=1&r=0&h=78&p=69&s=58&d=76&a=1&m=1&ac=0',
			femaleSecond: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=55&g=1&r=0&h=78&p=69&s=58&d=76&a=2&m=1&ac=0',
			description: t('lupine.description'),
			descriptionFirst: t('lupine.firstAddon'),
			descriptionSecond: t('lupine.secondAddon')
		},
		{
			name: 'ranger',
			baseOutfit: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=42&g=0&r=0&h=78&p=69&s=58&d=76&a=0&m=1&ac=0',
			baseOutfitFemale: 'https://tibiopedia.pl/purephp/outfiter/outfiter.php?o=42&g=1&r=0&h=78&p=69&s=58&d=76&a=0&m=1&ac=0',
			description: t('ranger.description')
		}
	]
}
