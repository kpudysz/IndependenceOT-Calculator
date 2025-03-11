import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBagShopping,
    faBug, faDragon,
    faFishFins,
    faHandFist, faHourglass, faMeteor,
    faShield, faShoePrints,
    faWandSparkles
} from '@fortawesome/free-solid-svg-icons'
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
    STAMINA = 'Stamina'
}

export const availableCalculators = [
    {
        title: AvailableCalculators.BASIC,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faShield} size="7x" color={color || "#FFA260"} />)
    },
    {
        title: AvailableCalculators.FIST,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faHandFist} size="7x" color={color || "#FFA260"} />)
    },
    {
        title: AvailableCalculators.MAGIC,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faWandSparkles} size="7x" color={color || "#FFA260"} />)
    },
    {
        title: AvailableCalculators.EXPERIENCE,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faDragon} size="7x" color={color || "#FFA260"} />)
    },
    {
        title: AvailableCalculators.CAPACITY,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faBagShopping} size="7x" color={color || "#FFA260"} />)
    },
    {
        title: AvailableCalculators.FISHING,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faFishFins} size="7x" color={color || "#FFA260"} />)
    },
    {
        title: AvailableCalculators.ATTACKVALUE,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faMeteor} size="7x" color={color || "#FFA260"} />)
    },
    {
        title: AvailableCalculators.SPEEDBREAKPOINT,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faShoePrints} size="7x" color={color || "#FFA260"} />)
    },
    {
        title: AvailableCalculators.STAMINA,
        icon: ({ color }: IconColorProps) => (<FontAwesomeIcon icon={faHourglass} size="7x" color={color || "#FFA260"} />)
    }
]
