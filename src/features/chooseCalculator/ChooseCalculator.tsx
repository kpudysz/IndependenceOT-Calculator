import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { Back, Tile } from 'lib/components'
import {
    AttackValueCalculator,
    BasicCalculator,
    CapacityCalculator,
    ExperienceCalculator,
    FishingCalculator,
    FistCalculator,
    MagicCalculator,
    SpeedCalculator,
    StaminaCalculator
} from '../calculators'
import { availableCalculators, AvailableCalculators } from './AvailableCalculators'

export const ChooseCalculator: React.FunctionComponent = () => {
    const [activeCalculator, setActiveCalculator] = useState<AvailableCalculators | null>(null)

    return (
        <Flex width="100vw" height="100vh" padding="80px 80px" justifyContent="center" flexDirection="column" alignItems="center" overflow="auto">
            {activeCalculator && (
                <Back onClick={() => setActiveCalculator(null)}/>
            )}
            <Flex color="#909198" marginBottom="80px" fontSize="32px" fontWeight="bold">
                    IndependenceOT Calculator
            </Flex>
            {!activeCalculator && (
                <Flex flexWrap="wrap" maxWidth="900px" justifyContent="center" gap="50px" alignItems="center" >
                    {availableCalculators.map(calculatorTile => (
                        <Tile
                            title={calculatorTile.title}
                            Icon={calculatorTile.icon}
                            key={calculatorTile.title}
                            onClick={title => setActiveCalculator(title)}
                        />
                    ))}
                </Flex>
            )}
            {activeCalculator === AvailableCalculators.BASIC && (
                <BasicCalculator/>
            )}
            {activeCalculator === AvailableCalculators.FIST && (
                <FistCalculator/>
            )}
            {activeCalculator === AvailableCalculators.MAGIC && (
                <MagicCalculator/>
            )}
            {activeCalculator === AvailableCalculators.EXPERIENCE && (
                <ExperienceCalculator/>
            )}
            {activeCalculator === AvailableCalculators.CAPACITY && (
                <CapacityCalculator/>
            )}
            {activeCalculator === AvailableCalculators.FISHING && (
                <FishingCalculator/>
            )}
            {activeCalculator === AvailableCalculators.ATTACKVALUE && (
                <AttackValueCalculator/>
            )}
            {activeCalculator === AvailableCalculators.SPEEDBREAKPOINT && (
                <SpeedCalculator/>
            )}
            {activeCalculator === AvailableCalculators.STAMINA && (
                <StaminaCalculator/>
            )}
        </Flex>
    )
}
