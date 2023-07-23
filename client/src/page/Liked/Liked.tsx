import { FC } from 'react'
import Button from '../../shared/UI/Button/Button'
import './liked.scss'
import Words from '../../widgets/Words/Words'

const Liked: FC = ({ }) => {
    return (
        <section className='liked'>
            <Words type={1} />
            <Button label='Найти все' primary={false} size='large' onClick={() => window.location.reload()} />
        </section>
    )
}

export default Liked