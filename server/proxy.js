const httpProxy = require('express-http-proxy');
const Session = require('./session.js');
const authenticate = require('./authenticate.js');
const toCamelCase = require('../app/services/helpers').convertToCamelCase;

const proxy = httpProxy(process.env.API_PROXY_URL, {
  proxyReqOptDecorator: (proxyReqOpts, srcReq) => (
    new Promise((resolve) => (
      resolve(Session.setHeaders(proxyReqOpts, srcReq))
    ))
  ),

  userResDecorator: (proxyRes, proxyResData, userReq, userRes) => (
    new Promise((resolve) => {
      const rawData = JSON.parse(proxyResData.toString('utf8'));
      const camelCaseData = toCamelCase(rawData);

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
        .catch(({ response }) => {
          if (response.status === 401) {
            return resolve(camelCaseData);
          }

          userRes.status(response.status);

          Object
            .keys(response.headers)
            .filter((item) => item !== 'transfer-encoding')
            .forEach((item) => userRes.set(item, response.headers[item]));

          return resolve(
            convertToCamelCase(response.data)
          );
        });
    })
  )
});

module.exports = proxy;
