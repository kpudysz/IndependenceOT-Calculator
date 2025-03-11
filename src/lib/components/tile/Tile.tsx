import React from 'react'
import { Flex } from '@chakra-ui/react'
import { AvailableCalculators } from 'features'

type TileProps = {
    title: AvailableCalculators,
    icon: string,
    onClick(title: AvailableCalculators): void
}

export const Tile: React.FunctionComponent<TileProps> = ({ icon, title, onClick }) => (
    <Flex borderRadius="10px" alignItems="center" flexDirection="column" height="240px" width="240px" background="#13141B" onClick={() => onClick(title)} cursor="pointer">
        <Flex>
            {icon}
        </Flex>
        <Flex color="#909198" fontWeight="bold">
            {title}
        </Flex>
    </Flex>
)
