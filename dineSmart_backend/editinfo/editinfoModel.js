"user strict";
var sql = require("../db.js");

//Registration object constructor
var otpx = function(registration) {
  this.registration = registration.registration;
  this.created_at = new Date();
};

otpx.createotp = function createotp(data, result) {
  // console.log(data)

  sql.query("UPDATE customer set Cpassword =(?) where CEmail = (?) and Cpassword = (?) ", [data.npassword,data.email,data.opassword], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      let result1 = { id: res.insertId, email: data.email, opassword: data.opassword, npassword: data.npassword };
      result(null, result1);
    }
  });
};

module.exports = otpx;
