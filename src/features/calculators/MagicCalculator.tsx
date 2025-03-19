import React, { useState } from 'react'
import { CalculatorFields, SearchedMagicCalculatorValues, Skills } from './types'
import { useFormik } from 'formik'
import { calculateSkill, calculateSkillTime } from './helpers'
import { Button, Flex } from '@chakra-ui/react'
import { Input } from 'lib/components'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    currentSkill: number | null;
    percentToNext: number | null;
    desiredSkill: number | null;
}

export const MagicCalculator: React.FunctionComponent = () => {
    const { t } = useTranslation('translation')
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<SearchedMagicCalculatorValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            currentSkill: 0,
            percentToNext: 100,
            desiredSkill: 0
        },
        onSubmit: form => {
            if ((!form.currentSkill && form.currentSkill !== 0) || !form.desiredSkill || !form.percentToNext) {
                return
            }

            const calculatedSkill = calculateSkill(Skills.MAGIC, Number(form.currentSkill), Number(form.percentToNext), Number(form.desiredSkill))
            const neededHits = Math.floor(calculatedSkill.neededHits)
            const timeForSkill = calculateSkillTime(Skills.MAGIC, Math.floor(calculatedSkill.neededHits), t)

            setSearchedValues({
                skillToCalculate: Skills.MAGIC,
                desiredSkill: form.desiredSkill,
                currentSkill: form.currentSkill,
                percentToNext: form.percentToNext,
                percentage: calculatedSkill.percentage,
                rawSkill: neededHits,
                manaPotions: Math.ceil(neededHits / 100),
                timeForSkill
            })
            setIsCalculated(true)
        }
    })

    return (
        <Flex justifyContent="center" height="100%" color={colors.text}>
            <Flex height={isCalculated ? "680px" : "500px"} width="600px" borderRadius="10px" background={colors.background} alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    {t('magic.magicCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
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
                                {t('magic.requiredMana', {
                                    currentSkill: searchedValues?.currentSkill,
                                    percentToNext: searchedValues?.percentToNext,
                                    rawSkill: searchedValues?.rawSkill.toLocaleString(),
                                    desiredSkill: searchedValues?.desiredSkill
                                })}
                            </Flex>
                            <Flex>
                                {t('magic.regenerationTime', { timeForSkill: searchedValues?.timeForSkill })}
                            </Flex>
                            <Flex>
                                {t('magic.potionsAmount', { manaPotions: searchedValues?.manaPotions })}
                            </Flex>
                            <Flex>
                                {t('magic.percentage', { percentage: searchedValues?.percentage })}
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

