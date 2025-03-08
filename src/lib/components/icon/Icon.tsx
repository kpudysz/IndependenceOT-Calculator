import React from 'react'
import { IconProps } from 'lib/types'

type IconComponentProps = IconProps & {
    children: React.ReactNode
    className?: string
}

export const Icon: React.FunctionComponent<IconComponentProps> = ({ size = 24, color, children, viewBox, className, style, width, height, fill }) => (
    <svg
        role="svg"
        width={width ?? size}
        height={height ?? size}
        fill={fill ?? color ?? 'currentColor'}
        viewBox={viewBox ?? '0 0 24 24'}
        className={className}
        style={style}
    >
        {children}
    </svg>
)
