const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceDiscount: Float
  }

  # Ponto de entrada da API
  type Query {
    hello: String
    now: Date
    userAuthenticated: User
    product: Product
  }
`;

const resolvers = {
  Product: {
    priceDiscount(product) {
      return product.discount
        ? product.price * (1 - product.discount)
        : product.price;
    },
  },
  Query: {
    hello() {
      return 'Hi, welcome to graphQL';
    },
    now() {
      return new Date();
    },
    userAuthenticated() {
      return {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com',
        age: '100',
        salary: 1234.56,
        vip: true,
      };
    },

    product() {
      return {
        name: 'Notebook',
        price: 6999.99,
        discount: 0.15,
      };
    },
  },
};

//Configuração
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('server listening %s', url);
});
