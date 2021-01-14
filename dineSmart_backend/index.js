const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
'use strict'

var xyz = require('./server');
const { mc } = require('./database');

var port = '3800';

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/send', (req, res) => {
  const output = `
    <p>you have a new contact request</p>
    <h3>Contact Details</h3>
  
    `;


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'dinesmartgec@gmail.com', // generated ethereal user
      pass: 'DineSmart@1234'  // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" <dinesmartgec@gmail.com>', // sender address
    to: 'anoopkinlekar@gmail.com', // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', { msg: 'Email has been sent' });
  });


});


app.get('/', (req, res) => {
  res.render('contact');
});



xyz.set('port', process.env.PORT || port);
xyz.listen(xyz.get('port'), '192.168.2.5', () => {
  console.log(`server on port ${xyz.get('port')}`);
});