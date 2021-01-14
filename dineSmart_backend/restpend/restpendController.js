'use strict';

var Restaurant = require('./restpendModel.js');

exports.list_rest_info = function (req, res) {
  Restaurant.getAllRestaurants(function (err, restaurant) {

    //console.log('controller')
    if (err)
      res.send(err);
    //console.log('res', restaurant);
    res.send(restaurant);
  });
};

exports.getNote = function (req, res) {
  console.log('inside setOId controller', req.body);
  Restaurant.getNote(req.body, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
};















