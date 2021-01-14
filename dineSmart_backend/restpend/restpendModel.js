'user strict';
var sql = require('../db.js');
var Buffer = require('buffer').Buffer;

//Customer object constructor
var Restaurant = function (restaurant) {
    this.restaurant = restaurant.restaurant;
    this.status = restaurant.status;
    this.created_at = new Date();
};


Restaurant.getAllRestaurants = function getAllRestaurants(result) {
    sql.query("select * from (Select * from describes_fooddetails natural join order_details)a join order_table on a.oid = order_table.oid where pending =0",
        function (err, res) {

            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {

                result(null, res);
            }
        });
};
Restaurant.getNote = function getNote(data, result) {
    console.log('bookinfo model setPoint- data:', data);
    sql.query(
        "SELECT noteToChef from order_table where OId=?",
        [data.id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log('booking model: setOId - res', res);
                result(null, res);
            }
        }
    );
};




module.exports = Restaurant;