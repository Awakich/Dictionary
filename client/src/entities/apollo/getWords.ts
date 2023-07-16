import { gql } from "@apollo/client";

export const getWords = gql
    `
    query getWords {
        getWords {
            id,
            title,
            country,
            translate
        }
    }
`