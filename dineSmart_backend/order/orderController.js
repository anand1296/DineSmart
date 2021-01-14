'use strict';

var Order = require('./orderModel.js');

exports.create_a_order = function (req, res) {
  if ((req.body.email && req.body.name && req.body.phone)) {
    res.status(400).send({ error: true, message: 'Please provide email/password' });
  }
  else {
    Order.createOrder(req.body, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  }
};

exports.get_all_orders = function (req, res) {
  Order.getAllOrder(req.params.passed_id, function (err, order) {
    // console.log("restinfo controller", restaurant, "restinfo centroller end");
    if (err) res.send(err);

    res.send(order);
  });
};
exports.get_orders = function (req, res) {
  Order.getOrder(req.params.passed_id, function (err, order) {
    // console.log("restinfo controller", restaurant, "restinfo centroller end");
    if (err) res.send(err);

    res.send(order);
  });
};
exports.get_orders_id = function (req, res) {
  console.log("in controller")
  if ((req.body.email && req.body.name && req.body.phone)) {
    res.status(400).send({ error: true, message: 'Please provide email/password' });
  }
  else {
    console.log("in else")

    Order.getOrderId(req.body, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  }
};
