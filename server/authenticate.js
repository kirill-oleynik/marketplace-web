const axios = require('axios');
const Session = require('./session.js');

const refreshSession = (refreshToken, clientId) => {
  const headers = {};

  if (refreshToken) {
    headers['x-auth-token'] = refreshToken;
  }

  if (clientId) {
    headers['client-id'] = clientId;
  }

  return axios.put(`${process.env.API_PROXY_URL}/sessions/refresh`, null, {
    headers
  });
};

const retryRequest = (request, token) => {
  const options = {
    method: request.method,
    url: process.env.API_PROXY_URL + request.url,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  if (request.method === 'GET') {
    options.params = request.query;
  } else {
    options.data = request.body;
  }

  return axios(options);
};

module.exports = function authenticate(req, res) {
  return refreshSession(req.session.refreshToken, req.session.clientId)
    .then((response) => {
      Session.update(response.data, req.session);

      return retryRequest(req, req.session.accessToken);
    })
    .then((response) => {
      res.status(response.status);

      Object
        .keys(response.headers)
        .filter((item) => item !== 'transfer-encoding')
        .forEach((item) => res.set(item, response.headers[item]));

      return JSON.stringify(response.data);
    });
};
