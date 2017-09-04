const axios = require('axios');

module.exports = function retryRequest(request, accessToken) {
  return axios({
    data: request.body,
    params: request.query,
    method: request.method,
    url: process.env.API_PROXY_URL + request.url,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};
