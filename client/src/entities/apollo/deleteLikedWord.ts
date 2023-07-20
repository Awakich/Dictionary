import { gql } from "@apollo/client";


export const deleteLikedWord = gql
    `
mutation deleteLikedWord($id: ID!){
    deleteLikedWord(id: $id) {
        id,
        title,
        country,
        translate,
        liked,
    } 
}
`