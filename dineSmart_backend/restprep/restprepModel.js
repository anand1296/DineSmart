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
    sql.query("select * from (Select * from describes_fooddetails natural join order_details)a join order_table on a.oid = order_table.oid where pending =1 and preparing =0", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            //console.log('restaurant : ', res);
            //to remove later
            //console.log("---------------------------------------------------------");
            //console.log(res[0].RImg);
           

            //console.log('getallreataurants model out-start',res,'getallrestaurants model out-end');
            result(null, res);
        }
    });
};




module.exports = Restaurant;