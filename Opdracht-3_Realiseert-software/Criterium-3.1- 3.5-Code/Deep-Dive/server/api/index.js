const express = require('express');
const serverless = require('serverless-http');

const app = express();


app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});


module.exports = app;
module.exports.handler = serverless(app);
