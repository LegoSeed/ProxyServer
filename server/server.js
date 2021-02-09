require('newrelic');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is listening on: ', PORT);
});