import React, { Fragment, useState } from 'react'
import { AttackSearchedValues, CalculatorFields } from './types'
import { useFormik } from 'formik'
import { calculateAttackValue, findAttackValueIncrements } from './helpers'
import { Button, Flex } from '@chakra-ui/react'
import { Input } from 'lib/components'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    weaponAttack: string | null;
    skill: string | null;
}

export const AttackValueCalculator: React.FunctionComponent = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'attackValue' })
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
        <Flex justifyContent="center" height="100%" color={colors.text}>
            <Flex height={isCalculated ? "750px" : "400px"} width="600px" borderRadius="10px" background={colors.background} alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    {t('attackValueCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.WEAPONATTACK, value)} label={t('weaponAttack')} isNumeric controlledValue={values.weaponAttack?.toString()} isClearable={false} />
                    <Input onChange={value => setFieldValue(CalculatorFields.SKILL, value)} label={t('skill')} isNumeric controlledValue={values.skill?.toString()} isClearable={false}/>
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
                                {t('attackValueResult', {
                                    weaponAttack: searchedValues?.weaponAttack,
                                    skill: searchedValues?.skill,
                                    attackValue: searchedValues?.attackValue
                                })}
                            </Flex>
                            {searchedValues?.attackValueIncrements.length && (
                                <Fragment>
                                    <Flex>
                                        {t('nextSkillups')}
                                    </Flex>
                                    <Flex flexDirection="column" gap="12px">
                                        {searchedValues?.attackValueIncrements.map((item, index) => index < 10 ? (
                                            <Flex key={item.skill}>
                                                {t('skill')}: {item.skill} - {t('attackValue')} {item.attackValue}
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
