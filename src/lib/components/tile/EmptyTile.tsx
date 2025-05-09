import React from 'react'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import { colors } from 'common'

export const EmptyTile: React.FunctionComponent = () => {
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
                mb={isMobile ? '40px' : '32px'}
                cursor="pointer"
                border={"1px solid #FFA260"}
                transition="box-shadow 0.3s ease, transform 0.3s ease"
            />
        </Flex>
    )
}
