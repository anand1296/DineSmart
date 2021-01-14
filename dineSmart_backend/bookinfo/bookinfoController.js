"use strict";

var Booking = require("./bookinfoModel.js");

exports.create_a_booking_session = function (req, res) {
  if (!req.body.CId) {
    res.status(400).send({ error: true, message: "Please provide CId" });
  } else {
    Booking.createBooking_session(req.body, function (err, data) {
      if (err) {
        res.send(err);
      } else {
        console.log('else in create booking sess: res: ', data);
        res.json(data);
      }
    });
  }
};

exports.create_a_session = function (req, res) {
  console.log('inside create sess controller', req.body);
  if (req.body.SId && req.body.TId) {
    Booking.create_session(req.body, function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });
  }
};

exports.setOId = function (req, res) {
  console.log('inside setOId controller', req.body);
  Booking.setOId(req.body, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
};
exports.setPoint = function (req, res) {
  console.log('inside setOId controller', req.body);
  Booking.setPoint(req.body, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
};
exports.getPoint = function (req, res) {
  console.log('inside setOId controller', req.body);
  Booking.getPoint(req.body, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
};
exports.setZero = function (req, res) {
  console.log('inside setZero controller', req.body);
  Booking.setZero(req.body, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
};

exports.getBillAmount = function (req, res) {

  Booking.getBillAmount(req.params.dataString, function (err, item) {
    console.log('bookinfo info controller: get bill amount', item, 'bookinfo controller end');
    if (err)
      res.send(err);

    res.send(item);
  });
};

exports.changeBillStatus = function (req, res) {
  console.log('inside changeBillStatus controller', req.body);
  Booking.changeBillStatus(req.body, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
};

exports.changeTableBookingStatus = function (req, res) {
  console.log('inside changeTableBookingStatus controller', req.body);
  Booking.changeTableBookingStatus(req.body, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
};

exports.getRestAndTableIds = function (req, res) {

  Booking.getRestAndTableIds(req.params.dataString, function (err, item) {
    console.log('bookinfo info controller: get getRestAndTableIds', item, 'bookinfo controller getRestAndTableIds end');
    if (err)
      res.send(err);

    res.send(item);
  });
};

