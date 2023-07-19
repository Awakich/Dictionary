import { FC, useState } from 'react'
import { WordType } from '../../types/models'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { useMutation } from '@apollo/client'
import { deleteWord } from '../../entities/apollo/deleteWord'
import { getWords } from '../../entities/apollo/getWords'
import WordInner from '../WordInner/WordInner'
import Typography from '../../shared/UI/Typography/Typography'
import Modal from '../Modal/Modal'
import './word.scss'

const Word: FC<WordType> = ({ country, title, translate, id }) => {
    const [open, setOpen] = useState<boolean>(false)

    const [deleteWordHandler, { error }] = useMutation(deleteWord, {
        refetchQueries: [
            { query: getWords }
        ]
    })

    if (error) return <Typography size='h1' weight='semibold'>Error</Typography>

    return (
        <section className='word' onClick={() => { setOpen(!open) }}>
            <div className='word--inner'>
                <WordInner value={title} name="Название" />
                <WordInner value={translate} name="Перевод" />
                <WordInner value={country} name="Город" />
            </div>

            <div className='icons'>
                <HeartIcon className='icon' onClick={() => {

                }} />

                <XMarkIcon className='icon' onClick={() =>
                    deleteWordHandler({
                        variables: {
                            id
                        }
                    })
                } />
            </div>
            {open && <Modal closeModal={() => setOpen(!open)} id={id as string} key={id} />}
        </section>
    )
}

export default Word