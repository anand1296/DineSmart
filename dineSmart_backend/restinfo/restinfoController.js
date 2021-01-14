"use strict";

var Restaurant = require("./restinfoModel.js");

exports.list_rest_info = function(req, res) {
  Restaurant.getAllRestaurants(function(err, restaurant) {
    //console.log('controller')
    if (err) res.send(err);
    //console.log('res', restaurant);
    res.send(restaurant);
  });
};

exports.rest_info = function(req, res) {
  Restaurant.getRestaurant(req.params.passed_id, function(err, restaurant) {
    // console.log("restinfo controller", restaurant, "restinfo centroller end");
    if (err) res.send(err);

    res.send(restaurant);
  });
};

exports.editRestaurantInfo = function(req, res) {
  // console.log("req body in restinfo controller editRest", req.body);
  Restaurant.editRestaurantInfo(req.body, function(err, restUpdateInfo) {
    if (err) res.send(err);

    // console.log("restUpdateInfo in restinfo controller", restUpdateInfo);
    res.json(restUpdateInfo);
  });
};

exports.removeRestaurant = function(req, res) {
  // console.log("req body in restinfo controller removeRest", req.body);
  Restaurant.removeRestaurant(req.body, function(err, removeRest) {
    if (err) res.send(err);

    res.json(removeRest);
  });
};

exports.getTable = function(req, res) {
  Restaurant.getTable(req.params.passed_id, function(err, restaurant) {
    if (err) res.send(err);

    res.send(restaurant);
  });
};

exports.getRestId = function(req, res) {
  Restaurant.getRestId(req.params.passed_id, function(err, restaurantId) {
    console.log("restinfo controller: getRestId", restaurantId, "restinfo centroller end");
    if (err) res.send(err);

    res.send(restaurantId);
  });
};
