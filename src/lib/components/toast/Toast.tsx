import React from 'react'
import { Flex } from "@chakra-ui/react"
import { colors } from "common"

type ToastProps = {
    text: string
}

export const Toast: React.FunctionComponent<ToastProps> = ({ text }) => (
    <Flex color={colors.text} line-height="15px" font-size="14px">
        {text}
    </Flex>
)
