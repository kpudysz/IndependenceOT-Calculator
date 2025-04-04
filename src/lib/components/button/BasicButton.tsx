import React from 'react'
import { colors } from 'common'
import { Button } from '@chakra-ui/react'

type BasicButtonProps = {
    onClick: VoidFunction,
    text: string
}

export const BasicButton: React.FunctionComponent<BasicButtonProps> = ({ onClick, text }) => (
    <Button
        padding="8px 22px"
        mt="20px"
        borderRadius="4px"
        border="1px solid"
        borderColor={colors.orange}
        background={colors.background}
        _hover={{
            color: colors.yellow,
            borderColor: colors.yellow,
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
            boxShadow: "0 8px 16px #E5FF60",
            transform: "translateY(-4px)"
        }}
        _active={{
            background: colors.background,
            color: "lightgreen",
            borderColor: "lightgreen",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
            boxShadow: "0 8px 16px lightgreen",
            transform: "translateY(-4px)"
        }}
        color={colors.orange}
        onClick={onClick}
    >
        {text}
    </Button>
)
