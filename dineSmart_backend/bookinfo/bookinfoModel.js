"user strict";
var sql = require("../db.js");

//Booking object constructor
var Booking = function (booking) {
  this.booking = booking.booking;
};

Booking.createBooking_session = function createBooking_session(data, result) {
  sql.query(
    "INSERT into creates_session (CId) VALUES (?)",
    [data.CId],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        sql.query("INSERT into dines_at (CId,RId,TId) VALUES (?,?,?)", [data.CId, data.restId, data.tId], function (err2, res2) {
          if (err) {
            console.log("error: ", err2);
            result(err2, null);
          } else {
            console.log('end of create booking sess model res2:', res2);
            //result(null, res2);
            let result1 = { id: res.insertId };
            console.log('end of create booking sess model result1:', result1);
            result(null, result1);
          }
        });

        // let result1 = { id: res.insertId };
        // console.log('end of create booking sess model result1:',result1);
        // result(null, result1);
      }
    }
  );
};

Booking.create_session = function create_session(data, result) {
  console.log('inside create sess model: data', data);
  sql.query(
    "INSERT into session (SId,TId) VALUES (?,?)",
    [data.SId, data.TId],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log('inside create sess model: inside else');
        sql.query(
          "UPDATE r_table set book =1,date=(?),time=(?) where TId=(?)",
          [data.date, data.time, data.TId],
          function (err1, res1) {
            if (err1) {

              console.log("error: ", err1);
              result(err1, null);
            } else {
              result(null, res1);
            }
          }
        );
      }
    }
  );
};

Booking.setOId = function setOId(data, result) {
  console.log('bookinfo model setOId- data:', data);
  sql.query(
    "UPDATE dines_at set OId=? where CId=? and RId=? and TId=?",
    [data.OId, data.CId, data.RId, data.TId],
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
Booking.setPoint = function setPoint(data, result) {
  console.log('bookinfo model setPoint- data:', data);
  sql.query(
    "UPDATE dines_at set priviledgePoints=? where OId=?",
    [data.point, data.OId],
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

Booking.getPoint = function getPoint(data, result) {
  console.log('bookinfo model setPoint- data:', data);
  sql.query(
    "SELECT priviledgePoints from dines_at where CId=? and RId=?",
    [data.CId, data.RId],
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
Booking.setZero = function setZero(data, result) {
  console.log('bookinfo model setPoint- data:', data);
  sql.query(
    "UPDATE dines_at set priviledgePoints=0 where CId=? and RId=?",
    [data.CId, data.RId],
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


Booking.getBillAmount = function getBillAmount(dataString, result) {
  console.log('bookinfo model-billamount:dataString', dataString);
  var dataObject = JSON.parse(dataString);
  console.log('bookinfo model-billamount:dataObject', dataObject);
  sql.query("SELECT bill from order_table where OId=? and CId=?", [dataObject.OId, dataObject.CId], function (err, res) {

    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('bookinfo model-billamount:res', res);
      result(null, res);
    }
  });
};

Booking.getRestAndTableIds = function getRestAndTableIds(dataString, result) {
  console.log('bookinfo model-getRestAndTableIds:dataString', dataString);
  var dataObject = JSON.parse(dataString);
  console.log('bookinfo model-getRestAndTableIds:dataObject', dataObject);
  sql.query("SELECT RId, TId, transactionId from dines_at where OId=? and CId=?", [dataObject.OId, dataObject.CId], function (err, res) {

    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('bookinfo model-getRestAndTableIds:res', res);
      result(null, res);
    }
  });
};


Booking.changeBillStatus = function changeBillStatus(data, result) {
  console.log('bookinfo model changeBillStatus- data:', data);
  sql.query(
    "UPDATE order_table set paid=true where OId=? and CId=?",
    [data.OId, data.CId],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log('booking model: changeBillStatus - res', res);
        result(null, res);
      }
    }
  );
};


Booking.changeTableBookingStatus = function changeTableBookingStatus(data, result) {
  console.log('bookinfo model changeTableBookingStatus- data:', data);
  sql.query(
    "UPDATE r_table set book=0 where TId=? and RId=?",
    [data.table_id, data.rest_id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log('booking model: changeTableBookingStatus - res', res);
        result(null, res);
      }
    }
  );
};

module.exports = Booking;
