import { FC } from 'react'
import { InputType } from '../../../types/models'
import './input.scss'

const Input: FC<InputType> = ({ placeholder, userInput, inputHandler }) => {

    return (
        <input alt='text' value={userInput} className="input" onChange={inputHandler} placeholder={placeholder} />
    )
}

export default Input