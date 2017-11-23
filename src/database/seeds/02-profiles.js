const dataRows = [{
  username: '@addyOsmani',
  name: 'Addy Osmani',
  profileUrl: 'https://pbs.twimg.com/profile_images/929541626292301825/vYxUzIes_400x400.jpg',
  userId: 1
}, {
  username: '@elliot',
  name: 'Eric Elliot',
  profileUrl: 'https://ericelliot.com/profile/avatar.jpg',
  userId: 1
}, {
  username: '@andy',
  name: 'Andy Priot',
  profileUrl: 'https://andy.com/profile.jpg'
}];

exports.seed = function(knex, Promise) {
  return knex('profile')
    .del()
    .then(() => {
      return knex('profile')
        .insert(dataRows);
    });
}
