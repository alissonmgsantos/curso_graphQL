const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');
//Configuração
const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('server listening %s', url);
});
