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
    status: 'ACTIVED',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'Jane@email.com',
    age: '110',
    profile_id: 2,
    status: 'BLOCKED',
  },
];

module.exports = {
  profiles,
  users,
};
