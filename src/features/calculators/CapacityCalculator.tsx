import React, { useState } from 'react'
import { CalculatorFields, CapacitySearchedValues } from './types'
import { useFormik } from 'formik'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import { BasicButton, Checkbox, Input } from 'lib/components'
import { calculateCap } from './helpers'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    level: string,
    withCarlin: boolean,
    withScavenge: boolean
}

export const CapacityCalculator: React.FunctionComponent = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { t } = useTranslation('translation', { keyPrefix: 'capacity' })
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<CapacitySearchedValues>()
    const [bonusMessage, setBonusMessage] = useState('')
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            level: '1',
            withCarlin: false,
            withScavenge: false
        },
        onSubmit: form => {
            if (!form.level) {
                return
            }

            const capacity = Math.floor(calculateCap(Number(form.level), form.withCarlin, form.withScavenge))

            setSearchedValues({
                level: form.level,
                withCarlin: form.withCarlin,
                withScavenge: form.withScavenge,
                capacity
            })
            setIsCalculated(true)

            if (form.withScavenge && form.withCarlin) {
                return setBonusMessage(t('scavengeAndCarlin'))
            }

            if (form.withCarlin) {
                return setBonusMessage(t('onlyCarlin'))
            }

            if (form.withScavenge) {
                return setBonusMessage(t('onlyScavenge'))
            }

            setBonusMessage('')
        }
    })

    return (
        <Flex justifyContent="center" height="100%" color={colors.text} px={isMobile ? 4 : 0}>
            <Flex
                height={isMobile ? "auto" : isCalculated ? "550px" : "400px"}
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
                    {t('capacityCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.LEVEL, value)}
                        label={t('level')}
                        isNumeric
                        controlledValue={values.level}
                        isClearable={false}
                    />
                    <Checkbox
                        isChecked={values.withScavenge}
                        setIsChecked={value => setFieldValue(CalculatorFields.WITHSCAVENGE, value)}
                        label={t('scavengeCharm')}
                    />
                    <Checkbox
                        isChecked={values.withCarlin}
                        setIsChecked={value => setFieldValue(CalculatorFields.WITHCARLIN, value)}
                        label={t('carlin')}
                    />
                    <BasicButton onClick={() => handleSubmit()} text={t('calculate')}/>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                {t('capacityResult', {
                                    level: searchedValues?.level,
                                    bonusMessage,
                                    capacity: searchedValues?.capacity
                                })}
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}
