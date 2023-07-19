import { FC } from 'react'
import Typography from '../../shared/UI/Typography/Typography'
import './wordinner.scss'

type WordInner = {
    value: string,
    name: string,
}

const WordInner: FC<WordInner> = ({ value, name }) => {
    return (
        <section className='wordinner'>
            <Typography size='p' weight='normal' >{name}:</Typography>
            <Typography size='p' weight='semibold' >{value}</Typography>
        </section>
    )
}

export default WordInner