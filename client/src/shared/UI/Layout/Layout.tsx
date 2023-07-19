import { FC } from 'react'
import './layout.scss'

type Props = {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className='layout'>{children}</div>
    )
}

export default Layout