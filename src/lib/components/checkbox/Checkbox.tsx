import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Icons } from 'assets'

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
        <Flex background="#13141B" border="1px solid #909198" borderRadius="15%" alignItems="center" justifyContent="center">
            <Icons.Clear fill={isChecked ? "#E5FF60" : "#13141B"}/>
        </Flex>
        <Flex marginLeft="10px" whiteSpace="nowrap" color="#909198">
            {label}
        </Flex>
    </Flex>
)
