import { gql } from "@apollo/client";

export const getLikedWords = gql
    `
query getLikedWords{
    likedWords:getLikedWords {
        id,
        title,
        country,
        translate,
    }
}
`