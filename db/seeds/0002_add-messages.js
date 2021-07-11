exports.seed = (knex) => knex('messages')
  .del()
  .then(() => knex('messages').insert([
    {
      id: 1,
      message: 'No se programar xD',
      user_id: 1,
    },
    {
      id: 2,
      message: 'Eso se sabe, no te preocupes',
      user_id: 2,
    },
  ]));
