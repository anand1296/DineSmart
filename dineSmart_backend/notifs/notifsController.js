"use strict";

var Review = require("./notifsModel.js");

exports.customerReviews = function(req, res) {
  Review.getAllReviewsByRId(function(err, review) {
    // console.log('review info controller',review,'review info controller end');
    if (err) res.send(err);

    res.send(review);
  });
};










