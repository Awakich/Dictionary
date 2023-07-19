import { FC } from 'react'
import { Link } from 'react-router-dom'
import Typography from '../UI/Typography/Typography'
import './header.scss'

const Header: FC = () => {
    return (
        <section className='header'>
            <Link to={'/'}><Typography size='h1' weight='semibold'>Notes</Typography></Link>
            <Link to={'/liked'}><Typography size='p' weight='normal'>Избранные</Typography></Link>
        </section>
    )
}

export default Header