import React, { useState } from 'react'
import { CalculatorFields, SpeedSearchedValues } from './types'
import { useFormik } from 'formik'
import { findOutBreakpoints, resolveBonusText } from './helpers'
import { Button, Flex, Image, Table, Td, Tr } from '@chakra-ui/react'
import { Checkbox, Input } from 'lib/components'
import { images } from 'assets'
import { colors } from 'common'

type FormValues = {
    level: string,
    withBoh: boolean,
    withHaste: boolean,
    withMount: boolean,
    withVenore: boolean
}

export const SpeedCalculator: React.FunctionComponent = () => {
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
                    Speed Breakpoints Calculator
                </Flex>
                <Flex flexDirection="column" gap="20px" mt="20px" width="100%">
                    <Input onChange={value => setFieldValue(CalculatorFields.LEVEL, value)} label={'Level'} controlledValue={values.level} isClearable={false} />
                    <Checkbox isChecked={values.withMount} label="Mount Bonus" setIsChecked={value => setFieldValue(CalculatorFields.WITHMOUNT, value)}/>
                    <Checkbox isChecked={values.withVenore} label="Venore World Change" setIsChecked={value => setFieldValue(CalculatorFields.WITHVENORE, value)}/>
                    <Checkbox isChecked={values.withBoh} label="Boots of Haste charm" setIsChecked={value => setFieldValue(CalculatorFields.WITHBOH, value)}/>
                    <Checkbox isChecked={values.withHaste} label="Haste spell" setIsChecked={value => setFieldValue(CalculatorFields.WITHHASTE, value)}/>
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
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                As level {searchedValues?.level} {withBonus ? 'with' : ''} {bonusText} you will have {searchedValues?.resolvedBreakpoints.speed} speed.
                            </Flex>
                            <Flex>
                                Here are your speed breakpoints:
                            </Flex>
                            <Table>
                                <Tr>
                                    <Td>
                                        Tile
                                    </Td>
                                    <Td>
                                        Current speed
                                    </Td>
                                    <Td>
                                        Current level
                                    </Td>
                                    <Td>
                                        Missing speed
                                    </Td>
                                    <Td>
                                        Missing levels
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.drawbridge.missingLevel}
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtTown.missingLevel}
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.rock.missingLevel}
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtFloorFast.missingLevel}
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.grass.missingLevel}
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.water.missingLevel}
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.wheat.missingLevel}
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.muddyFloor.missingLevel}
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.floorMarbleCobble.missingLevel}
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
                                    <Td>
                                        {searchedValues?.resolvedBreakpoints.dirtFloorSlower.missingLevel}
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
