
'use strict';


var otpx = require('./acceptModel.js');



exports.accept_order = function (req, res) {
  console.log("In controller");

  otpx.acceptorder(req.body, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });

};


