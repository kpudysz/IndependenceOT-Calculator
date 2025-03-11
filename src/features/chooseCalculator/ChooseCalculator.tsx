import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { Tile } from 'lib/components'
import { BasicCalculator, FistCalculator } from '../calculators'
import { availableCalculators, AvailableCalculators } from './AvailableCalculators'

export const ChooseCalculator: React.FunctionComponent = () => {
    const [activeCalculator, setActiveCalculator] = useState<AvailableCalculators | null>(null)

    return (
        <Flex width="100vw" margin="80px 80px" justifyContent="center" flexDirection="column" alignItems="center">
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
        </Flex>
    )
}
