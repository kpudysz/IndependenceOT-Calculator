import React, { useState } from 'react'
import { CalculatorFields, SpeedSearchedValues } from './types'
import { useFormik } from 'formik'
import { findOutBreakpoints, resolveBonusText } from './helpers'
import { Button, Flex, Image } from '@chakra-ui/react'
import { Checkbox, Input } from 'lib/components'
import { images } from 'assets'

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
        <Flex justifyContent="center" alignItems="center" height="100%" color="#909198" >
            <Flex height={isCalculated ? "1100px" : "550px"} width="1200px" borderRadius="10px" background="#13141B" alignItems="center" flexDirection="column" padding="0 30px 0 30px">
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
                        <Flex mt="30px" flexDirection="column" gap="16px" alignItems="center" textAlign="center">
                            <Flex>
                                As level {searchedValues?.level} {withBonus ? 'with' : ''} {bonusText} you will have {searchedValues?.resolvedBreakpoints.speed} speed.
                            </Flex>
                            <Flex>
                                Here are your speed breakpoints:
                            </Flex>
                            <Flex>
                                <Image src={images.drawbridge90}/>
                                <Flex margin="10px 0 0 10px">
                                    Current speed {searchedValues?.resolvedBreakpoints.drawbridge.currentSpeed} - level {searchedValues?.resolvedBreakpoints.drawbridge.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.drawbridge.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.drawbridge.missingLevel} levels)
                                </Flex>
                            </Flex>
                            <Flex gap="10px">
                                <Image src={images.town100}/>
                                <Image src={images.marble100}/>
                                <Image src={images.cobble100}/>
                                <Image src={images.floor100}/>
                                <Image src={images.temple100}/>
                                <Flex mt="12px">
                                    Current speed {searchedValues?.resolvedBreakpoints.floorMarbleCobble.currentSpeed} - level {searchedValues?.resolvedBreakpoints.floorMarbleCobble.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.floorMarbleCobble.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.floorMarbleCobble.missingLevel} levels)
                                </Flex>
                            </Flex>
                            <Flex>
                                <Image src={images.dirtTown110}/>
                                <Flex margin="10px 0 0 10px">
                                    Current speed {searchedValues?.resolvedBreakpoints.dirtTown.currentSpeed} - level {searchedValues?.resolvedBreakpoints.dirtTown.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.dirtTown.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.dirtTown.missingLevel} levels)
                                </Flex>
                            </Flex>
                            <Flex>
                                <Image src={images.rock120}/>
                                <Flex margin="10px 0 0 10px">
                                    Current speed {searchedValues?.resolvedBreakpoints.rock.currentSpeed} - level {searchedValues?.resolvedBreakpoints.rock.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.rock.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.rock.missingLevel} levels)
                                </Flex>
                            </Flex>
                            <Flex>
                                <Image src={images.dirtFloorFast130}/>
                                <Flex margin="10px 0 0 10px">
                                    Current speed {searchedValues?.resolvedBreakpoints.dirtFloorFast.currentSpeed} - level {searchedValues?.resolvedBreakpoints.dirtFloorFast.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.dirtFloorFast.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.dirtFloorFast.missingLevel} levels)
                                </Flex>
                            </Flex>
                            <Flex>
                                <Image src={images.grass150}/>
                                <Flex margin="10px 0 0 10px">
                                    Current speed {searchedValues?.resolvedBreakpoints.grass.currentSpeed} - level {searchedValues?.resolvedBreakpoints.grass.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.grass.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.grass.missingLevel} levels)
                                </Flex>
                            </Flex>
                            <Flex gap="10px">
                                <Image src={images.dirtFloorSlower160}/>
                                <Image src={images.sand160}/>
                                <Image src={images.snow160}/>
                                <Flex mt="12px">
                                    Current speed {searchedValues?.resolvedBreakpoints.dirtFloorSlower.currentSpeed} - level {searchedValues?.resolvedBreakpoints.dirtFloorSlower.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.dirtFloorSlower.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.dirtFloorSlower.missingLevel} levels)
                                </Flex>
                            </Flex>
                            <Flex>
                                <Image src={images.water170}/>
                                <Flex margin="10px 0 0 10px">
                                    Current speed {searchedValues?.resolvedBreakpoints.water.currentSpeed} - level {searchedValues?.resolvedBreakpoints.water.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.water.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.water.missingLevel} levels)
                                </Flex>
                            </Flex>
                            <Flex>
                                <Image src={images.wheat180}/>
                                <Flex margin="10px 0 0 10px">
                                    Current speed {searchedValues?.resolvedBreakpoints.wheat.currentSpeed} - level {searchedValues?.resolvedBreakpoints.wheat.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.wheat.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.wheat.missingLevel} levels)
                                </Flex>
                            </Flex>
                            <Flex>
                                <Image src={images.muddyFloor200}/>
                                <Flex margin="10px 0 0 10px">
                                    Current speed {searchedValues?.resolvedBreakpoints.muddyFloor.currentSpeed} - level {searchedValues?.resolvedBreakpoints.muddyFloor.breakpointLevel} - Next breakpoint after {searchedValues?.resolvedBreakpoints.muddyFloor.missingSpeed} speed ({searchedValues?.resolvedBreakpoints.muddyFloor.missingLevel} levels)
                                </Flex>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}
