import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Icons } from 'assets'
import { colors } from 'common'

type BackProps = {
    onClick: VoidFunction
}

export const Back: React.FunctionComponent<BackProps> = ({ onClick }) => (
    <Flex justifyContent="flex-start" color={colors.text} cursor="pointer" marginRight="auto" onClick={onClick}>
        <Flex>
            <Icons.ArrowLeft/>
        </Flex>
        <Flex margin="5px 0 0 12px" color="">
            Back
        </Flex>
    </Flex>
)
