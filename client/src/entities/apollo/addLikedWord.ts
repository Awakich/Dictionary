import { gql } from "@apollo/client";

export const addLikedWord = gql
    `
mutation addLikedWord($word: AddLikedWord!){
    addLikedWord(word: $word) {
        id,
        title,
        country,
        translate,
        liked
    }
}
`