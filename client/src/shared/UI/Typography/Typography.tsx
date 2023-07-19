import { FC } from 'react'
import './typography.scss'

type Typography = {
    children?: React.ReactNode,
    weight?: "normal" | "semibold",
    size: "h1" | "p",
}

const Typography: FC<Typography> = ({ children = 'Text', weight = "semibold", size = "h1" }) => {
    const mode = weight === "semibold" ? 'typography--semibold' : 'typography--normal'
    return (
        <p className={['typography', `typography--${size}`, mode].join(' ')}>{children}</p>
    )
}

export default Typography