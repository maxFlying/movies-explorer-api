require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { PORT = 6688, DB_URL, NODE_ENV } = process.env;
const app = express();
const { errors } = require('celebrate');
const cors = require('cors');
const { CentralErrorHandler } = require('./errors/central-err-handler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

mongoose.connect(NODE_ENV === 'production' ? DB_URL : 'mongodb://localhost:27017/moviesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: false,
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ['http://maxflying.diploma.nomoredomains.icu',
    'https://maxflying.diploma.nomoredomains.icu',
    'http://api.maxflying.diploma.nomoredomains.icu',
    'https://api.maxflying.diploma.nomoredomains.icu',
    'http://localhost:6688',
    'http://localhost:3000',
  ],
  credentials: true,
}));
app.use(requestLogger);

app.use(require('./routes/index'));

app.use(errorLogger);

app.use(errors());

app.use(CentralErrorHandler);

app.listen(PORT);
