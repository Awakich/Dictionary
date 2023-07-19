import { ChangeEvent, FC } from 'react'
import './input.scss'

type Input = {
    placeholder: string;
    userInput: string;
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Input> = ({ placeholder, userInput, inputHandler }) => {

    return (
        <input alt='text' value={userInput} className="input" onChange={inputHandler} placeholder={placeholder} />
    )
}

export default Input