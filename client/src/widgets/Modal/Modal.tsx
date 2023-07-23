import { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import { getWord } from '../../entities/apollo/getWord'
import { useMutation, useQuery } from '@apollo/client'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { updateWord } from '../../entities/apollo/updateWord'
import WordInner from '../WordInner/WordInner'
import Typography from '../../shared/UI/Typography/Typography'
import Button from '../../shared/UI/Button/Button'
import Input from '../../shared/UI/Input/Input'
import './modal.scss'

type Props = {
    id: string;
    closeModal: () => void;
}

const Modal: FC<Props> = ({ id, closeModal }) => {
    const { data, loading, error } = useQuery(getWord, { variables: { id } })
    const [updateWordHandler, { }] = useMutation(updateWord, {
        refetchQueries: [
            { query: getWord, variables: { id } }
        ]
    })

    const [rename, setRename] = useState<boolean>(false)
    const [userInputTitle, setUserInputTitle] = useState<string>("")
    const [userInputCountry, setUserInputCountry] = useState<string>("")
    const [userInputTranslate, setUserInputTranslate] = useState<string>("")

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

                <Button label='Переименовать' primary={false} size='large' onClick={() => setRename(!rename)} />

                {rename && <div className='rename'>
                    <Button label='Ок' primary={true} size='large' onClick={() => {
                        if (userInputCountry.trim().length > 0 && userInputTranslate.trim().length > 0 && userInputTitle.trim().length > 0) {
                            updateWordHandler({
                                variables: {
                                    updateWordId: id,
                                    edits: {
                                        title: userInputTitle,
                                        country: userInputCountry,
                                        translate: userInputTranslate,
                                        liked: data.word.liked,
                                        type: data.word.type
                                    }
                                }
                            })

                            setRename(!rename)
                            setUserInputTitle("")
                            setUserInputCountry("")
                            setUserInputTranslate("")
                        }
                    }} />

                    <div className='rename--inputs'>
                        <Input placeholder='Написать слово' userInput={userInputTitle} inputHandler={(e) => setUserInputTitle(e.target.value)} />
                        <Input placeholder='Написать город' userInput={userInputCountry} inputHandler={(e) => setUserInputCountry(e.target.value)} />
                        <Input placeholder='Написать перевод' userInput={userInputTranslate} inputHandler={(e) => setUserInputTranslate(e.target.value)} />
                    </div>
                </div>}
            </div>
        </>, document.getElementById("portal")!
    )
}

export default Modal