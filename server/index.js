import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { words } from './db.js';

const resolvers = {
  Query: {
    getWords: () => words,
    getWord: (_, { id }) => {
      return words.find((word) => word.id === id);
    },
  },

  Mutation: {
    addWord: (_, args) => {
      const word = {
        id: (Math.random() * 100).toFixed(),
        ...args.word,
      };

      words.push(word);

      return word;
    },

    deleteWord: (_, { id }) => {
      return words.filter((word) => word.id !== id);
    },

    updateWord: (_, { id, edits }) => {
      let word = words.find((word) => word.id === id);
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
