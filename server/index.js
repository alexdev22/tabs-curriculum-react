const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data');
app.listen(3001, () => {
  console.log('Listening on port 3001');
});

app.use(cors());

app.get('/', (req, res) => {
  res.json(data);
});
