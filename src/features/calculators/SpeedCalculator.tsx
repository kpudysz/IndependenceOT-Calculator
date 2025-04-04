import React, { useState } from 'react'
import { CalculatorFields, SpeedSearchedValues } from './types'
import { useFormik } from 'formik'
import { findOutBreakpoints, resolveBonusText, speedImages } from './helpers'
import { Flex, Image, Table, Td, Tr, useMediaQuery } from '@chakra-ui/react'
import { BasicButton, Checkbox, Input } from 'lib/components'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    level: string,
    withBoh: boolean,
    withMount: boolean,
    withVenore: boolean
}

export const SpeedCalculator: React.FunctionComponent = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { t } = useTranslation('translation', { keyPrefix: 'speedBreakpoints' })
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<SpeedSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            level: '1',
            withBoh: false,
            withMount: false,
            withVenore: false
        },
        onSubmit: form => {
            if (!form.level) {
                return
            }

            const resolvedBreakpoints = findOutBreakpoints(Number(form.level), { withBoh: form.withBoh, withVenore: form.withVenore, withMount: form.withMount })

            setSearchedValues({
                level: form.level,
                withBoh: form.withBoh,
                withVenore: form.withVenore,
                withMount: form.withMount,
                resolvedBreakpoints
            })

            setIsCalculated(true)
        }
    })
    const withBonus = searchedValues?.withMount || searchedValues?.withVenore || searchedValues?.withBoh
    const bonusText = resolveBonusText({
        withMount: Boolean(searchedValues?.withMount),
        withVenore: Boolean(searchedValues?.withVenore),
        withBoh: Boolean(searchedValues?.withBoh)
    })

    return (
        <Flex justifyContent="center" height="100%" color={colors.text} px={isMobile ? 4 : 0}>
            <Flex
                height={isMobile ? "auto" : isCalculated ? "1550px" : "550px"}
                width={isMobile ? "100%" : "1200px"}
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
                    {t('speedBreakpointsCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input
                        onChange={value => setFieldValue(CalculatorFields.LEVEL, value)}
                        label="Level"
                        controlledValue={values.level}
                        isClearable={false}
                    />
                    <Checkbox
                        isChecked={values.withMount}
                        label={t('mountBonus')}
                        setIsChecked={value => setFieldValue(CalculatorFields.WITHMOUNT, value)}
                    />
                    <Checkbox
                        isChecked={values.withVenore}
                        label={t('venoreWorldChange')}
                        setIsChecked={value => setFieldValue(CalculatorFields.WITHVENORE, value)}
                    />
                    <Checkbox
                        isChecked={values.withBoh}
                        label={t('bootsOfHasteCharm')}
                        setIsChecked={value => setFieldValue(CalculatorFields.WITHBOH, value)}
                    />
                    <BasicButton onClick={() => handleSubmit()} text={t('calculate')}/>
                    {isCalculated && (
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                {t('speedResult', {
                                    level: searchedValues?.level,
                                    withBonus: withBonus ? t('with') : '',
                                    bonusText,
                                    speed: searchedValues?.resolvedBreakpoints.speed
                                })}
                            </Flex>
                            <Flex>{t('speedBreakpoints')}</Flex>
                            <Table fontSize={isMobile ? "sm" : "md"}>
                                <Tr>
                                    <Td>{t('tile')}</Td>
                                    <Td>{t('currentSpeed')}</Td>
                                    <Td>{t('currentLevel')}</Td>
                                    <Td>{t('missingSpeed')}</Td>
                                </Tr>
                                {speedImages.map(tile => (
                                    <Tr key={tile.key}>
                                        <Td display="flex" flexWrap="wrap" gap="10px">
                                            {tile.img.map((src, index) => (
                                                <Image key={index} src={src} boxSize={isMobile ? "40px" : "60px"} />
                                            ))}
                                        </Td>
                                        <Td>{searchedValues?.resolvedBreakpoints[tile.key].currentSpeed}</Td>
                                        <Td>{searchedValues?.resolvedBreakpoints[tile.key].breakpointLevel}</Td>
                                        <Td>{searchedValues?.resolvedBreakpoints[tile.key].missingSpeed}</Td>
                                    </Tr>
                                ))}
                            </Table>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}
