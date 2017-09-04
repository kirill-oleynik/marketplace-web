const uuidv4 = require('uuid/v4');
const expressSession = require('express-session');
const redisClient = require('redis').createClient({
  url: process.env.REDIS_URL
});
const ConnectRedis = require('connect-redis')(expressSession);

const redisStore = new ConnectRedis({ client: redisClient });

class Session {
  static create() {
    return expressSession({
      proxy: true,
      resave: false,
      genid: uuidv4,
      store: redisStore,
      saveUninitialized: false,
      name: process.env.SESSION_COOKIE_NAME,
      secret: process.env.APPLICATION_SECRET,
      cookie: {
        secure: process.env.NODE_ENV === 'production'
      }
    });
  }

  static update(responseData, session = {}) {
    const { clientId, accessToken, refreshToken } = responseData.data;

    /* eslint-disable no-param-reassign */
    session.clientId = clientId;
    session.accessToken = accessToken;
    session.refreshToken = refreshToken;
    /* eslint-enable no-param-reassign */
  }

  static setHeaders(proxyReqOpts, srcReq) {
    const { accessToken } = srcReq.session || {};
    const requestOpts = proxyReqOpts;

    if (accessToken) {
      requestOpts.headers.Authorization = `Bearer ${accessToken}`;
    }

    return requestOpts;
  }
}

module.exports = Session;
