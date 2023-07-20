import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './db.js';

const resolvers = {
  Query: {
    getWords: () => db.words,
    getWord: (_, { id }) => {
      return db.words.find((word) => word.id === id);
    },
    getLikedWords: () => db.liked_words,
  },

  Mutation: {
    addWord: (_, args) => {
      let word = {
        id: (Math.random() * 100).toFixed(),
        ...args.word,
      };

      db.words.push(word);

      return word;
    },

    addLikedWord: (_, args) => {
      let word = {
        id: (Math.random() * 100).toFixed(),
        ...args.word,
      };

      db.liked_words.push(word);

      return word;
    },

    deleteWord: (_, { id }) => {
      db.words = db.words.filter((word) => word.id !== id);
      return db.words;
    },

    deleteLikedWord: (_, { id }) => {
      db.liked_words = db.liked_words.filter((word) => word.id !== id);
      return db.liked_words;
    },

    updateWord: (_, { id, edits }) => {
      let word = db.words.find((word) => word.id === id);
      word.title = edits.title;
      word.translate = edits.translate;
      word.country = edits.country;
      return word;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
