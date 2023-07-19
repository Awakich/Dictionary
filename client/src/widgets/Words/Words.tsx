import { FC, Fragment, useState } from 'react'
import { useQuery } from '@apollo/client'
import { getWords } from '../../entities/apollo/getWords'
import { WordType } from '../../types/models'
import Typography from '../../shared/UI/Typography/Typography'
import Input from '../../shared/UI/Input/Input'
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
            <div className='filter'>
                <Input placeholder='Поиск по названию' userInput={userInput} inputHandler={(e) => setUserInput(e.target.value)} />
            </div>

            <section className='words'>
                {data.words.filter((word: WordType) => userInput.toLowerCase().trim() === "" ? word : word.title.toLowerCase().includes(userInput.toLowerCase()))
                    .map(({ id, title, country, translate }: WordType) => (
                        <Word id={id} key={id} country={country} title={title} translate={translate} />
                    ))}
            </section>
        </Fragment>

    )
}

export default Words