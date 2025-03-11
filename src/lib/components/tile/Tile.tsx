import React, { JSX, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { AvailableCalculators } from 'features'
import { IconColorProps } from 'lib/types'

type TileProps = {
    title: AvailableCalculators,
    Icon(props: IconColorProps): JSX.Element,
    onClick(title: AvailableCalculators): void
}

export const Tile: React.FunctionComponent<TileProps> = ({ Icon, title, onClick }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Flex
            borderRadius="10px"
            alignItems="center"
            flexDirection="column"
            height="240px"
            width="240px"
            background="#13141B"
            cursor="pointer"
            border={isHovered ? "1px solid #E5FF60" : "1px solid #FFA260"}
            padding="16px 0"
            transition="box-shadow 0.3s ease, transform 0.3s ease"
            boxShadow={isHovered ? "0 8px 16px #E5FF60" : "none"} // ✅ Box shadow only on hover
            transform={isHovered ? "translateY(-4px)" : "none"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(title)}
        >
            <Flex>
                <Icon color={isHovered ? "#E5FF60" : "#FFA260"}/>
            </Flex>
            <Flex color={isHovered ? "#E5FF60" : "#FFA260"} fontWeight="bold" mt="50px" fontSize="20px">
                {title}
            </Flex>
        </Flex>
    )
}
