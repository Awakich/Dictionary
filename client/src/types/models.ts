import { ChangeEvent } from 'react'

export type InputType = {
    placeholder: string;
    userInput: string;
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type WordType = {
    id?: string,
    title: string,
    country: string,
    translate: string,
    liked: boolean,
    type: number,
}