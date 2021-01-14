"user strict";
var sql = require("../db.js");

//Registration object constructor
var otpx = function(registration) {
  this.registration = registration.registration;
  this.created_at = new Date();
};

otpx.createotp = function createotp(data, result) {
  // console.log(data)

  sql.query("INSERT into otpver (cemail) VALUES (?)", [data.email], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      let result1 = { id: res.insertId, name: data.name, email: data.email };
      result(null, result1);
    }
  });
};

module.exports = otpx;
