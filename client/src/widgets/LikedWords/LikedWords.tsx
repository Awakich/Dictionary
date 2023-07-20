import { FC, Fragment, useState } from 'react'
import { useQuery } from '@apollo/client'
import { getLikedWords } from '../../entities/apollo/getLikedWords'
import { WordType } from '../../types/models'
import Typography from '../../shared/UI/Typography/Typography'
import LikedWord from "../LikedWord/LikedWord"
import Input from '../../shared/UI/Input/Input'
import './likedwords.scss'

const LikedWords: FC = ({ }) => {
    const { data, loading, error } = useQuery(getLikedWords)
    const [userInput, setUserInput] = useState<string>("")

    if (loading) return <Typography size='h1' weight='semibold'>Loading...</Typography>
    if (error) return <Typography size='h1' weight='semibold'>Error</Typography>

    if (data.liked.length === 0) return <Typography size='p' weight='semibold'>Нет избранных, добавь новые</Typography>

    return (
        <Fragment>
            <div className='filter'>
                <Input placeholder='Поиск по названию' userInput={userInput} inputHandler={(e) => setUserInput(e.target.value)} />
            </div>

            <section className='words'>
                {data.liked.filter((word: WordType) => userInput.toLowerCase().trim() === "" ? word : word.title.toLowerCase().includes(userInput.toLowerCase())).map(({ id, liked, title, country, translate }: WordType) => (
                    <LikedWord id={id} key={id} country={country} title={title} translate={translate} liked={liked} />
                ))}
            </section>
        </Fragment>

    )
}

export default LikedWords