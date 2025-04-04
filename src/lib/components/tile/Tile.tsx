import React, { JSX, useState } from 'react'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import { AvailableCalculators } from 'features'
import { IconColorProps } from 'lib/types'
import { colors } from 'common'

type TileProps = {
    title: AvailableCalculators,
    Icon(props: IconColorProps): JSX.Element,
    onClick(title: AvailableCalculators): void
}

export const Tile: React.FunctionComponent<TileProps> = ({ Icon, title, onClick }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isMobile] = useMediaQuery('(max-width: 768px)')

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            width={isMobile ? "120px" : "240px"}
        >
            <Flex
                borderRadius="10px"
                alignItems="center"
                justifyContent="center"
                height={isMobile ? "120px" : "240px"}
                width="100%"
                background={colors.background}
                cursor="pointer"
                border={isHovered ? "1px solid #E5FF60" : "1px solid #FFA260"}
                transition="box-shadow 0.3s ease, transform 0.3s ease"
                boxShadow={isHovered ? "0 8px 16px #E5FF60" : "none"}
                transform={isHovered ? "translateY(-4px)" : "none"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => onClick(title)}
            >
                <Icon color={isHovered ? colors.yellow : colors.orange} />
            </Flex>
            <Flex
                color={isHovered ? colors.yellow : colors.orange}
                fontWeight="bold"
                fontSize={isMobile ? "16px" : "20px"}
                mt="10px"
                textAlign="center"
            >
                {title}
            </Flex>
        </Flex>
    )
}
