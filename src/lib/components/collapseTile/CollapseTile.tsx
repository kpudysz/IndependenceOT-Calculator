import { Flex, Text } from '@chakra-ui/react'
import { colors } from 'common'
import React from 'react'

type CollapseTileProps = {
	isOpen: boolean,
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	title: string
}

export const CollapseTile: React.FunctionComponent<CollapseTileProps> = ({ isOpen, setIsOpen, title }) => (
	<Flex onClick={() => setIsOpen(prevState => !prevState)} cursor="pointer" width="100%" border={`1px solid ${colors.text}`} borderRadius="lg" p="10px" alignItems="center">
		<Text>
			<Flex fontSize="10px" transform={isOpen ? 'rotate(90deg)' : undefined} mr="15px">
				▶
			</Flex>
		</Text>
		<Text>
			{title}
		</Text>
	</Flex>
)
