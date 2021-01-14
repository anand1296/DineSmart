"use strict";

var Customer = require("./CustModel.js");

exports.list_all_customers = function(req, res) {
  Customer.getAllCustomer(function(err, customer) {
    if (err) res.send(err);

    res.send(customer);
  });
};

exports.create_a_customer = function(req, res) {
  var new_customer = new Customer(req.body);

  //handles null error
  if (!new_customer.customer || !new_customer.status) {
    res
      .status(400)
      .send({ error: true, message: "Please provide customer/status" });
  } else {
    Customer.createCustomer(new_customer, function(err, customer) {
      if (err) res.send(err);
      res.json(customer);
    });
  }
};

exports.read_a_customer = function(req, res) {
  Customer.getCustomerById(req.params.customerId, function(err, customer) {
    if (err) res.send(err);
    res.json(customer);
  });
};

exports.read_a_customer_email = function(req, res) {
  Customer.getCustomerByEmail(req.params.email, function(err, customer) {
    if (err) res.send(err);
    res.json(customer);
  });
};

exports.update_a_customer = function(req, res) {
  Customer.updateById(req.params.customerId, new Customer(req.body), function(
    err,
    customer
  ) {
    if (err) res.send(err);
    res.json(customer);
  });
};

exports.delete_a_customer = function(req, res) {
  Customer.remove(req.params.customerId, function(err, customer) {
    if (err) res.send(err);
    res.json({ message: "Customer successfully deleted" });
  });
};

exports.update_customer_wallet = function(req, res) {
  console.log("req body in cust controller update wallet", req.body);
  Customer.walletTopUp(req.body, function(err, walletUpdateInfo) {
    if (err) res.send(err);

    console.log("walletUpdateInfo in cust controller", walletUpdateInfo);
    res.json(walletUpdateInfo);
  });
};
