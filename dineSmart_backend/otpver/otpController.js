
'use strict';


var otpx = require('./otpModel.js');



exports.create_a_otp = function (req, res) {
  
  otpx.createotp(req.body, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });

};


