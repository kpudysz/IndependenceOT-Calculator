import React, { useState } from 'react'
import { CalculatorFields, StaminaSearchedValues } from './types'
import { useFormik } from 'formik'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import { BasicButton, Input } from 'lib/components'
import { format } from 'date-fns'
import { pl, enUS } from 'date-fns/locale'
import { addMinutesToCurrentDate, calculateStamina, formatMinutesToStamina } from './helpers'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'
import { Languages } from 'lib/types'

type FormValues = {
    currentStamina: string,
    goalStamina: string
}

type StaminaCalculatorProps = {
    locale: string
}

export const StaminaCalculator: React.FunctionComponent<StaminaCalculatorProps> = ({ locale }) => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { t } = useTranslation('translation', { keyPrefix: 'stamina' })
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<StaminaSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            currentStamina: '39:00',
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
            <Flex
                height={isMobile ? "auto" : isCalculated ? "500px" : "400px"}
                width={isMobile ? "100%" : "600px"}
                maxWidth="600px"
                borderRadius="10px"
                background={colors.background}
                alignItems="center"
                flexDirection="column"
                padding={isMobile ? "10px" : "30px"}
            >
                <Flex fontSize={isMobile ? "28px" : "35px"} fontWeight={'bold'} mt="40px" textAlign="center">
                    {t('staminaCalculator')}
                </Flex>
                <Flex flexDirection="column" gap={isMobile ? "15px" : "20px"} mt="20px" width="100%">
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.CURRENTSTAMINA, value)}
                        label={t('currentStamina')}
                        controlledValue={values.currentStamina}
                        isClearable={false}
                    />
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.GOALSTAMINA, value)}
                        label={t('desiredStamina')}
                        controlledValue={values.goalStamina}
                        isClearable={false}
                    />
                    <BasicButton onClick={() => handleSubmit()} text={t('calculate')}/>
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
