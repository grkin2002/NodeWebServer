const express = require('express');

const app = express();

app.get('/', (req, res)=> {
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities',
    ],
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request !',
  })
})

// /bad - send back json with errorMessage

app.listen(3000);

