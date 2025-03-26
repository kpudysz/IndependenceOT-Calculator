import React, { useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'
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
} from 'features/calculators'
import { availableCalculators, AvailableCalculators } from './AvailableCalculators'
import { Languages, LocalStorageKeys } from 'lib/types'
import i18n from 'lib/locale'
import { images } from 'assets'

export const ChooseCalculator: React.FunctionComponent = () => {
    const [activeCalculator, setActiveCalculator] = useState<AvailableCalculators | null>(null)
    const lastLanguage = localStorage.getItem(LocalStorageKeys.LANGUAGE) ?? Languages.En
    const [activeLanguage, setActiveLanguage] = useState(lastLanguage)
    const languageToSet = activeLanguage === Languages.En ? Languages.Pl : Languages.En

    return (
        <Flex width="100vw" height="100vh" padding="40px 80px" justifyContent="center" flexDirection="column" alignItems="center" overflow="auto" position="relative" backgroundImage={images.background} backgroundSize="cover">
            {activeCalculator && (
                <Back onClick={() => setActiveCalculator(null)}/>
            )}
            <Flex
                fontSize="50px"
                position="absolute"
                userSelect="none"
                right="50px"
                top="50px"
                cursor="pointer"
                onClick={() => {
                    localStorage.setItem(LocalStorageKeys.LANGUAGE, languageToSet)
                    setActiveLanguage(languageToSet)
                    i18n.changeLanguage(languageToSet)
                }}>
                {activeLanguage === Languages.En ? '🇬🇧' : '🇵🇱'}
            </Flex>
            <Image src={images.rookgaardLogo}/>
            {!activeCalculator && (
                <Flex flexWrap="wrap" maxWidth="900px" justifyContent="center" gap="50px" alignItems="center">
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
                <StaminaCalculator locale={activeLanguage}/>
            )}
        </Flex>
    )
}
