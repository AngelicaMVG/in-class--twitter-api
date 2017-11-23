const { Model } = require('objection');

class Profile extends Model {
  static get tableName () {
    return 'profile';
  }

  static get relationMappings () {
    const Tweet = require('./Tweet.js');
    const User = require('./User.js');

    return {
      tweets: {
        relation: Model.HasManyRelation,
        modelClass: Tweet,
        join: {
          from: 'profile.id',
          to: 'tweet.profileId'
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'profile.userId',
          to: 'user.id'
        }
      }
    };
  }
}

module.exports = Profile;
