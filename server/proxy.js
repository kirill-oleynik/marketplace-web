const httpProxy = require('express-http-proxy');
const Session = require('./session.js');
const retryRequest = require('./retry_request');
const copyResponse = require('./copy_response');
const refreshSession = require('./refresh_session');
const convertToCamelCase = require('./convert_to_camel_case');

const CREATE_SESSIONS_URL = '/sessions';

const proxy = httpProxy(process.env.API_PROXY_URL, {
  proxyReqOptDecorator: (proxyReqOpts, srcReq) => (
    new Promise((resolve) => (
      resolve(Session.setHeaders(proxyReqOpts, srcReq))
    ))
  ),

  userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
    const responseData = convertToCamelCase(
      JSON.parse(proxyResData.toString('utf8'))
    );

    if (userReq.url === CREATE_SESSIONS_URL && proxyRes.statusCode < 400) {
      Session.update(responseData, userReq.session);
      return responseData;
    }

    if (proxyRes.statusCode !== 401) {
      return responseData;
    }

    const { clientId, refreshToken } = userReq.session || {};

    return refreshSession(clientId, refreshToken)
      .then((response) => {
        Session.update(convertToCamelCase(response.data), userReq.session);

        return retryRequest(userReq, userReq.session.accessToken);
      })
      .then((response) => {
        copyResponse(response, userRes);

        return convertToCamelCase(response.data);
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          return responseData;
        }

        copyResponse(response, userRes);

        return convertToCamelCase(response.data);
      });
  }
});

module.exports = proxy;
