import { Icon } from 'lib/components'
import { IconProps } from 'lib/types'
import React from 'react'

export const Poland: React.FunctionComponent<IconProps> = props => (
	<Icon viewBox="0 0 128 96" {...props}>
		<g>
			<rect width="128" height="96" fill="#fff" />
			<rect y="48" width="128" height="48" fill="#DC143C" />
		</g>
	</Icon>
)
