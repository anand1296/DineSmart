
'use strict';
var sql = require('../db.js');


var otpx = require('./updateModel.js');



exports.accept_order = function (req, res) {
  console.log("In controller");

  sql.query("Select * from customer ", function (err,rows, field) {
      var x=0;
    for(var i=0;i<rows.length;i++)
    {
            
            if(rows[i].cphone == req.body.phone)
            {
                x = 1;
            }
           
    }
   

    if ( x != 0) {
        console.log("error: ", err);
        result(err, null);
    }
    else {
        
        otpx.acceptorder(req.body, function (err, data) {
            if (err)
              res.send(err);
            res.json(data); console.log("SUCESSFULLLLLLLLLLLL ");
          });
                
            }

        });

};







