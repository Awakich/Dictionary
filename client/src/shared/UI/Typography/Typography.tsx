import { FC } from 'react'
import './typography.scss'

type Typography = {
    children?: React.ReactNode,
    weight: string,
    size: string,
}

const Typography: FC<Typography> = ({ children, weight = "normal", size = "h1" }) => {
    const mode = 'storybook-typography--normal' ? weight === "normal" : 'storybook-typography--bold'
    return (
        <p className={['storybook-typography', `storybook-typography--${size}`, mode].join(' ')}>{children}</p>
    )
}

export default Typography