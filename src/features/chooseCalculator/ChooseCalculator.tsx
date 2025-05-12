import React, { useState } from 'react'
import { Flex, Image, useMediaQuery } from '@chakra-ui/react'
import i18n from 'lib/locale'
import { images } from 'assets'
import { Back, Tile } from 'lib/components'
import { Languages, LocalStorageKeys } from 'lib/types'
import { Wiki } from 'features/wiki'
import {
    AttackValueCalculator,
    BasicCalculator,
    CapacityCalculator,
    DeathPenaltyCalculator,
    ExperienceCalculator,
    FishingCalculator,
    FistCalculator,
    MagicCalculator,
    ProgressMonitor,
    SpeedCalculator,
    StaminaCalculator
} from 'features/calculators'
import { availableCalculators, AvailableCalculators } from './AvailableCalculators'

export const ChooseCalculator: React.FunctionComponent = () => {
    const [activeCalculator, setActiveCalculator] = useState<AvailableCalculators | null>(null)
    const lastLanguage = localStorage.getItem(LocalStorageKeys.LANGUAGE) ?? Languages.En
    const [activeLanguage, setActiveLanguage] = useState(lastLanguage)
    const languageToSet = activeLanguage === Languages.En ? Languages.Pl : Languages.En
    const [isMobile] = useMediaQuery(["(max-width: 768px)"])

    return (
        <Flex
            width="100vw"
            minHeight="100%"
            padding={isMobile ? "20px" : "40px 80px"}
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            overflow="auto"
            position="relative"
        >
            {activeCalculator && (
                <Back onClick={() => setActiveCalculator(null)} />
            )}
            <Image
                position="absolute"
                userSelect="none"
                right={isMobile ? "20px" : "50px"}
                top={isMobile ? "20px" : "50px"}
                cursor="pointer"
                boxSize={isMobile ? "32px" : "48px"}
                src={activeLanguage === Languages.En ? images.unitedKingdom : images.poland}
                onClick={() => {
                    localStorage.setItem(LocalStorageKeys.LANGUAGE, languageToSet)
                    setActiveLanguage(languageToSet)
                    i18n.changeLanguage(languageToSet)
                }}
            />
            <Image
                src={images.rookgaardLogo}
                height={isMobile ? "120px" : 'auto'}
                mt={isMobile ? "40px" : 0}
                mb={isMobile ? 0 : "40px"}
            />
            {!activeCalculator && (
                <Flex
                    flexWrap="wrap"
                    maxWidth="900px"
                    justifyContent="center"
                    gap="50px"
                    alignItems="center"
                    px={isMobile ? 2 : 0}
                >
                    {availableCalculators(isMobile).map(calculatorTile => (
                        <Tile
                            title={calculatorTile.title}
                            Icon={calculatorTile.icon}
                            key={calculatorTile.title}
                            onClick={title => setActiveCalculator(title)}
                        />
                    ))}
                </Flex>
            )}
            {activeCalculator === AvailableCalculators.BASIC && <BasicCalculator />}
            {activeCalculator === AvailableCalculators.FIST && <FistCalculator />}
            {activeCalculator === AvailableCalculators.MAGIC && <MagicCalculator />}
            {activeCalculator === AvailableCalculators.EXPERIENCE && <ExperienceCalculator />}
            {activeCalculator === AvailableCalculators.CAPACITY && <CapacityCalculator />}
            {activeCalculator === AvailableCalculators.FISHING && <FishingCalculator />}
            {activeCalculator === AvailableCalculators.ATTACKVALUE && <AttackValueCalculator />}
            {activeCalculator === AvailableCalculators.SPEEDBREAKPOINT && <SpeedCalculator />}
            {activeCalculator === AvailableCalculators.STAMINA && <StaminaCalculator locale={activeLanguage} />}
            {activeCalculator === AvailableCalculators.DEATHPENALTY && <DeathPenaltyCalculator/>}
            {activeCalculator === AvailableCalculators.PROGRESSMONITOR && <ProgressMonitor locale={activeLanguage}/> }
            {activeCalculator === AvailableCalculators.WIKI && <Wiki/>}
        </Flex>
    )
}
