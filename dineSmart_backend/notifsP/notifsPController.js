"use strict";

var Review = require("./notifsPModel.js");

exports.customerReviews = function(req, res) {
  Review.getPrep(function(err, review) {
    // console.log('review info controller',review,'review info controller end');
    if (err) res.send(err);

    res.send(review);
  });
};










