import { gql } from "@apollo/client";

export const getWord = gql
    `
query getWord($id: ID!){
    word:getWord(id: $id){
        id,
        title,
        country,
        translate,
        liked,
        type
    }
}
`