import { Icon } from 'lib/components'
import { IconProps } from 'lib/types'
import React from 'react'

export const UnitedKingdom: React.FunctionComponent<IconProps> = props => (
	<Icon viewBox="0 0 64 48" {...props}>
		<rect width="64" height="48" fill="#012169" />
		<polygon points="0,0 8,0 32,21 56,0 64,0 64,4 38,24 64,44 64,48 56,48 32,27 8,48 0,48 0,44 26,24 0,4" fill="#FFF" />
		<polygon points="0,0 2,0 32,23 62,0 64,0 64,1 34,24 64,47 64,48 62,48 32,25 2,48 0,48 0,47 30,24 0,1" fill="#C8102E" />
		<rect x="27" y="0" width="10" height="48" fill="#FFF" />
		<rect x="0" y="20" width="64" height="9" fill="#FFF" />
		<rect x="30" y="0" width="4" height="48" fill="#C8102E" />
		<rect x="0" y="22" width="64" height="4" fill="#C8102E" />
	</Icon>
)
