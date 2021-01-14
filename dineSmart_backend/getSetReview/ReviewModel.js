"user strict";
var sql = require("../db.js");

//Review object constructor
var Review = function(review) {
  this.review = review.review;
};

Review.getAllReviewsByRId = function getAllReviewsByRId(passed_id, result) {
  sql.query(
    "Select RReview,RRating,CName from rest_reviews JOIN customer on rest_reviews.CId = customer.CId where RId = ? order by RRating desc",
    passed_id,
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

// Review.setAvgRatingByRId = function getAvgRatingByRId(passed_id, result) {
//   sql.query(
//     "update rest_info inner JOIN ( SELECT rest_reviews.RId, AVG(rest_reviews.RRating) as avgRating from rest_reviews where rest_reviews.RId= ? ) b on rest_info.RId=b.RId set rest_info.RRating = avgRating where rest_info.RId = ?",
//     passed_id,
//     passed_id,
//     function(err, res) {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//       } else {
//         result(null, res);
//       }
//     }
//   );
// };

Review.createReview = function createReview(reviewInfo, result) {
  console.log('inside create review in model', reviewInfo);
  sql.query(
    "INSERT into rest_reviews (RId, RReview, RRating, CId) VALUES (?,?,?,?)",
    [
      reviewInfo.restId,
      reviewInfo.restReview,
      reviewInfo.userRating,
      reviewInfo.userId
    ],
    function(err, res) {
      if (err) {

        console.log("error: ", err);
        result(err, null);

      } else {
        console.log('inside nested: model');
        sql.query(
              "UPDATE rest_info inner JOIN ( SELECT rest_reviews.RId, AVG(rest_reviews.RRating) as avgRating from rest_reviews where rest_reviews.RId= ? ) b on rest_info.RId=b.RId set rest_info.RRating = avgRating where rest_info.RId = ?",
              [reviewInfo.restId, reviewInfo.restId], function(err1, res1) {
                if (err1) {
                  console.log("error: ", err1);
                  result(err1, null);
                } else {
                  console.log('res of nested query', res1);
                  result(null, res1);
                }
            });
        //console.log(res);
        //result(null, res);
      }
    }
  );
};

//sql.query("update rest_info inner JOIN ( SELECT rest_reviews.RId, AVG(rest_reviews.RRating) as avgRating from rest_reviews where rest_reviews.RId= ? ) b on rest_info.RId=b.RId set rest_info.RRating = avgRating where rest_info.RId = ?", rId, rId)

module.exports = Review;
