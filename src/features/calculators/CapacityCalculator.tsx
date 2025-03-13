import React, { useState } from 'react'
import { CalculatorFields, CapacitySearchedValues } from './types'
import { useFormik } from 'formik'
import { Button, Flex } from '@chakra-ui/react'
import { Checkbox, Input } from 'lib/components'
import { calculateCap } from './helpers'

type FormValues = {
    level: string,
    withVenore: boolean,
    withScavenge: boolean
}

export const CapacityCalculator: React.FunctionComponent = () => {
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<CapacitySearchedValues>()
    const [bonusMessage, setBonusMessage] = useState('')
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            level: '1',
            withVenore: false,
            withScavenge: false
        },
        onSubmit: form => {
            if (!form.level) {
                return
            }

            const capacity = Math.floor(calculateCap(Number(form.level), form.withVenore, form.withScavenge))

            setSearchedValues({
                level: form.level,
                withVenore: form.withVenore,
                withScavenge: form.withScavenge,
                capacity
            })
            setIsCalculated(true)

            if (form.withScavenge && form.withVenore) {
                return setBonusMessage('with scavenge charm and active venore world change')
            }

            if (form.withVenore) {
                return setBonusMessage('with active venore world change')
            }

            if (form.withScavenge) {
                return setBonusMessage('with scavenge charm')
            }

            setBonusMessage('')
        }
    })

    return (
        <Flex justifyContent="center" alignItems="center" height="100%" color="#909198">
            <Flex height={isCalculated ? "550px" : "400px"} width="600px" borderRadius="10px" background="#13141B" alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    Capacity Calculator
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.LEVEL, value)} label={'Level'} isNumeric controlledValue={values.level} isClearable={false} />
                    <Checkbox isChecked={values.withScavenge} setIsChecked={value => setFieldValue(CalculatorFields.WITHSCAVENGE, value)} label="Scavenge charm"/>
                    <Checkbox isChecked={values.withVenore} setIsChecked={value => setFieldValue(CalculatorFields.WITHVENORE, value)} label="Venore world change"/>
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
                                At level {searchedValues?.level} {bonusMessage} you will have {searchedValues?.capacity} capacity.
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

