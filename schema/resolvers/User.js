const { profiles } = require('../data/db');

module.exports = {
  profile(user) {
    result = profiles.filter((profile) => profile.id == user.id);
    return result ? result[0] : null;
  },
};
