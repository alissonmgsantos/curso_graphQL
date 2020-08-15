const { ApolloServer, gql } = require('apollo-server');

const profiles = [
  { id: 1, name: 'moderator' },
  { id: 2, name: 'administrator' },
];
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@email.com',
    age: '100',
    profile_id: 1,
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'Jane@email.com',
    age: '110',
    profile_id: 2,
  },
];

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
    profile: Profile
  }

  type Profile {
    id: Int
    name: String!
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
    users: [User]
    user(id: ID): User
    profiles: [Profile]
    profile(id: Int): Profile
  }
`;

const resolvers = {
  User: {
    profile(user) {
      result = profiles.filter((profile) => profile.id == user.id);
      return result ? result[0] : null;
    },
  },
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
    users() {
      return users;
    },
    user(_, args) {
      result = users.filter((user) => user.id == args.id);
      return result ? result[0] : null;
    },
    profiles() {
      return users;
    },
    profile(_, { id }) {
      result = profiles.filter((profile) => profile.id == id);
      return result ? result[0] : null;
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
