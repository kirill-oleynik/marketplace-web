const axios = require('axios');
const Session = require('./session');

const restoreCurrentUser = (headers) => (
  axios.get(
    `${process.env.API_PROXY_URL}/users/current`,
    { headers: headers }
  )
);

const getInitialStoreData = (req) => {
  const { headers } = Session.setHeaders(req, req);

  return restoreCurrentUser(headers);
};

module.exports = getInitialStoreData;
