import { gql } from "@apollo/client";

export const getLikedWords = gql
    `
query getLikedWords{
    liked:getLikedWords {
        id,
        title,
        country,
        translate,
        liked,
        type
    }
}
`