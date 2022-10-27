const express = require('express');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.get('/greeting', (req, res) => {
  res.send({ message: 'Hello World'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});