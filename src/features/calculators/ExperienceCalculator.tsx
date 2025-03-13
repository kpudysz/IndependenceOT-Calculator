import React, { useState } from 'react'
import { CalculatorFields, ExperienceSearchedValues } from './types'
import { useFormik } from 'formik'
import { missingExpForLevel } from './helpers'
import { Button, Flex } from '@chakra-ui/react'
import { Input } from 'lib/components'
import { calculateExperiencePercentage } from './helpers/experience'

type FormValues = {
    currentLevel: number | null;
    percentToNext: number | null;
    desiredLevel: number | null;
}

export const ExperienceCalculator: React.FunctionComponent = () => {
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
        <Flex justifyContent="center" alignItems="center" height="100%" color="#909198">
            <Flex height={isCalculated ? "680px" : "500px"} width="600px" borderRadius="10px" background="#13141B" alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    Experience Calculator
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.CURRENTLEVEL, value)} label={'Current Level'} isNumeric controlledValue={values.currentLevel?.toString()} isClearable={false} />
                    <Input onChange={value => setFieldValue(CalculatorFields.PERCENTTONEXT, value)} label={'Percent to Next Skill'} isNumeric controlledValue={values.percentToNext?.toString()} isClearable={false}/>
                    <Input onChange={value => setFieldValue(CalculatorFields.DESIREDLEVEL, value)} label={'Desired Level'} isNumeric controlledValue={values.desiredLevel?.toString()} isClearable={false}/>
                    <Button
                        padding="8px 22px"
                        mt="20px"
                        borderRadius="4px"
                        border="1px solid"
                        borderColor="#FFA260"
                        background="#13141B"
                        _hover={{
                            color: "#E5FF60",
                            borderColor: "#E5FF60",
                            transition: "box-shadow 0.3s ease, transform 0.3s ease",
                            boxShadow: "0 8px 16px #E5FF60",
                            transform: "translateY(-4px)"
                        }}
                        _active={{
                            background: "#13141B",
                            color: "lightgreen",
                            borderColor: "lightgreen",
                            transition: "box-shadow 0.3s ease, transform 0.3s ease",
                            boxShadow: "0 8px 16px lightgreen",
                            transform: "translateY(-4px)"
                        }}
                        color="#FFA260"
                        onClick={() => handleSubmit()}
                    >
                        Calculate
                    </Button>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center">
                            <Flex textAlign="center">
                                With level {searchedValues?.currentLevel} and {searchedValues?.percentToNext} percent to next level you need {searchedValues?.missingExperience.toLocaleString()} experience to reach level {searchedValues?.desiredLevel}.
                            </Flex>
                            <Flex>
                                You currently have {searchedValues?.percentage} % of required experience.
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

