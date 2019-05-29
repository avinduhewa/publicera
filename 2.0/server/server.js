const express = require('express');
const Twitter = require('twit');
const app = express();

app.listen(3000, () => console.log('Server running'))

const client = new Twitter({
  consumer_key: 'QdQWrg3QCUGcTYT9wDwmmboDo',
  consumer_secret: '8yxpDl8KxE9vWgIXnBngMkjN28JZ9qL5XVjqdVPC3XgcOzLW7N',
  access_token: '175375380-x5dlyBASmBzUamZJInAIpMXCMzomChn3DzhRwN5Z',
  access_token_secret: 'oSF32XLLrJfbdaDBQrrwQnZwDTYHdUgGdFi8ilixaGZmM'
});

app.get('/home_timeline', (req, res) => {
  const params = { tweet_mode: 'extended', count: 10 };

  client
    .get(`statuses/home_timeline`, params)
    .then(timeline => {

      res.send(timeline);
    })
    .catch(error => {
      res.send(error);
    });
});

app.get('/stats/:id', (req, res) => {
  var params = { screen_name: req.params.id };
  client.get('users/lookup', params)
    .then(response => {
      console.log('Followers count => ', response.data[0].followers_count)
      console.log('Following count => ', response.data[0].friends_count)
      res.send(response.data[0]);
    })
    .catch(error => {
      res.send(error)
    })
});

app.get('/mytweets/:id', (req, res) => {
  var params = {
    q: encodeURIComponent(`${req.params.id}`),
    include_entities: false
  };
  client.get('search/tweets', params)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error)
    })
});

app.get('/post_tweet', (req, res) => {

  tweet = { status: "Hello world" };

  client
    .post(`statuses/update`, tweet)
    .then(timeline => {
      console.log(timeline);

      res.send(timeline);
    })

    .catch(error => {
      res.send(error);
    });


});