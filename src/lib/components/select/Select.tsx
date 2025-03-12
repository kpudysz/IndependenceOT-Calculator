import React from 'react'
import { Select as ChakraReactSelect } from 'chakra-react-select'
import { FormControl, FormLabel } from '@chakra-ui/react'

type SelectOptions = {
    label: string
    value: any
    icon?: React.ReactNode
}

type SelectProps = {
    options: Array<SelectOptions>
    placeholder?: string
    value?: SelectOptions | Array<SelectOptions>
    isClearable?: boolean
    isRequired?: boolean
    isInvalid?: boolean
    label?: string
    withoutBorderColor?: boolean
    mt?: string
    withPortal?: boolean
    width?: string
    isSearchable?: boolean
    isDisabled?: boolean
    isMulti?: boolean
    onChange(selectedOption: SelectOptions): void
}

export const Select: React.FunctionComponent<SelectProps> = ({
    options,
    placeholder,
    value,
    isClearable,
    isDisabled,
    isRequired,
    withPortal,
    onChange,
    withoutBorderColor,
    width,
    isSearchable,
    isMulti,
    mt,
    label,
    isInvalid
}) => {
    const typedValue = value as SelectOptions

    return (
        <FormControl isInvalid={isInvalid} isRequired={isRequired} cursor="pointer">
            {label && (
                <FormLabel fontWeight="500" mb="8px" mt={mt} color={isDisabled ? 'gray' : '#909198'}>
                    {label}
                </FormLabel>
            )}
            <ChakraReactSelect
                menuPortalTarget={withPortal ? document.body : undefined}
                options={options}
                placeholder={placeholder}
                value={value}
                isSearchable={isSearchable}
                isClearable={isClearable}
                isDisabled={isDisabled}
                isRequired={isRequired}
                onChange={newValue => onChange(newValue as SelectOptions)}
                errorBorderColor="red"
                isInvalid={isInvalid}
                focusBorderColor="none"
                isMulti={isMulti}
                closeMenuOnSelect={!isMulti}
                useBasicStyles
                chakraStyles={{
                    placeholder: provided => ({
                        ...provided,
                        color: 'gray'
                    }),
                    control: provided => ({
                        ...provided,
                        borderColor: !isMulti && !withoutBorderColor && typedValue?.value ? 'borderGreen' : 'gray',
                        width,
                        border: '1px solid',
                        color: '#909198',
                        whiteSpace: 'nowrap',
                        maxWidth: '100%',
                        overflow: 'visible'
                    }),
                    menuList: provided => ({
                        ...provided,
                        border: '1px solid',
                        borderColor: 'gray',
                        borderRadius: '5px',
                        padding: 0,
                        color: 'black',
                        position: 'absolute'
                    }),
                    option: (provided, { isSelected }) => ({
                        ...provided,
                        ...(isSelected && {
                            minHeight: '30px',
                            backgroundColor: 'lightGreen',
                            color: 'black'
                        }),
                        _hover: {
                            backgroundColor: 'mint'
                        }
                    }),
                    multiValue: provided => ({
                        ...provided,
                        height: '90%',
                        maxWidth: 'none',
                        width: 'auto',
                        minWidth: 'auto'
                    }),
                    valueContainer: provided => ({
                        ...provided,
                        caretColor: 'transparent',
                        alignItems: 'center',
                        overflow: 'auto',
                        display: 'flex',
                        flexWrap: 'nowrap'
                    }),
                    singleValue: provided => ({
                        ...provided,
                        overflow: 'auto'
                    })
                }}
            />
        </FormControl>
    )
}
