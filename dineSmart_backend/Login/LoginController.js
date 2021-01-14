'use strict';

var Login = require('./LoginModel.js');

exports.authenticateUser = function (req, res) {
  if (!(req.body.email && req.body.password)) {
    res.status(400).send({ error: true, message: 'Please provide email/password' });
  }
  else {
    Login.authenticateUser(req.body, function (err, authStatus) {
      if (err)
        res.send(err);
      res.json(authStatus);
    });
  }
};

// to authenticate restuarant manager
exports.authenticateManager = function (req, res) {
  if (!(req.body.r_id && req.body.r_password)) {
    res.status(400).send({ error: true, message: 'Please provide email/password' });
  }
  else {
    Login.authenticateManager(req.body, function (err, m_authStatus) {
      if (err)
        res.send(err);
      res.json(m_authStatus);
    });
  }
};

