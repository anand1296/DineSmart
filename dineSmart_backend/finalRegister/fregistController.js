'use strict';
var sql = require('../db.js');

var fregist = require('./fregistModel.js');



exports.create_fregist = function (req, res) {
    
        sql.query("Select * from otpver where cemail = ? order by otp_id desc limit 1", req.body.email, function (err,rows, field) {  
                
          fregist.createRegist(req.body, function (err, data) {
                    if (err)
                      res.send(err);
                    res.json(data);
                  });                                             
                });     
        
  
  };
  




  /*fregist.createRegist(req.body, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
   */