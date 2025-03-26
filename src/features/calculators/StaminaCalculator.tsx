import React, { useState } from 'react'
import { CalculatorFields, StaminaSearchedValues } from './types'
import { useFormik } from 'formik'
import { Button, Flex } from '@chakra-ui/react'
import { Input } from 'lib/components'
import { format } from 'date-fns'
import { pl, enUS } from 'date-fns/locale'
import { addMinutesToCurrentDate, calculateStamina, formatMinutesToStamina } from './helpers'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'
import { Languages } from '../../lib/types'

type FormValues = {
    currentStamina: string,
    goalStamina: string
}

type StaminaCalculatorProps = {
    locale: string
}

export const StaminaCalculator: React.FunctionComponent<StaminaCalculatorProps> = ({ locale }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'stamina' })
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
            const requiredDate = format(addMinutesToCurrentDate(timeRequired), 'HH:mm MMMM d, yyyy', { locale: locale === Languages.En ? enUS : pl })

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
                    {t('staminaCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.CURRENTSTAMINA, value)} label={t('currentStamina')} controlledValue={values.currentStamina} isClearable={false} />
                    <Input onChange={value => setFieldValue(CalculatorFields.GOALSTAMINA, value)} label={t('desiredStamina')} controlledValue={values.goalStamina} isClearable={false}/>
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
                        {t('calculate')}
                    </Button>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                {t('staminaResult', {
                                    currentStamina: searchedValues?.currentStamina,
                                    goalStamina: searchedValues?.goalStamina,
                                    requiredHours: searchedValues?.requiredHours.hours,
                                    requiredMinutes: searchedValues?.requiredHours.minutes
                                })}
                            </Flex>
                            <Flex>
                                {t('staminaGoal', { goalTime: searchedValues?.goalTime })}
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}
