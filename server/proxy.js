const httpProxy = require('express-http-proxy');
const isArray = require('lodash/isArray');
const isPlainObject = require('lodash/isPlainObject');
const camelCase = require('lodash/camelCase');
const Session = require('./session.js');
const authenticate = require('./authenticate.js');

const convertToCamelCase = (data) => {
  if (isArray(data)) {
    return data.map(convertToCamelCase);
  }

  if (isPlainObject(data)) {
    return Object.keys(data).reduce((accumulator, key) => {
      accumulator[camelCase(key)] = convertToCamelCase(data[key]);
      return accumulator;
    }, {});
  }

  return data;
};

const proxy = httpProxy(process.env.API_PROXY_URL, {
  proxyReqOptDecorator: (proxyReqOpts, srcReq) => (
    new Promise((resolve) => (
      resolve(Session.setHeaders(proxyReqOpts, srcReq))
    ))
  ),

  userResDecorator: (proxyRes, proxyResData, userReq, userRes) => (
    new Promise((resolve) => {
      const rawData = JSON.parse(proxyResData.toString('utf8'));
      const camelCaseData = convertToCamelCase(rawData);

      if (userReq.url === '/sessions') {
        Session.update(rawData, userReq.session);
        return resolve(camelCaseData);
      }

      if (proxyRes.statusCode !== 401) {
        return resolve(camelCaseData);
      }

      return authenticate(userReq, userRes)
        .then((response) => (
          resolve(convertToCamelCase(response))
        ))
        .catch(() => resolve(camelCaseData));
    })
  )
});

module.exports = proxy;
