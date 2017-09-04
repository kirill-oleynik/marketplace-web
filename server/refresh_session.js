const axios = require('axios');

const REFRESH_SESSION_URL = `${process.env.API_PROXY_URL}/sessions/refresh`;

module.exports = function refreshSession(clientId, refreshToken) {
  return axios.put(REFRESH_SESSION_URL, { clientId, refreshToken });
};
