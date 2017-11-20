const Router = require('express').Router;
const Tweets = require('../models/Tweets.js');
const Users = require('../models/Users.js');

const apiRouter = Router();

function getAllUsers (req, res) {
  Users
    .query()
    .eager('tweets')
    .then(data => res.json(data));
}

function getAllTweets (req, res) {
  Tweets
    .query()
    .then(data => {
      return res.json(data).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function getTweetById (req, res) {
  Tweets
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
  Tweets
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
  Tweets
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
  Tweets
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
