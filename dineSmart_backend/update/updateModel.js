"user strict";
var sql = require("../db.js");

//Registration object constructor
var otpx = function (registration) {
  this.registration = registration.registration;
  this.created_at = new Date();
};

otpx.acceptorder = function acceptorder(data, result) {


  sql.query("update customer set CPhone = (?) where CEmail = ?", [data.phone,data.email], function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      let result1 = { id: res.insertId, Oid: data.Oid };
      result(null, result1);

    }
  });
};

module.exports = otpx;