export const typeDefs = `#graphql
  type Word {
    id: ID!,
    title: String!,
    country: String!,
    translate: String!,
  }

  type Query {
    getWords: [Word]!
    getWord(id: ID!): Word!
  }

  type Mutation {
    addWord(word: AddWordInput!): Word
    deleteWord(id: ID!): [Word]
    updateWord(id: ID!, edits: UpdateWordInput!): Word
  }

  input AddWordInput {
    title: String!,
    country: String!,
    translate: String!,
  }

  input UpdateWordInput{
    title: String!,
    country: String!,
    translate: String!,
  }
`;
