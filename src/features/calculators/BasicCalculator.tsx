import React, { useState } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { Input, Select } from 'lib/components'
import { basicCalculatorOptions } from './config'
import { useFormik } from 'formik'
import { SelectOptions } from 'lib/types'
import { CalculatorFields, BasicSearchedValues, Skills } from './types'
import { calculateSkill, calculateSkillTime, skillEnumToValue, calculateOfflineTraining } from './helpers'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    skillToCalculate: SelectOptions | null;
    currentSkill: number | null;
    percentToNext: number | null;
    desiredSkill: number | null;
}

export const BasicCalculator: React.FunctionComponent = () => {
    const { t } = useTranslation('translation')
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<BasicSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            skillToCalculate: null,
            currentSkill: 10,
            percentToNext: 100,
            desiredSkill: 10
        },
        onSubmit: form => {
            if (!form.skillToCalculate || !form.currentSkill || !form.desiredSkill || !form.percentToNext) {
                return
            }

            const calculatedSkill = calculateSkill(form.skillToCalculate.value, Number(form.currentSkill), Number(form.percentToNext), Number(form.desiredSkill))
            const neededHits = Math.floor(calculatedSkill.neededHits)
            const timeForSkill = calculateSkillTime(form.skillToCalculate.value, Math.floor(calculatedSkill.neededHits), t)

            setSearchedValues({
                skillToCalculate: form.skillToCalculate.value,
                desiredSkill: form.desiredSkill,
                currentSkill: form.currentSkill,
                percentToNext: form.percentToNext,
                percentage: calculatedSkill.percentage,
                rawSkill: neededHits,
                offlineTraining: calculateOfflineTraining(neededHits, t),
                timeForSkill
            })
            setIsCalculated(true)
        }
    })

    return (
        <Flex justifyContent="center" height="100%" color={colors.text}>
            <Flex height={isCalculated ? "750px" : "600px"} width="600px" borderRadius="10px" background={colors.background} alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    {t('basic.basicCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Select options={basicCalculatorOptions} onChange={selectedOption => setFieldValue(CalculatorFields.SELECTSKILL, selectedOption)} label={t('basic.selectSkill')} placeholder={t('basic.select')} isClearable={false}/>
                    <Input onChange={value => setFieldValue(CalculatorFields.CURRENTSKILL, value)} label={t('basic.currentSkill')} isNumeric controlledValue={values.currentSkill?.toString()} isClearable={false} />
                    <Input onChange={value => setFieldValue(CalculatorFields.PERCENTTONEXT, value)} label={t('basic.percentToNextSkill')} isNumeric controlledValue={values.percentToNext?.toString()} isClearable={false}/>
                    <Input onChange={value => setFieldValue(CalculatorFields.DESIREDSKILL, value)} label={t('basic.desiredSkill')} isNumeric controlledValue={values.desiredSkill?.toString()} isClearable={false}/>
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
                        {t('basic.calculate')}
                    </Button>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center">
                            <Flex textAlign="center">
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
