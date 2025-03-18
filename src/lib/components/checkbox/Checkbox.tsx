import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Icons } from 'assets'
import { colors } from 'common'

type CheckboxProps = {
    label?: string,
    isChecked: boolean,
    setIsChecked(value: boolean): void
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
    label,
    isChecked = false,
    setIsChecked
}) => (
    <Flex lineHeight="24px" cursor="pointer" alignItems="center" onClick={() => setIsChecked(!isChecked)} userSelect="none" mt="10px">
        <Flex background={colors.background} border="1px solid #909198" borderRadius="15%" alignItems="center" justifyContent="center">
            <Icons.Clear fill={isChecked ? colors.yellow : colors.background}/>
        </Flex>
        <Flex marginLeft="10px" whiteSpace="nowrap" color={colors.text}>
            {label}
        </Flex>
    </Flex>
)
