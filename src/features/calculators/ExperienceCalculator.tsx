import React, { useState } from 'react'
import { CalculatorFields, ExperienceSearchedValues } from './types'
import { useFormik } from 'formik'
import { missingExpForLevel } from './helpers'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import { BasicButton, Input } from 'lib/components'
import { calculateExperiencePercentage } from './helpers/experience'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    currentLevel: number | null;
    percentToNext: number | null;
    desiredLevel: number | null;
}

export const ExperienceCalculator: React.FunctionComponent = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { t } = useTranslation('translation', { keyPrefix: 'experience' })
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<ExperienceSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            currentLevel: 1,
            percentToNext: 100,
            desiredLevel: 99
        },
        onSubmit: form => {
            if (!form.currentLevel || !form.desiredLevel || !form.percentToNext) {
                return
            }

            const missingExperience = missingExpForLevel(Number(form.currentLevel), Number(form.percentToNext), Number(form.desiredLevel))
            const percentage = calculateExperiencePercentage(Number(form.currentLevel), Number(form.percentToNext), Number(form.desiredLevel))

            setSearchedValues({
                missingExperience,
                currentLevel: form.currentLevel,
                percentToNext: form.percentToNext,
                desiredLevel: form.desiredLevel,
                percentage
            })
            setIsCalculated(true)
        }
    })

    return (
        <Flex justifyContent="center" height="100%" color={colors.text} px={isMobile ? 4 : 0}>
            <Flex
                height={isMobile ? "auto" : isCalculated ? "680px" : "500px"}
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
                    {t('experienceCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.CURRENTLEVEL, value)}
                        label={t('currentLevel')}
                        isNumeric
                        controlledValue={values.currentLevel?.toString()}
                        isClearable={false}
                    />
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.PERCENTTONEXT, value)}
                        label={t('percentToNextLevel')}
                        isNumeric
                        controlledValue={values.percentToNext?.toString()}
                        isClearable={false}
                    />
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.DESIREDLEVEL, value)}
                        label={t('desiredLevel')}
                        isNumeric
                        controlledValue={values.desiredLevel?.toString()}
                        isClearable={false}
                    />
                    <BasicButton onClick={() => handleSubmit()} text={t('calculate')}/>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                {t('missingExperience', {
                                    currentLevel: searchedValues?.currentLevel,
                                    percentToNext: searchedValues?.percentToNext,
                                    missingExperience: searchedValues?.missingExperience.toLocaleString(),
                                    desiredLevel: searchedValues?.desiredLevel
                                })}
                            </Flex>
                            <Flex>
                                {t('percentage', { percentage: searchedValues?.percentage })}
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}
