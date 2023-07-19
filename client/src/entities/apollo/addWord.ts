import { gql } from "@apollo/client";

export const addWord = gql
  `
mutation addWord($word: AddWordInput!){
  addWord(word: $word) {
    id,
    country,
    title,
    translate,
  }
}
`