export const typeDefs = `#graphql
  type Word {
    id: ID!,
    title: String!,
    country: String!,
    translate: String!,
    liked: Boolean!,
  }

  type Query {
    getWords: [Word]!
    getWord(id: ID!): Word!
    getLikedWords: [Word]!
  }

  type Mutation {
    addWord(word: AddWordInput!): Word!
    deleteWord(id: ID!): [Word]!
    deleteLikedWord(id: ID!): [Word]!
    updateWord(id: ID!, edits: UpdateWordInput!): Word!
    addLikedWord(word: AddLikedWord!): Word!
  }

  input AddWordInput {
    title: String!,
    country: String!,
    translate: String!,
    liked: Boolean!,
  }

  input AddLikedWord {
    title: String!,
    country: String!,
    translate: String!,
    liked: Boolean!,
  }

  input UpdateWordInput{
    title: String!,
    country: String!,
    translate: String!,
  }
`;
