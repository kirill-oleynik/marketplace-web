require('dotenv').config();

const fs = require('fs');
const path = require('path');
const next = require('next');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const apiProxy = require('./proxy');
const Session = require('./session.js');
const getInitialStoreData = require('./initial_store_data');
const toCamelCase = require('../app/services/helpers').convertToCamelCase;

const session = Session.create();
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const port = process.env.PORT || 3000;
const socketPath = path.join('tmp', 'sockets', 'express.sock');
const listenTo = dev ? port : socketPath;

const app = next({
  dev,
  dir: 'app'
});

const logger = morgan(dev ? 'dev' : 'short');

const unlinkSocket = (unlinkPath) => new Promise((resolve) => (
  fs.unlink(unlinkPath, () => resolve())
));

app
  .prepare()
  .then(() => unlinkSocket(socketPath))
  .then(() => {
    const server = express();
    const nextHandler = app.getRequestHandler();

    server.use(bodyParser.json());
    server.use(logger);
    server.use(session);
    server.use('/api', apiProxy);
    server.all('*', (req, res) => (
      new Promise((resolve) => {
        getInitialStoreData(req)
          .then((response) => {
            const request = req;
            request.currentUser = toCamelCase(response.data.data);
            resolve(nextHandler(request, res));
          })
          .catch(() => resolve(nextHandler(req, res)))
      })
    ));

    server.listen(listenTo, (err) => {
      if (err) {
        throw err;
      }
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
