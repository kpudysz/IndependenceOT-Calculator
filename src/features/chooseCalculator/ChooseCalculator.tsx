import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { AvailableCalculators, availableCalculators } from './availableCalculators'
import { Tile } from 'lib/components'

export const ChooseCalculator: React.FunctionComponent = () => {
    const [activeCalculator, setActiveCalculator] = useState<AvailableCalculators | null>(null)

    return (
        <Flex width="100vw" margin="80px 80px" justifyContent="center">
            {!activeCalculator && (
                <Flex flexWrap="wrap" maxWidth="900px" justifyContent="center" gap="50px" alignItems="center" >
                    {availableCalculators.map(calculatorTile => (
                        <Tile title={calculatorTile.title} icon={calculatorTile.icon} key={calculatorTile.title} onClick={title => setActiveCalculator(title)}/>
                    ))}
                </Flex>
            )}
        </Flex>
    )
}
