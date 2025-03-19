import React, { useState } from 'react'
import { CalculatorFields, ExperienceSearchedValues } from './types'
import { useFormik } from 'formik'
import { missingExpForLevel } from './helpers'
import { Button, Flex } from '@chakra-ui/react'
import { Input } from 'lib/components'
import { calculateExperiencePercentage } from './helpers/experience'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    currentLevel: number | null;
    percentToNext: number | null;
    desiredLevel: number | null;
}

export const ExperienceCalculator: React.FunctionComponent = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'experience' })
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<ExperienceSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            currentLevel: 1,
            percentToNext: 100,
            desiredLevel: 1
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
        <Flex justifyContent="center" height="100%" color={colors.text}>
            <Flex height={isCalculated ? "680px" : "500px"} width="600px" borderRadius="10px" background={colors.background} alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    {t('experienceCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.CURRENTLEVEL, value)} label={t('currentLevel')} isNumeric controlledValue={values.currentLevel?.toString()} isClearable={false} />
                    <Input onChange={value => setFieldValue(CalculatorFields.PERCENTTONEXT, value)} label={t('percentToNextLevel')} isNumeric controlledValue={values.percentToNext?.toString()} isClearable={false}/>
                    <Input onChange={value => setFieldValue(CalculatorFields.DESIREDLEVEL, value)} label={t('desiredLevel')} isNumeric controlledValue={values.desiredLevel?.toString()} isClearable={false}/>
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
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center">
                            <Flex textAlign="center">
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

