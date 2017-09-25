const Session = require('./session');

module.exports = function oauthCallback(req, res) {
  const sessionData = {
    data: req.query
  };

  Session.update(sessionData, req.session);

  res.redirect(302, '/');
};
