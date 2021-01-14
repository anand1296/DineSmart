"user strict";
var sql = require("../db.js");

//Registration object constructor
var fregist = function(registration) {
  this.registration = registration.registration;
  this.created_at = new Date();
};

fregist.createRegist = function createRegist(data, result) {
  sql.query(
    "INSERT into customer (CName, CEmail, CPhone, CDoB, CPassword) VALUES (?,?,?,?,?)",
    [data.name, data.email, data.phone, data.dob, data.password],
    function(err, rows, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        let result1 = { name: data.name, email: data.email };
        result(null, result1);
      }
    }
  );
};

module.exports = fregist;
