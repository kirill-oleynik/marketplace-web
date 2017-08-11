require('dotenv').config();

const fs = require('fs');
const path = require('path');
const next = require('next');
const morgan = require('morgan');
const express = require('express');
const proxyMiddleware = require('http-proxy-middleware');

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

const proxy = proxyMiddleware('/api', {
  logLevel: 'error',
  changeOrigin: true,
  target: process.env.API_PROXY_URL,
  pathRewrite: {
    '^/api': '/'
  },
});

const unlinkSocket = (path) => new Promise((resolve) => (
  fs.unlink(path, () => resolve())
));

app
  .prepare()
  .then(() => {
    return unlinkSocket(socketPath);
  })
  .then(() => {
    const server = express();
    const nextHandler = app.getRequestHandler();

    server.use(logger);
    server.use(proxy);
    server.all('*', (req, res) => nextHandler(req, res));

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
