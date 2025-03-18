import React, { useState } from 'react'
import { CalculatorFields, SearchedMagicCalculatorValues, Skills } from './types'
import { useFormik } from 'formik'
import { calculateSkill, calculateSkillTime } from './helpers'
import { Button, Flex } from '@chakra-ui/react'
import { Input } from 'lib/components'
import { colors } from 'common'

type FormValues = {
    currentSkill: number | null;
    percentToNext: number | null;
    desiredSkill: number | null;
}

export const MagicCalculator: React.FunctionComponent = () => {
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
            const timeForSkill = calculateSkillTime(Skills.MAGIC, Math.floor(calculatedSkill.neededHits))

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
                    Magic Calculator
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.CURRENTSKILL, value)} label={'Current Skill'} isNumeric controlledValue={values.currentSkill?.toString()} isClearable={false} />
                    <Input onChange={value => setFieldValue(CalculatorFields.PERCENTTONEXT, value)} label={'Percent to Next Skill'} isNumeric controlledValue={values.percentToNext?.toString()} isClearable={false}/>
                    <Input onChange={value => setFieldValue(CalculatorFields.DESIREDSKILL, value)} label={'Desired Skill'} isNumeric controlledValue={values.desiredSkill?.toString()} isClearable={false}/>
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
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center">
                            <Flex textAlign="center">
                                With magic level {searchedValues?.currentSkill} and {searchedValues?.percentToNext} percent to next level you will need to use {searchedValues?.rawSkill.toLocaleString()} mana to reach magic level {searchedValues?.desiredSkill}.
                            </Flex>
                            <Flex>
                                To reach that magic by regeneration it will take approximately {searchedValues?.timeForSkill}.
                            </Flex>
                            <Flex>
                                To reach that magic level by potions it will require {searchedValues?.manaPotions} mana potions.
                            </Flex>
                            <Flex>
                                You currently burned {searchedValues?.percentage} % of total required mana.
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

