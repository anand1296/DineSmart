'use strict';

var Restaurant = require('./restreadModel.js');

exports.list_rest_info = function (req, res) {
  Restaurant.getAllRestaurants(function (err, restaurant) {

    //console.log('controller')
    if (err)
      res.send(err);
    //console.log('res', restaurant);
    res.send(restaurant);
  });
};




  










