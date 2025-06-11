import { Flex, Image, useMediaQuery } from '@chakra-ui/react'
import { Icons, images } from 'assets'
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
import { Wiki } from 'features/wiki'
import { Back, Tile } from 'lib/components'
import i18n from 'lib/locale'
import { Languages, LocalStorageKeys } from 'lib/types'
import React, { useState } from 'react'
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
            padding={isMobile ? "0 0 20px 0" : "40px 80px"}
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            position="relative"
        >
            {activeCalculator && (
                <Back onClick={() => setActiveCalculator(null)} />
            )}
            <Flex
                position="absolute"
                userSelect="none"
                right={isMobile ? "20px" : "50px"}
                top={isMobile ? "20px" : "50px"}
                cursor="pointer"
                boxSize={isMobile ? "32px" : "48px"}
                onClick={() => {
                    localStorage.setItem(LocalStorageKeys.LANGUAGE, languageToSet)
                    setActiveLanguage(languageToSet)
                    i18n.changeLanguage(languageToSet)
                }}>
                {activeLanguage === Languages.En ? <Icons.UnitedKingdom size={40} /> : <Icons.Poland size={40} />}
            </Flex>
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
            {activeCalculator === AvailableCalculators.DEATHPENALTY && <DeathPenaltyCalculator />}
            {activeCalculator === AvailableCalculators.PROGRESSMONITOR && <ProgressMonitor locale={activeLanguage} />}
            {activeCalculator === AvailableCalculators.WIKI && <Wiki />}
        </Flex>
    )
}
