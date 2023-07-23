import { FC, Fragment, useState, ChangeEvent } from 'react'
import { useQuery } from '@apollo/client'
import { getWords } from '../../entities/apollo/getWords'
import { WordType } from '../../types/models'
import { getLikedWords } from '../../entities/apollo/getLikedWords'
import Typography from '../../shared/UI/Typography/Typography'
import Filter from '../../shared/UI/Filter/Filter'
import Word from '../Word/Word'
import './words.scss'

type Type = { type: number }

const Words: FC<Type> = ({ type }) => {
    const [userInput, setUserInput] = useState<string>("")

    const { data, loading, error } = useQuery(getWords)
    const { data: Liked, loading: Liked_loading, error: Liked_error } = useQuery(getLikedWords)

    if (loading || Liked_loading) return <Typography size='h1' weight='semibold'>Loading...</Typography>
    if (error || Liked_error) return <Typography size='h1' weight='semibold'>Error</Typography>

    if (data.words.length === 0) return <Typography size='p' weight='semibold'>Добавь слова, перевод которых не знаешь</Typography>
    if (!data) return;

    return (
        <Fragment>
            <Filter placeholder='Поиск по названию' userInput={userInput} inputHandler={(e: ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)} />

            <section className='words'>
                {type === 0 ?
                    <Fragment>
                        {data.words.filter((word: WordType) => userInput.toLowerCase().trim() === "" ? word : word.title.toLowerCase().includes(userInput.toLowerCase()))
                            .map(({ id, title, country, translate, liked, type }: WordType) => (
                                <Word id={id} key={id} country={country} title={title} translate={translate} liked={liked} type={type} />
                            ))}
                    </Fragment>
                    :

                    <Fragment>
                        {Liked.liked.filter((word: WordType) => userInput.toLowerCase().trim() === "" ? word : word.title.toLowerCase().includes(userInput.toLowerCase())).map(({ id, liked, title, country, translate }: WordType) => (
                            <Word id={id} key={id} country={country} title={title} translate={translate} liked={liked} type={1} />
                        ))}
                    </Fragment>}
            </section>
        </Fragment>

    )
}

export default Words