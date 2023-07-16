import { gql } from "@apollo/client";

export const deleteWord = gql
    `
mutation deleteWord($id: ID!){
  deleteWord(id: $id) {
    id,
    country,
    title,
    translate
  }
}
`