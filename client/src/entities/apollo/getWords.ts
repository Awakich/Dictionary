import { gql } from "@apollo/client";

export const getWords = gql
    `
    query getWords {
        words:getWords {
            id,
            title,
            country,
            translate,
            liked,
            type
        }
    }
`