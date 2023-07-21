import { FC } from 'react'
import { WordType } from '../../types/models'
import { BookmarkSlashIcon } from '@heroicons/react/24/outline'
import { useMutation } from '@apollo/client'
import { getLikedWords } from '../../entities/apollo/getLikedWords'
import { deleteLikedWord } from '../../entities/apollo/deleteLikedWord'
import WordInner from '../WordInner/WordInner'
import Typography from '../../shared/UI/Typography/Typography'
import './likedword.scss'

const LikedWord: FC<WordType> = ({ country, title, translate, id }) => {

    const [deleteLikedWordHandler, { error }] = useMutation(deleteLikedWord, {
        refetchQueries: [
            { query: getLikedWords }
        ]
    })

    if (error) return <Typography size='h1' weight='semibold'>Error</Typography>

    return (
        <section className='likedword'>
            <div className='likedword--inner'>
                <WordInner value={title} name="Название" />
                <WordInner value={translate} name="Перевод" />
                <WordInner value={country} name="Город" />
            </div>

            <BookmarkSlashIcon className='icon' onClick={() => {
                deleteLikedWordHandler({
                    variables: { id }
                })
            }} />

        </section>
    )
}

export default LikedWord