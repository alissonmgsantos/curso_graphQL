const { users, nextID } = require('../data/db');

module.exports = {
  storeUser(_, { name, email, age }) {
    const user = {
      id: nextID(),
      name,
      email,
      age,
      profile_id: 1,
      status: 'ACTIVED',
    };
    users.push(user);
    return user;
  },
};
