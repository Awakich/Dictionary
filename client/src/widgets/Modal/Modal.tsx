import { FC } from 'react'
import { createPortal } from 'react-dom'
import { getWord } from '../../entities/apollo/getWord'
import { useQuery } from '@apollo/client'
import { XMarkIcon } from '@heroicons/react/24/outline'
import WordInner from '../WordInner/WordInner'
import Typography from '../../shared/UI/Typography/Typography'
import './modal.scss'

type Props = {
    id: string;
    closeModal: () => void;
}

const Modal: FC<Props> = ({ id, closeModal }) => {
    const { data, loading, error } = useQuery(getWord, { variables: { id } })

    if (!data) return;
    if (loading) return <Typography size='h1' weight='semibold'>Loading...</Typography>
    if (error) return <Typography size='h1' weight='semibold'>Error</Typography>

    return createPortal(
        <>
            <div className='overlay' />
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <XMarkIcon className='icon' onClick={closeModal} />
                <div className='modal--inner'>
                    <WordInner value={data.word.title} name="Название" />
                    <WordInner value={data.word.translate} name="Перевод" />
                    <WordInner value={data.word.country} name="Город" />
                </div>
            </div>
        </>, document.getElementById("portal")!
    )
}

export default Modal