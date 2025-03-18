import React, { useState } from 'react'
import { CalculatorFields, StaminaSearchedValues } from './types'
import { useFormik } from 'formik'
import { Button, Flex } from '@chakra-ui/react'
import { Input } from 'lib/components'
import { format } from 'date-fns'
import { addMinutesToCurrentDate, calculateStamina, formatMinutesToStamina } from './helpers'
import { colors } from 'common'

type FormValues = {
    currentStamina: string,
    goalStamina: string
}

export const StaminaCalculator: React.FunctionComponent = () => {
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<StaminaSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            currentStamina: '14:00',
            goalStamina: '42:00'
        },
        onSubmit: form => {
            if (!form.currentStamina || !form.goalStamina) {
                return
            }

            const timeRequired = calculateStamina(form.currentStamina, form.goalStamina)
            const staminaFormat = formatMinutesToStamina(timeRequired)
            const requiredDate = format(addMinutesToCurrentDate(timeRequired), 'HH:mm MMMM d, yyyy')

            setSearchedValues({
                currentStamina: form.currentStamina,
                goalStamina: form.goalStamina,
                requiredHours: staminaFormat,
                goalTime: requiredDate
            })
            setIsCalculated(true)
        }
    })

    return (
        <Flex justifyContent="center" height="100%" color={colors.text}>
            <Flex height={isCalculated ? "500px" : "400px"} width="600px" borderRadius="10px" background={colors.background} alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    Stamina Calculator
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.CURRENTSTAMINA, value)} label={'Current Stamina'} controlledValue={values.currentStamina} isClearable={false} />
                    <Input onChange={value => setFieldValue(CalculatorFields.GOALSTAMINA, value)} label={'Desired Stamina'} controlledValue={values.goalStamina} isClearable={false}/>
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
                        onClick={() => handleSubmit()}
                    >
                        Calculate
                    </Button>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                If you have {searchedValues?.currentStamina} stamina and you want to have {searchedValues?.goalStamina} stamina, you need to wait {searchedValues?.requiredHours.hours} hours and {searchedValues?.requiredHours.minutes} minutes.
                            </Flex>
                            <Flex>
                                You will have desired stamina at {searchedValues?.goalTime}.
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}
