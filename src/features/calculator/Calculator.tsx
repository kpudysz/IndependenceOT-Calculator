import React, { useState } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { Input, Select } from 'lib/components'
import { skillOptions } from './config/options'
import { useFormik } from 'formik'
import { SelectOptions } from 'lib/types'
import { CalculatorFields, Skills } from './types'
import { calculateSkill, calculateSkillTime, calculateFistSkillTime, findOutBreakpoints, missingExpForLevel, skillEnumToValue } from './helpers'
import {
    calculateAttackValue, calculateOfflineTraining,
    findAttackValueIncrements,
    secondsToDate
} from './helpers/functions'
import { calculateFistPercentageTime } from './helpers/fistSkill'

type FormValues = {
    skillToCalculate: SelectOptions | null;
    currentSkill: number | null;
    percentToNext: number | null;
    desiredSkill: number | null;
}

type SearchedValues = {
    skillToCalculate: Skills,
    currentSkill: number,
    percentToNext: number,
    desiredSkill: number,
    rawSkill: number,
    percentage: string,
    offlineTraining: string,
    timeForSkill: string
}

export const Calculator: React.FunctionComponent = () => {
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<SearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            skillToCalculate: null,
            currentSkill: null,
            percentToNext: 100,
            desiredSkill: null
        },
        onSubmit: form => {
            if (!form.skillToCalculate || !form.currentSkill || !form.desiredSkill || !form.percentToNext) {
                return
            }

            const meleeSkills = [Skills.MELEE, Skills.DISTANCE, Skills.MAGIC, Skills.SHIELDING, Skills.FISHING]
            const calculatedSkill = calculateSkill(form.skillToCalculate.value, Number(form.currentSkill), Number(form.percentToNext), Number(form.desiredSkill))
            const neededHits = Math.floor(calculatedSkill.neededHits)

            if (meleeSkills.includes(form.skillToCalculate.value)) {
                const timeForSkill = calculateSkillTime(form.skillToCalculate.value, Math.floor(calculatedSkill.neededHits))

                setSearchedValues({
                    skillToCalculate: form.skillToCalculate.value,
                    desiredSkill: form.desiredSkill,
                    currentSkill: form.currentSkill,
                    percentToNext: form.percentToNext,
                    percentage: calculatedSkill.percentage,
                    rawSkill: neededHits,
                    offlineTraining: calculateOfflineTraining(neededHits),
                    timeForSkill
                })
            }

            if (form.skillToCalculate.value === Skills.FIST) {
                const timeForSkill = calculateFistSkillTime(Number(form.currentSkill), form.percentToNext, form.desiredSkill)
                const percentage = calculateFistPercentageTime(form.desiredSkill, timeForSkill)

                setSearchedValues({
                    skillToCalculate: form.skillToCalculate.value,
                    desiredSkill: form.desiredSkill,
                    currentSkill: form.currentSkill,
                    percentToNext: form.percentToNext,
                    rawSkill: neededHits,
                    timeForSkill: secondsToDate(timeForSkill),
                    offlineTraining: calculateOfflineTraining(neededHits),
                    percentage
                })
            }

            setIsCalculated(true)
        }
    })

    return (
        <Flex justifyContent="center" alignItems="center" height="100%">
            <Flex height={isCalculated ? "800px" : "600px"} width="600px" borderRadius="10px" background="white" alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    Training Calculator
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Select options={skillOptions} onChange={selectedOption => setFieldValue(CalculatorFields.SELECTSKILL, selectedOption)} label="Select Skill" isClearable={false}/>
                    <Input onChange={value => setFieldValue(CalculatorFields.CURRENTSKILL, value)} label={'Current Skill'} isNumeric controlledValue={values.currentSkill?.toString()} isClearable={false} />
                    <Input onChange={value => setFieldValue(CalculatorFields.PERCENTTONEXT, value)} label={'Percent to Next Skill'} isNumeric controlledValue={values.percentToNext?.toString()} isClearable={false}/>
                    <Input onChange={value => setFieldValue(CalculatorFields.DESIREDSKILL, value)} label={'Desired Skill'} isNumeric controlledValue={values.desiredSkill?.toString()} isClearable={false}/>
                    <Button
                        padding="8px 22px"
                        mt="20px"
                        borderRadius="4px"
                        border="1px solid"
                        borderColor="green"
                        background="green.500"
                        color="white"
                        onClick={() => handleSubmit()}
                    >
                        Calculate
                    </Button>
                    {isCalculated && (
                        <Flex mt="40px">
                            With {searchedValues?.currentSkill} {skillEnumToValue(searchedValues?.skillToCalculate as Skills)} and {searchedValues?.percentToNext} percent to next level you will need {searchedValues?.rawSkill.toLocaleString()} hits to reach {searchedValues?.desiredSkill} skill.
                            It will take approximately {searchedValues?.timeForSkill}. You completed {searchedValues?.percentage} % of desired value.
                            To reach this skill through offline training it will take {searchedValues?.offlineTraining}.
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

