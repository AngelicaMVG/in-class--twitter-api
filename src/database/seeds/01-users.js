const dataRows = [{
  email: 'travis@mail.com',
  password: 'wow'
}, {
  email: 'yair@gmail.com',
  password: 'hello'
}];

exports.seed = function(knex, Promise) {
  return knex('user')
    .del()
    .then(() => {
      return knex('user')
        .insert(dataRows);
    });
}
