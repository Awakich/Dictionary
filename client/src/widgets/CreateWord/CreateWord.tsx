import { FC, useState } from 'react'
import { useMutation } from '@apollo/client'
import { addWord } from '../../entities/apollo/addWord'
import { getWords } from '../../entities/apollo/getWords'
import Input from '../../shared/UI/Input/Input'
import Typography from '../../shared/UI/Typography/Typography'
import Button from '../../shared/UI/Button/Button'
import './createword.scss'

const CreateWord: FC = ({ }) => {

    const [addWordHandler, { error }] = useMutation(addWord, {
        update(cache, { data: { addWord } }) {
            const { words }: any = cache.readQuery({ query: getWords })

            cache.writeQuery({
                query: getWords,
                data: {
                    words: [addWord, ...words],
                }
            })
        }
    })

    if (error) return <Typography size='h1' weight='semibold'>Error</Typography>

    const [userInputTitle, setUserInputTitle] = useState<string>("")
    const [userInputCountry, setUserInputCountry] = useState<string>("")
    const [userInputTranslate, setUserInputTranslate] = useState<string>("")

    return (
        <section className='createword'>
            <div className='createword--inputs'>
                <Input placeholder='Написать слово' userInput={userInputTitle} inputHandler={(e) => setUserInputTitle(e.target.value)} />
                <Input placeholder='Написать город' userInput={userInputCountry} inputHandler={(e) => setUserInputCountry(e.target.value)} />
                <Input placeholder='Написать перевод' userInput={userInputTranslate} inputHandler={(e) => setUserInputTranslate(e.target.value)} />
            </div>

            <Button label='Отправить' primary={true} size='large' onClick={() => {
                if (userInputCountry.trim().length > 0 && userInputTranslate.trim().length > 0 && userInputTitle.trim().length > 0) {
                    addWordHandler({
                        variables: {
                            word: {
                                title: userInputTitle,
                                translate: userInputTranslate,
                                country: userInputCountry,
                                liked: false,
                                type: 0
                            }
                        }
                    })
                }
                setUserInputCountry("")
                setUserInputTitle("")
                setUserInputTranslate("")
            }} />
        </section>
    )
}

export default CreateWord;