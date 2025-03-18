import React, { Fragment, useState } from 'react'
import { AttackSearchedValues, CalculatorFields } from './types'
import { useFormik } from 'formik'
import { calculateAttackValue, findAttackValueIncrements } from './helpers'
import { Button, Flex } from '@chakra-ui/react'
import { Input } from 'lib/components'

type FormValues = {
    weaponAttack: string | null;
    skill: string | null;
}

export const AttackValueCalculator: React.FunctionComponent = () => {
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<AttackSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            weaponAttack: '5',
            skill: '10'
        },
        onSubmit: form => {
            if (!form.weaponAttack || !form.skill) {
                return
            }

            const incrementLimit = form.weaponAttack === '7' ? 40 : 30
            const currentAttackValue = calculateAttackValue(Number(form.weaponAttack), Number(form.skill))
            const attackValueIncrements = findAttackValueIncrements(Number(form.weaponAttack), Number(form.skill), incrementLimit)

            setSearchedValues({
                attackValue: currentAttackValue,
                weaponAttack: form.weaponAttack,
                skill: form.skill,
                attackValueIncrements
            })
            setIsCalculated(true)
        }
    })

    return (
        <Flex justifyContent="center" height="100%" color="#909198">
            <Flex height={isCalculated ? "750px" : "400px"} width="600px" borderRadius="10px" background="#13141B" alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    Attack Value Calculator
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.WEAPONATTACK, value)} label={'Weapon Attack'} isNumeric controlledValue={values.weaponAttack?.toString()} isClearable={false} />
                    <Input onChange={value => setFieldValue(CalculatorFields.SKILL, value)} label={'Skill'} isNumeric controlledValue={values.skill?.toString()} isClearable={false}/>
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
                                When using weapon that has {searchedValues?.weaponAttack} attack and {searchedValues?.skill} skill you get additional {searchedValues?.attackValue} attack value.
                            </Flex>
                            {searchedValues?.attackValueIncrements.length && (
                                <Fragment>
                                    <Flex>
                                        With that weapon here are the next skillups that will give you bonus attack value:
                                    </Flex>
                                    <Flex flexDirection="column" gap="12px">
                                        {searchedValues?.attackValueIncrements.map((item, index) => index < 10 ? (
                                            <Flex key={item.skill}>
                                                Skill: {item.skill} - Attack Value {item.attackValue}
                                            </Flex>
                                        ) : null)}
                                    </Flex>
                                </Fragment>
                            )}
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}
