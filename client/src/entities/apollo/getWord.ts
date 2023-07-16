import { gql } from "@apollo/client";

export const getWord = gql
    `
query getWord($id: ID!){
    getWord(id: $id){
        id,
        title,
        country,
        translate
    }
}
`