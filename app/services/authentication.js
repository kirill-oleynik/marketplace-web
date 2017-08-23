const axios = require('axios');
const SessionService = require('./session.js');

const refreshSession = (refreshToken, clientId) => (
  axios.put(`${process.env.API_PROXY_URL}/sessions`, null, {
    headers: {
      'x-auth-token': refreshToken,
      'client-id': clientId
    }
  })
);

const retryRequest = (request, token) => (
  axios({
    method: request.method,
    url: process.env.API_PROXY_URL + request.url,
    data: request.data,
    headers: {
      'x-auth-token': token
    }
  })
);

const authenticate = (req, res) => (
  refreshSession(req.session.refreshToken, req.session.clientId)
  .then((response) => {
    SessionService.update(response.data, req.session);

    return retryRequest(req, req.session.accessToken);
  })
  .then((response) => {
    res.status(response.status);

    Object
      .keys(response.headers)
      .filter((item) => item !== 'transfer-encoding')
      .forEach((item) => res.set(item, response.headers[item]));

    return JSON.stringify(response.data);
  })
);

module.exports = authenticate;
