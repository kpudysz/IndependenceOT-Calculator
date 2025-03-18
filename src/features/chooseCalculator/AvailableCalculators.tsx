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
    faWandSparkles
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
    STAMINA = 'Stamina'
}

export const availableCalculators = [
    {
        title: AvailableCalculators.BASIC,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faShield} size="7x" color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.FIST,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faHandFist} size="7x" color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.MAGIC,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faWandSparkles} size="7x" color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.EXPERIENCE,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faDragon} size="7x" color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.CAPACITY,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faBagShopping} size="7x" color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.FISHING,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faFishFins} size="7x" color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.ATTACKVALUE,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faMeteor} size="7x" color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.SPEEDBREAKPOINT,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faShoePrints} size="7x" color={color || colors.orange} />)
    },
    {
        title: AvailableCalculators.STAMINA,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faHourglass} size="7x" color={color || colors.orange} />)
    }
]
