const { users, profiles } = require('../data/db');

module.exports = {
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
};
