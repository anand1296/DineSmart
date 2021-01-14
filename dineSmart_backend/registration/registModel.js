const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
("user strict");
var sql = require("../db.js");

//Registration object constructor
var Registration = function(registration) {
  this.registration = registration.registration;
  this.created_at = new Date();
};

Registration.createRegistration = function createRegistration(data, result) {
  // console.log(data)

  sql.query("Select * from otpver where cemail = ?", [data.email], function(
    err,
    rows,
    res
  ) {
    if (err) {
      console.log("Email Not Valid ", err);
      result(err, null);
    } else {
      // let result1 = { "id": res.insertId, "name": data.name, "email": data.email }
      console.log(rows.otp_id);

      const output = `
    <p>${
      rows[0].otp_id
    } is your one time password for DineSmart account verification.</p>
   
    `;

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "dinesmartgec@gmail.com", // generated ethereal user
          pass: "DineSmart@1234" // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: '"DineSmart" <dinesmartgec@gmail.com>', // sender address
        to: rows[0].cemail, // list of receivers
        subject: "Account Verification", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        //   console.log('Message sent: %s', info.messageId);
        //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });

      result(null, res);
    }
  });
};

module.exports = Registration;
