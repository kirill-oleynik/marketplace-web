const httpProxy = require('express-http-proxy');
const authService = require('./authentication.js');
const SessionService = require('./session.js');

const proxy = httpProxy(
  process.env.API_PROXY_URL,
  {
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => (
      new Promise((resolve) => (
        resolve(SessionService.setHeaders(proxyReqOpts, srcReq))
      ))
    ),
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => (
      new Promise((resolve) => {
        if (userReq.url === '/sessions') {
          const responseData = JSON.parse(proxyResData.toString('utf8'));
          SessionService.update(responseData, userReq.session);

          return resolve(proxyResData);
        }

        if (proxyRes.statusCode !== 401) {
          return resolve(proxyResData);
        }

        return authService
          .call(userReq, userRes)
          .then(resolve)
          .catch(() => resolve(proxyResData));
      })
    )
  }
);

module.exports = proxy;
