"user strict";
var sql = require("../db.js");

var Order = function (order) {
	this.order = order.order;
	this.created_at = new Date();
};

Order.createOrder = function createOrder(data, result) {

	console.log('book model createorder', data);
	sql.query(
		"INSERT into order_table (noteToChef, cid, bill) VALUES (?, ?, ?)",
		[data[0].note_to_chef, data[2].userid, data[3].total],
		function (err, res) {
			if (err) {
				console.log("error: ", err);
				result(err, null);
			} else {
				let result1 = { id: res.insertId };

				for (let eachItem of data) {
					if (eachItem.ItemID != null) {
						sql.query(
							"INSERT into order_details (oid,itemID,qty,price) VALUES (?,?,?,?)",
							[res.insertId, eachItem.ItemID, eachItem.qty, eachItem.price],
							function (err, res) {
								if (!err) {
									// console.log("Inserted Item Id:" + eachItem.ItemID);
								}
							}
						);
					}
				}
				sql.query(
					"INSERT into takes_order (RId,OId) VALUES (?,?)",
					[data[1].r_id, res.insertId],
					function (err, res1) {
						if (!err) {
							let result1 = { id: res.insertId };
							result(null, result1);
						}
					}
				);
			}
		}
	);
};

Order.getOrder = function getOrder(data, result) {
	console.log("In model", data);
	sql.query("SELECT * FROM `order_details` JOIN order_table JOIN describes_fooddetails WHERE order_table.CId=(?) AND order_details.ItemID=describes_fooddetails.ItemID GROUP BY order_details.OId", [data], function (
		err,
		res
	) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			//console.log('getreataurant model out-start',res,'getrestaurant model out-end');
			result(null, res);
		}
	});
};
Order.getAllOrder = function getOrder(data, result) {
	console.log("In model", data);
	sql.query("SELECT DISTINCT a.OId,a.qty,b.date,b.CId,e.RName,b.bill,a.price,c.* FROM `order_details` a JOIN order_table b JOIN describes_fooddetails c join takes_order d JOIN rest_info e WHERE b.CId=(?) AND a.ItemID=c.ItemID AND e.RId=d.RId GROUP by a.ItemID ORDER BY a.OId DESC", [data], function (
		err,
		res
	) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			//console.log('getreataurant model out-start',res,'getrestaurant model out-end');
			result(null, res);
		}
	});
};
Order.getOrderId = function getOrderId(data, result) {
	console.log("In model", data);
	sql.query("SELECT * FROM `order_details` JOIN order_table JOIN describes_fooddetails WHERE order_table.CId=(?) AND order_details.ItemID=describes_fooddetails.ItemID ORDER BY order_details.OId DESC", [data["userid"], data["order"]], function (
		err,
		res
	) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			//console.log('getreataurant model out-start',res,'getrestaurant model out-end');
			result(null, res);
		}
	});
};

module.exports = Order;
