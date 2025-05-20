import { Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

type CraftingTableHeaderProps = {
	withCrafting?: boolean
}

export const CraftingTableHeader: React.FunctionComponent<CraftingTableHeaderProps> = ({ withCrafting }) => (
	<Thead>
		<Tr>
			<Th>Name</Th>
			<Th>Required Level</Th>
			{withCrafting && (
				<Th>Crafting Chance</Th>
			)}
			<Th>Ingredients</Th>
		</Tr>
	</Thead>
)
