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

  updateUser(_, args) {
    const i = users.findIndex((user) => user.id === args.id);
    if (i < 0) return null;
    const user = {
      ...users[i],
      ...args,
    };

    users.splice(i, 1, user);
    return user;
  },

  destoryUser(_, { id }) {
    const i = users.findIndex((user) => user.id === id);
    if (i < 0) return null;
    const result = users.splice(i, 1);
    return result ? result[0] : null;
  },
};
