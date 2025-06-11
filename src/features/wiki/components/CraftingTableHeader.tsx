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
			<Tr wordBreak="break-word">
				<Th minWidth="30px" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
					{t('common.name')}
				</Th>
				<Th minWidth="30px" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
					{t('crafting.requiredLevel')}
				</Th>
				{withCrafting && (
					<Th minWidth="30px" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
						{t('crafting.craftingChance')}
					</Th>
				)}
				<Th minWidth="30px" px={{ base: 1, md: 5 }} py={{ base: 2, md: 4 }}>
					{t('crafting.ingredients')}
				</Th>
			</Tr>
		</Thead>
	)
}
