"user strict";
var sql = require("../db.js");

//Review object constructor
var Review = function(review) {
  this.review = review.review;
};

Review.getAllReviewsByRId = function getAllReviewsByRId(result) {
  sql.query(
    "Select count(OId) as cnt from order_details where pending = 0 ",
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        // console.log('review model start',res,'review model end');
        result(null, res);
      }
    }
  );
};

module.exports = Review;