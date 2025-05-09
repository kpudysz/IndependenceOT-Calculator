import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBagShopping,
    faDragon,
    faFishFins,
    faHandFist,
    faHourglass,
    faMeteor,
    faShield,
    faShoePrints,
    faWandSparkles,
    faSkullCrossbones,
    faRankingStar
} from '@fortawesome/free-solid-svg-icons'
import { IconColorProps } from 'lib/types'
import { colors } from 'common'

export enum AvailableCalculators {
    BASIC = 'Basic',
    FIST = 'Fist',
    MAGIC = 'Magic',
    EXPERIENCE = 'Experience',
    CAPACITY = 'Capacity',
    FISHING = 'Fishing',
    ATTACKVALUE = 'Attack Value',
    SPEEDBREAKPOINT = 'Speed Breakpoints',
    STAMINA = 'Stamina',
    DEATHPENALTY = 'Death Pentalty',
    PROGRESSMONITOR = 'Progress Monitor'
}

export const availableCalculators = (isMobile: boolean) => [
    {
        title: AvailableCalculators.BASIC,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faShield} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.FIST,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faHandFist} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.MAGIC,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faWandSparkles} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.EXPERIENCE,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faDragon} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.CAPACITY,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faBagShopping} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.FISHING,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faFishFins} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.ATTACKVALUE,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faMeteor} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.SPEEDBREAKPOINT,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faShoePrints} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.STAMINA,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faHourglass} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.DEATHPENALTY,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faSkullCrossbones} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.PROGRESSMONITOR,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faRankingStar} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    }
]
