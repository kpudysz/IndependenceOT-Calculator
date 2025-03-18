import React, { useState } from 'react'
import { useFormik } from 'formik'
import { BasicSearchedValues, CalculatorFields, Skills } from './types'
import { calculateFistSkillTime, calculateSkill, skillEnumToValue } from './helpers'
import { calculateOfflineTraining, secondsToDate } from './helpers/functions'
import { calculateFistPercentageTime } from './helpers/fistSkill'
import { Button, Flex } from '@chakra-ui/react'
import { Input } from 'lib/components'
import { colors } from 'common'

type FormValues = {
    currentSkill: number | null;
    percentToNext: number | null;
    desiredSkill: number | null;
}

export const FistCalculator: React.FunctionComponent = () => {
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<BasicSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            currentSkill: 10,
            percentToNext: 100,
            desiredSkill: 10
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
                timeForSkill: secondsToDate(timeForSkill),
                offlineTraining: calculateOfflineTraining(neededHits),
                percentage
            })

            setIsCalculated(true)
        }
    })

    return (
        <Flex justifyContent="center" height="100%" color={colors.text}>
            <Flex height={isCalculated ? "680px" : "500px"} width="600px" borderRadius="10px" background={colors.background} alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    Fist Calculator
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
                                With {searchedValues?.currentSkill} {skillEnumToValue(searchedValues?.skillToCalculate as Skills)} and {searchedValues?.percentToNext} percent to next level you will need {searchedValues?.rawSkill.toLocaleString()} hits to reach {searchedValues?.desiredSkill} skill.
                            </Flex>
                            <Flex>
                                To reach that skill it will take approximately {searchedValues?.timeForSkill}.
                            </Flex>
                            <Flex>
                                You currently have {searchedValues?.percentage} % of required hits.
                            </Flex>
                            <Flex>
                                To reach this skill just through offline training it will take {searchedValues?.offlineTraining}.
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

