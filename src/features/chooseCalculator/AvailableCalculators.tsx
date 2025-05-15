import {
    faBagShopping,
    faBook,
    faDragon,
    faFishFins,
    faHandFist,
    faHourglass,
    faMeteor,
    faRankingStar,
    faShield,
    faShoePrints,
    faSkullCrossbones,
    faWandSparkles
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from 'common'
import { IconColorProps } from 'lib/types'

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
    PROGRESSMONITOR = 'Progress Monitor',
    WIKI = 'Wiki'
}

export const availableCalculators = (isMobile: boolean) => [
    {
        title: AvailableCalculators.PROGRESSMONITOR,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faRankingStar} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.WIKI,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faBook} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.STAMINA,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faHourglass} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.EXPERIENCE,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faDragon} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    },
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
        title: AvailableCalculators.DEATHPENALTY,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faSkullCrossbones} size={isMobile ? "4x" : "7x"} color={color || colors.orange} />)
    }
]
