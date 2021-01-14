"use strict";

var Review = require("./notifsRModel.js");

exports.customerReviews = function(req, res) {
  Review.getRead(function(err, review) {
    // console.log('review info controller',review,'review info controller end');
    if (err) res.send(err);

    res.send(review);
  });
};










