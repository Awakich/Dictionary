import { FC } from 'react'
import { InputType } from '../../../types/models'
import Input from '../Input/Input'

const Filter: FC<InputType> = ({ userInput, inputHandler }) => {
    return (
        <div className='filter'>
            <Input placeholder='Поиск по названию' userInput={userInput} inputHandler={inputHandler} />
        </div>
    )
}

export default Filter