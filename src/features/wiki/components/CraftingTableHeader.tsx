import { Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

type CraftingTableHeaderProps = {
	withCrafting?: boolean
}

export const CraftingTableHeader: React.FunctionComponent<CraftingTableHeaderProps> = ({ withCrafting }) => {
	const { t } = useTranslation('translation', { keyPrefix: 'wiki' })

	return (
		<Thead>
			<Tr>
				<Th>{t('common.name')}</Th>
				<Th>{t('crafting.requiredLevel')}</Th>
				{withCrafting && (
					<Th>{t('crafting.craftingChance')}</Th>
				)}
				<Th>{t('crafting.ingredients')}</Th>
			</Tr>
		</Thead>
	)
}
