const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
'use strict';


var Registration = require('./registModel.js');



exports.create_a_otp = function (req, res) {
  
  Registration.createotp(req.body, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });

};

exports.create_Registration = function (req, res) {
  
    Registration.createRegistration(req.body, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  
};
