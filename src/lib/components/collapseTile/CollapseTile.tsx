import { Flex, Text } from '@chakra-ui/react'
import { colors } from 'common'
import React from 'react'

type CollapseTileProps = {
	isOpen: boolean,
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	title: string
}

export const CollapseTile: React.FunctionComponent<CollapseTileProps> = ({ isOpen, setIsOpen, title }) => (
	<Flex onClick={() => setIsOpen(prevState => !prevState)} cursor="pointer" p={{ base: 2, sm: 3, md: 6 }} overflowX="auto" width="100%" border={`1px solid ${colors.text}`} borderRadius="lg" alignItems="center">
		<Flex>
			<Text fontSize="10px" transform={isOpen ? 'rotate(90deg)' : undefined} mr="15px">
				▶
			</Text>
		</Flex>
		<Text>
			{title}
		</Text>
	</Flex>
)
