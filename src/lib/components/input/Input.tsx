import React, { useEffect, useRef, useState } from 'react'
import {
    FormControl,
    Text,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    InputRightAddon,
    InputRightElement,
    InputProps as ChakraInputProps,
    FormLabelProps,
    Flex,
    Tooltip,
    Stack
} from '@chakra-ui/react'
import { Icons } from 'assets'

export type InputProps = {
    label?: string
    placeholder?: string
    isRequired?: boolean
    isDisabled?: boolean
    isClearable?: boolean
    errorMessage?: string
    controlledValue?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    onClick?: VoidFunction
    isNumeric?: boolean
    inputStyles?: ChakraInputProps
    withControlledValue?: boolean
    leftAddon?: string
    isTooltipLabel?: boolean
    labelStyles?: FormLabelProps
    rightAddon?: string
    isPassword?: boolean
    allowMinutes?: boolean
    onLeftAddonClick?: VoidFunction
    onRightAddonClick?: VoidFunction
    mt?: ChakraInputProps['mt']
    onSelect?(start?: number | null, end?: number | null): void
    onChange(value: string): void
    onFocus?(label?: string): void
    onBlur?(event: React.FocusEvent): void
}

export const Input: React.FunctionComponent<InputProps> = ({
    label,
    leftIcon,
    rightIcon,
    onChange,
    isTooltipLabel,
    inputStyles,
    onFocus,
    onSelect,
    isRequired,
    isDisabled,
    isNumeric,
    placeholder,
    isClearable = true,
    errorMessage,
    onClick,
    controlledValue,
    leftAddon,
    rightAddon,
    onLeftAddonClick,
    onRightAddonClick,
    mt,
    isPassword,
    labelStyles,
    withControlledValue,
    onBlur
}) => {
    const prevControlledValue = useRef(controlledValue)
    const [value, setValue] = useState(controlledValue || '')

    useEffect(() => {
        if (value !== '' && controlledValue === undefined && prevControlledValue.current !== undefined) {
            setValue('')
        }

        if (controlledValue !== undefined) {
            setValue(controlledValue)
        }

        prevControlledValue.current = controlledValue
    }, [controlledValue])

    const handleInputChange = (valueAsString: string) => {
        if (!withControlledValue) {
            setValue(valueAsString)
        }

        onChange(valueAsString)
    }

    const inputRef = useRef<HTMLInputElement | null>(null)

    const resolveClearIconPosition = () => {
        if (rightAddon || rightIcon) {
            return '55px'
        }

        return 0
    }

    return (
        <FormControl isInvalid={Boolean(errorMessage)} isRequired={isRequired} isDisabled={isDisabled}>
            {label && (
                <FormLabel fontWeight="500" mb="8px" {...labelStyles} display={isTooltipLabel ? 'flex' : 'block'} mt={mt}>
                    {label}
                    {isTooltipLabel && (
                        <Tooltip
                            color="black"
                            bg="#C6F6D5"
                            placement="top-start"
                            hasArrow
                            borderRadius="6px"
                            maxWidth="350px"
                            p="8px 12px 8px 15px"
                            label={
                                <Stack gap="1px">
                                    <Text>Dozwolone znaki:</Text>
                                    <Text>@R, @G, @B → wartości oznaczające wskaźnik RGB</Text>
                                    <Text>Operacje matematyczne ( +, - , *, /, potęgowanie)</Text>
                                    <Text>Liczby → Liczby Zmiennoprzecinkowe (.)</Text>
                                </Stack>
                            }
                        >
                            <Flex marginLeft="6px" cursor="pointer">
                                <Icons.QuestionmarkCircle height="20px" width="20px" fill="gray" />
                            </Flex>
                        </Tooltip>
                    )}
                </FormLabel>
            )}
            <InputGroup>
                {leftAddon && <InputLeftAddon children={leftAddon} onClick={onLeftAddonClick} cursor={onLeftAddonClick ? 'pointer' : 'auto'} />}
                {leftIcon && <InputLeftElement height="100%" role="leftIcon" children={leftIcon} left={leftAddon ? '55px' : 0} />}
                {rightIcon && <InputRightElement height="100%" role="rightIcon" children={rightIcon} right={rightAddon ? '55px' : 0} />}
                <ChakraInput
                    ref={inputRef}
                    onClick={onClick}
                    type={isPassword ? 'password' : isNumeric ? 'number' : 'text'}
                    placeholder={placeholder}
                    _placeholder={{ color: 'gray' }}
                    focusBorderColor="none"
                    value={value}
                    onSelect={() => {
                        if (onSelect) {
                            const selectedValue = inputRef.current

                            return onSelect(selectedValue?.selectionStart, selectedValue?.selectionEnd)
                        }
                    }}
                    onFocus={() => onFocus && onFocus(label)}
                    onChange={event => handleInputChange(event.target.value)}
                    onBlur={event => onBlur && onBlur(event)}
                    border="1px solid"
                    height="42px"
                    borderColor={value ? 'borderGreen' : 'gray'}
                    {...inputStyles}
                />
                {isClearable && value && !isDisabled && (
                    <InputRightElement
                        height="100%"
                        right={resolveClearIconPosition()}
                        role="clearIcon"
                        cursor="pointer"
                        children={<Icons.Clear />}
                        onClick={() => {
                            onChange('')
                            setValue('')
                        }}
                    />
                )}
                {rightAddon && <InputRightAddon children={rightAddon} onClick={onRightAddonClick} cursor={onRightAddonClick ? 'pointer' : 'auto'} />}
            </InputGroup>
            {errorMessage && (
                <FormErrorMessage>
                    <Text color="red">{errorMessage}</Text>
                </FormErrorMessage>
            )}
        </FormControl>
    )
}
