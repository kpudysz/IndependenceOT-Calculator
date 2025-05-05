import React, { useState } from 'react'
import { useFormik } from 'formik'
import { BasicSearchedValues, CalculatorFields, Skills } from './types'
import { calculateFistSkillTime, calculateSkill, skillEnumToValue } from './helpers'
import { calculateOfflineTraining, secondsToDate } from './helpers/functions'
import { calculateFistPercentageTime } from './helpers/fistSkill'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import { BasicButton, Input } from 'lib/components'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    currentSkill: number | null;
    percentToNext: number | null;
    desiredSkill: number | null;
}

export const FistCalculator: React.FunctionComponent = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { t } = useTranslation('translation')
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<BasicSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            currentSkill: 20,
            percentToNext: 100,
            desiredSkill: 35
        },
        onSubmit: form => {
            if (!form.currentSkill || !form.desiredSkill || !form.percentToNext) {
                return
            }

            const calculatedSkill = calculateSkill(Skills.FIST, Number(form.currentSkill), Number(form.percentToNext), Number(form.desiredSkill))
            const neededHits = Math.floor(calculatedSkill.neededHits)
            const timeForSkill = calculateFistSkillTime(Number(form.currentSkill), form.percentToNext, form.desiredSkill)
            const percentage = calculateFistPercentageTime(form.desiredSkill, timeForSkill)

            setSearchedValues({
                skillToCalculate: Skills.FIST,
                desiredSkill: form.desiredSkill,
                currentSkill: form.currentSkill,
                percentToNext: form.percentToNext,
                rawSkill: neededHits,
                timeForSkill: secondsToDate(timeForSkill, t),
                offlineTraining: calculateOfflineTraining(neededHits, t),
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
                    {t('fist.fistCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.CURRENTSKILL, value)}
                        label={t('basic.currentSkill')}
                        isNumeric
                        controlledValue={values.currentSkill?.toString()}
                        isClearable={false}
                    />
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.PERCENTTONEXT, value)}
                        label={t('basic.percentToNextSkill')}
                        isNumeric
                        controlledValue={values.percentToNext?.toString()}
                        isClearable={false}
                    />
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.DESIREDSKILL, value)}
                        label={t('basic.desiredSkill')}
                        isNumeric
                        controlledValue={values.desiredSkill?.toString()}
                        isClearable={false}
                    />
                    <BasicButton onClick={() => handleSubmit()} text={t('basic.calculate')}/>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                {t('basic.skillHits', {
                                    currentSkill: searchedValues?.currentSkill,
                                    skillType: skillEnumToValue(searchedValues?.skillToCalculate as Skills),
                                    percentToNext: searchedValues?.percentToNext,
                                    rawSkill: searchedValues?.rawSkill.toLocaleString(),
                                    desiredSkill: searchedValues?.desiredSkill
                                })}
                            </Flex>
                            <Flex>
                                {t('basic.timeForSkill', { timeForSkill: searchedValues?.timeForSkill })}
                            </Flex>
                            <Flex>
                                {t('basic.percentage', { percentage: searchedValues?.percentage })}
                            </Flex>
                            <Flex>
                                {t('basic.offlineTraining', { offlineTraining: searchedValues?.offlineTraining })}
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}
