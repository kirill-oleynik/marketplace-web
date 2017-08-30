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
      store: redisStore,
      name: process.env.SESSION_COOKIE_NAME,
      genid: uuidv4,
      secret: process.env.APPLICATION_SECRET,
      cookie: {},
      resave: false,
      saveUninitialized: true
    });
  }

  static update(responseData, session) {
    const { access_token, refresh_token, client_id } = responseData;

    /* eslint-disable no-param-reassign, camelcase */
    session.accessToken = access_token;
    session.refreshToken = refresh_token;
    session.clientId = client_id;
    /* eslint-enable no-param-reassign, camelcase */
  }

  static setHeaders(proxyReqOpts, srcReq) {
    const { accessToken } = srcReq.session;
    const requestOpts = proxyReqOpts;
    if (accessToken) {
      requestOpts.headers['x-auth-token'] = accessToken;
    }

    return requestOpts;
  }
}

module.exports = Session;
