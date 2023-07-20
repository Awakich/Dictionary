import { FC } from 'react'
import LikedWords from '../../widgets/LikedWords/LikedWords'
import Button from '../../shared/UI/Button/Button'
import './liked.scss'

const Liked: FC = ({ }) => {
    return (
        <section className='liked'>
            <LikedWords />
            <Button label='Найти все' primary={false} size='large' onClick={() => window.location.reload()} />
        </section>
    )
}

export default Liked