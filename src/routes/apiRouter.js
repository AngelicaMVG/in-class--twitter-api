const Router = require('express').Router;
const Tweet = require('../models/Tweet.js');
const Profile = require('../models/Profile.js');

const apiRouter = Router();

function getAllUsers (req, res) {
  Profile
    .query()
    .eager('tweets')
    .then(data => res.json(data));
}

function getAllTweets (req, res) {
  Tweet
    .query()
    .then(data => {
      return res.json(data).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function getTweetById (req, res) {
  Tweet
    .query()
    .findById(req.params.id) // SELECT * FROM Tweets WHERE Id = 5;
    .then(tweet => {
      return res.json(tweet).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function createTweet (req, res) {
  Tweet
    .query()
    .insert(req.body)
    .then(newTweet => {
      return res.json(newTweet).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function updateTweet (req, res) {
  Tweet
    .query()
    .updateAndFetchById(req.params.id, req.body)
    .then(tweetUpdated => {
      return res.json(tweetUpdated).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
}

function deleteTweetById (req, res) {
  Tweet
    .query()
    .deleteById(req.params.id)
    .then(tweetsDeleted => {
      return res.json({
        rowsDeleted: tweetsDeleted
      }).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
}

// Users Endpoints
apiRouter
  .get('/users', getAllUsers);

// Tweets Endpoints
apiRouter
  .get('/tweets', getAllTweets)
  .get('/tweets/:id', getTweetById)
  .post('/tweets', createTweet)
  .put('/tweets/:id', updateTweet)
  .delete('/tweets/:id', deleteTweetById);

module.exports = apiRouter;
