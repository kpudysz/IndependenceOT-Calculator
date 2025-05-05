import React, { useState } from 'react'
import { useFormik } from 'formik'
import { CalculatorFields, PenaltySearchedValues } from './types'
import { calculateDeathPenalty } from './helpers'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import { BasicButton, Input } from 'lib/components'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'
import { calculateNeededExpForLevel } from './helpers/experience'

type FormValues = {
    currentLevel: string
}

export const DeathPenaltyCalculator: React.FunctionComponent = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { t } = useTranslation('translation')
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<PenaltySearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            currentLevel: ''
        },
        onSubmit: form => {
            if (!form.currentLevel) {
                return
            }

            const experienceLoss = calculateDeathPenalty(Number(form.currentLevel))
            const percentage = ((experienceLoss / calculateNeededExpForLevel(Number(form.currentLevel))) * 100).toFixed(2)

            setSearchedValues({
                currentLevel: Number(form.currentLevel),
                experienceLoss,
                percentage
            })

            setIsCalculated(true)
        }
    })

    return (
        <Flex justifyContent="center" height="100%" color={colors.text} px={isMobile ? 4 : 0}>
            <Flex
                height={isMobile ? "auto" : isCalculated ? "400px" : "300px"}
                width={isMobile ? "100%" : "600px"}
                borderRadius="10px"
                background={colors.background}
                alignItems="center"
                flexDirection="column"
                padding={isMobile ? "20px" : "0 30px"}
            >
                <Flex
                    fontSize={isMobile ? "24px" : "35px"}
                    fontWeight="bold"
                    mt={isMobile ? "20px" : "40px"}
                    textAlign="center"
                >
                    {t('deathPenalty.deathPenaltyCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.CURRENTLEVEL, value)}
                        label={t('experience.currentLevel')}
                        isNumeric
                        controlledValue={values.currentLevel?.toString()}
                        isClearable={false}
                    />
                    <BasicButton onClick={() => handleSubmit()} text={t('basic.calculate')}/>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                {t('deathPenalty.deathPenaltyResult', {
                                    currentLevel: searchedValues?.currentLevel,
                                    experienceLoss: searchedValues?.experienceLoss.toLocaleString(),
                                    percentage: searchedValues?.percentage
                                })}
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}
