const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const secretkey = 'secretkey';

app.get('/api', verifyToken, (req,res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

app.post('/api/posts', verifyToken, (req,res) => {
  jwt.verify(req.token, secretkey, (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created ...',
        authData
      });
    }
  });
});

app.post('/api/login', (req,res) => {
  // Mock user
  const user = {
    id: 1,
    username: 'brad',
    email: 'brad@gmail.com'
  }

  jwt.sign({user}, secretkey, { expiresIn: '30s' },(err,token) => {
    res.json({token})
  });
})

/*
Middleware function verify token

Token Format:
Authorization: Bearer <access_token>
*/
function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers['authorization'];

  // check if bearer is undefined
  if(typeof(bearerHeader) !== 'undefined'){
    // Bearer <access_token> -> [Bearer, <access_token>]
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log('Server started on port 5000'));


