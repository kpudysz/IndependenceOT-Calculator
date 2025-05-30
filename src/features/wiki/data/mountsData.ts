
import { useTranslation } from 'react-i18next'

export const mountsData = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki.mounts' })

	return [
		{
			name: 'War Bear',
			image: 'https://tibiopedia.pl/images/static/mounts/war_bear.gif',
			description: t('warBear')
		},
		{
			name: 'Black Sheep',
			image: 'https://tibiopedia.pl/images/static/mounts/black_sheep.gif',
			description: t('blackSheep')
		},
		{
			name: 'Rapid Boar',
			image: 'https://tibiopedia.pl/images/static/mounts/rapid_boar.gif',
			description: t('rapidBoar')
		},
		{
			name: 'War Horse',
			image: 'https://tibiopedia.pl/images/static/mounts/war_horse.gif',
			description: t('warHorse')
		},
		{
			name: 'Rented Horse',
			image: 'https://tibiopedia.pl/images/static/mounts/rented_horse.gif',
			description: t('rentedHorse')
		},
		{
			name: 'Kingly Deer',
			image: 'https://tibiopedia.pl/images/static/mounts/kingly_deer.gif',
			description: t('kinglyDeer')
		},
		{
			name: 'Lady Bug',
			image: 'https://tibiopedia.pl/images/static/mounts/lady_bug.gif',
			description: t('ladyBug')
		},
		{
			name: 'Marsh Toad',
			image: 'https://tibiopedia.pl/images/static/mounts/marsh_toad.gif',
			description: t('marshToad')
		}
	]
}
