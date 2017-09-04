const axios = require('axios');
const Session = require('./session');
const refreshSession = require('./refresh_session');
const convertToCamelCase = require('./convert_to_camel_case');

const CURRENT_USER_URL = `${process.env.API_PROXY_URL}/users/current`;

const makeRequest = (accessToken) => (
  axios.get(CURRENT_USER_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
);

module.exports = function getCurrentUser(req) {
  const { accessToken } = req.session || {};

  return makeRequest(accessToken)
    .then((response) => convertToCamelCase(response.data.data))
    .catch(({ response }) => (
      new Promise((resolve) => {
        if (response.status !== 401) {
          return resolve({});
        }

        const { clientId, refreshToken } = req.session || {};

        return refreshSession(clientId, refreshToken)
          .then((res) => {
            Session.update(convertToCamelCase(res.data), req.session);

            return makeRequest(req.session.accessToken);
          })
          .then((res) => resolve(convertToCamelCase(res.data.data)))
          .catch(() => resolve({}));
      })
    ));
};
