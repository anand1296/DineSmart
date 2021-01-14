"user strict";
var sql = require("../db.js");

//Login object constructor
var Login = function(login) {
  this.login = login.login;
};

Login.authenticateUser = function authenticateUser(auth, result) {
  sql.query(
    "Select * from customer where CEmail= ? AND CPassword= ?",
    [auth.email, auth.password],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res);
        result(null, res);
      }
    }
  );
};

Login.authenticateManager = function authenticateManager(m_auth, result) {
  sql.query(
    "Select * from rest_manager where RId= ? AND RMPassword= ?",
    [m_auth.r_id, m_auth.r_password],
    function(err, m_res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(m_res);
        result(null, m_res);
      }
    }
  );
};

module.exports = Login;
