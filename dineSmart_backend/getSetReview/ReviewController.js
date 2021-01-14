"use strict";

var Review = require("./ReviewModel.js");

exports.customerReviews = function(req, res) {
  Review.getAllReviewsByRId(req.params.passed_id, function(err, review) {
    // console.log('review info controller',review,'review info controller end');
    if (err) res.send(err);

    res.send(review);
  });
};

exports.avgRating = function(req, res) {
  Review.setAvgRatingByRId(req.params.passed_id, function(err, rating) {
    // console.log('review info controller',review,'review info controller end');
    if (err) res.send(err);

    res.send(rating);
  });
};

exports.createReview = function(req, res) {
  console.log('req body in create review of review controller', req.body);
  Review.createReview(req.body, function(err, reviewInfo) {
    if (err) res.send(err);

    res.json(reviewInfo);
  });
};
