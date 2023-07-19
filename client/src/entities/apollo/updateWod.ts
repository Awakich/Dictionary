import { gql } from "@apollo/client";

export const updateWord = gql
  `
mutation updateWord($updateWordId: ID!, $edits: UpdateWordInput!){
  updateWord(id: $updateWordId, edits: $edits) {
    id,
    title,
    country,
    translate,
  }
}
`