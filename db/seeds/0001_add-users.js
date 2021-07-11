exports.seed = (knex) => knex('users')
  .del()
  .then(() => knex('users').insert([
    {
      id: 1,
      username: 'ernesqba',
      name: 'Ernesto',
      lastname: 'Casabella',
    },
    {
      id: 2,
      username: 'guaty',
      name: 'David',
      lastname: 'Guaty',
    },
  ]));
