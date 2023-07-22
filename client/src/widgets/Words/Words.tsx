import { FC, Fragment, useState, ChangeEvent } from 'react'
import { useQuery } from '@apollo/client'
import { getWords } from '../../entities/apollo/getWords'
import { WordType } from '../../types/models'
import Typography from '../../shared/UI/Typography/Typography'
import Filter from '../../shared/UI/Filter/Filter'
import Word from '../Word/Word'
import './words.scss'

const Words: FC = ({ }) => {
    const [userInput, setUserInput] = useState<string>("")

    const { data, loading, error } = useQuery(getWords)

    if (loading) return <Typography size='h1' weight='semibold'>Loading...</Typography>
    if (error) return <Typography size='h1' weight='semibold'>Error</Typography>

    if (data.words.length === 0) return <Typography size='p' weight='semibold'>Добавь слова, перевод которых не знаешь</Typography>

    return (
        <Fragment>
            <Filter placeholder='Поиск по названию' userInput={userInput} inputHandler={(e: ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)} />

            <section className='words'>
                {data.words.filter((word: WordType) => userInput.toLowerCase().trim() === "" ? word : word.title.toLowerCase().includes(userInput.toLowerCase()))
                    .map(({ id, title, country, translate, liked }: WordType) => (
                        <Word id={id} key={id} country={country} title={title} translate={translate} liked={liked} />
                    ))}
            </section>
        </Fragment>

    )
}

export default Words