import React, { useState } from 'react'
import { CalculatorFields, SpeedSearchedValues } from './types'
import { useFormik } from 'formik'
import { findOutBreakpoints, resolveBonusText } from './helpers'
import { Button, Flex, Image, Table, Td, Tr } from '@chakra-ui/react'
import { Checkbox, Input } from 'lib/components'
import { images } from 'assets'
import { colors } from 'common'
import { useTranslation } from 'react-i18next'

type FormValues = {
    level: string,
    withBoh: boolean,
    withHaste: boolean,
    withMount: boolean,
    withVenore: boolean
}

export const SpeedCalculator: React.FunctionComponent = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'speedBreakpoints' })
    const [isCalculated, setIsCalculated] = useState(false)
    const [searchedValues, setSearchedValues] = useState<SpeedSearchedValues>()
    const { values, setFieldValue, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            level: '1',
            withBoh: false,
            withHaste: false,
            withMount: false,
            withVenore: false
        },
        onSubmit: form => {
            if (!form.level) {
                return
            }

            const resolvedBreakpoints = findOutBreakpoints(Number(form.level), { withBoh: form.withBoh, withHaste: form.withHaste, withVenore: form.withVenore, withMount: form.withMount })

            setSearchedValues({
                level: form.level,
                withBoh: form.withBoh,
                withHaste: form.withHaste,
                withVenore: form.withVenore,
                withMount: form.withMount,
                resolvedBreakpoints
            })

            setIsCalculated(true)
        }
    })
    const withBonus = searchedValues?.withMount || searchedValues?.withVenore || searchedValues?.withBoh || searchedValues?.withHaste
    const bonusText = resolveBonusText({
        withHaste: Boolean(searchedValues?.withHaste),
        withMount: Boolean(searchedValues?.withMount),
        withVenore: Boolean(searchedValues?.withVenore),
        withBoh: Boolean(searchedValues?.withBoh)
    })

    return (
        <Flex justifyContent="center" height="100%" color={colors.text}>
            <Flex height={isCalculated ? "1400px" : "550px"} width="1200px" borderRadius="10px" background={colors.background} alignItems="center" flexDirection="column" padding="0 30px 0 30px">
                <Flex fontSize="35px" fontWeight={'bold'} mt="40px">
                    {t('speedBreakpointsCalculator')}
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.LEVEL, value)} label={'Level'} controlledValue={values.level} isClearable={false} />
                    <Checkbox isChecked={values.withMount} label={t('mountBonus')} setIsChecked={value => setFieldValue(CalculatorFields.WITHMOUNT, value)}/>
                    <Checkbox isChecked={values.withVenore} label={t('venoreWorldChange')} setIsChecked={value => setFieldValue(CalculatorFields.WITHVENORE, value)}/>
                    <Checkbox isChecked={values.withBoh} label={t('bootsOfHasteCharm')} setIsChecked={value => setFieldValue(CalculatorFields.WITHBOH, value)}/>
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
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                {t('speedResult', {
                                    level: searchedValues?.level,
                                    withBonus: withBonus ? t('with') : '',
                                    bonusText,
                                    speed: searchedValues?.resolvedBreakpoints.speed
                                })}
                            </Flex>
                            <Flex>
                                {t('speedBreakpoints')}
                            </Flex>
                            <Table>
                                <Tr>
                                    <Td>
                                        {t('tile')}
                                    </Td>
                                    <Td>
                                        {t('currentSpeed')}
                                    </Td>
                                    <Td>
                                        {t('currentLevel')}
                                    </Td>
                                    <Td>
                                        {t('missingSpeed')}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={images.drawbridge90}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.drawbridge.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.drawbridge.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.drawbridge.missingSpeed}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={images.dirtTown110}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtTown.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtTown.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtTown.missingSpeed}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={images.rock120}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.rock.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.rock.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.rock.missingSpeed}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={images.dirtFloorFast130}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtFloorFast.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtFloorFast.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtFloorFast.missingSpeed}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={images.grass150}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.grass.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.grass.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.grass.missingSpeed}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={images.water170}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.water.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.water.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.water.missingSpeed}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={images.wheat180}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.wheat.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.wheat.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.wheat.missingSpeed}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Image src={images.muddyFloor200}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.muddyFloor.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.muddyFloor.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.muddyFloor.missingSpeed}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td display="flex" gap="10px" >
                                        <Image src={images.town100}/>
                                        <Image src={images.marble100}/>
                                        <Image src={images.cobble100}/>
                                        <Image src={images.floor100}/>
                                        <Image src={images.temple100}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.floorMarbleCobble.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.floorMarbleCobble.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.floorMarbleCobble.missingSpeed}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td display="flex" gap="10px">
                                        <Image src={images.dirtFloorSlower160}/>
                                        <Image src={images.sand160}/>
                                        <Image src={images.snow160}/>
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtFloorSlower.currentSpeed}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtFloorSlower.breakpointLevel}
                                    </Td>
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtFloorSlower.missingSpeed}
                                    </Td>
                                </Tr>
                            </Table>
                        </Flex>
                        )}
                </Flex>
            </Flex>
        </Flex>
    )
}
