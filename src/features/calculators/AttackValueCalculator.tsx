import React, { Fragment, useState } from 'react'
import { AttackSearchedValues, CalculatorFields } from './types'
import { useFormik } from 'formik'
import { calculateAttackValue, findAttackValueIncrements } from './helpers'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import { BasicButton, Input } from 'lib/components'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    weaponAttack: string | null;
    skill: string | null;
}

export const AttackValueCalculator: React.FunctionComponent = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { t } = useTranslation('translation', { keyPrefix: 'attackValue' })
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<AttackSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            weaponAttack: '5',
            skill: '20'
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
        <Flex justifyContent="center" height="100%" color={colors.text} px={isMobile ? 4 : 0}>
            <Flex
                height={isMobile ? "auto" : isCalculated ? "750px" : "400px"}
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
                    {t('attackValueCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.WEAPONATTACK, value)}
                        label={t('weaponAttack')}
                        isNumeric
                        controlledValue={values.weaponAttack?.toString()}
                        isClearable={false}
                    />
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.SKILL, value)}
                        label={t('skill')}
                        isNumeric
                        controlledValue={values.skill?.toString()}
                        isClearable={false}
                    />
                    <BasicButton onClick={() => handleSubmit()} text={t('calculate')}/>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                {t('attackValueResult', {
                                    weaponAttack: searchedValues?.weaponAttack,
                                    skill: searchedValues?.skill,
                                    attackValue: searchedValues?.attackValue
                                })}
                            </Flex>
                            {!!searchedValues?.attackValueIncrements.length && (
                                <Fragment>
                                    <Flex mt="10px">{t('nextSkillups')}</Flex>
                                    <Flex flexDirection="column" gap="12px">
                                        {searchedValues.attackValueIncrements.slice(0, 10).map(item => (
                                            <Flex key={item.skill}>
                                                {t('skill')}: {item.skill} – {t('attackValue')} {item.attackValue}
                                            </Flex>
                                        ))}
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
