'use strict';

var Food = require('./foodinfoModel.js');


exports.food_info = function (req, res) {

  Food.getFood(req.params.passed_id,function (err, food) {
    //console.log('food info controller',food,'food info controller end');
    if (err)
      res.send(err);
    
    res.send(food);
  });
};

exports.menuItemInfo = function (req, res) {

  Food.getMenuItemById(req.params.IdString,function (err, item) {
    //console.log('food info controller',food,'food info controller end');
    if (err)
      res.send(err);
    
    res.send(item);
  });
};



exports.editItemData = function(req, res) {
  console.log('req body in foodinfo controller ', req.body);
  Food.editItemData(req.body, function(err, itemUpdateInfo){
    if (err)
      res.send(err);

    console.log('itemUpdateInfo in foodinfo controller',itemUpdateInfo);
    res.json(itemUpdateInfo);
  });
};

exports.removeMenuItem = function(req, res) {
  console.log('req body in foodinfo controller removeMenuItem',req.body);
  Food.removeMenuItem(req.body, function(err, removeItem){
    if (err)
      res.send(err);

    res.json(removeItem);
  });
};

exports.addNewMenuItem = function(req, res) {
  console.log('req body in foodinfo controller ', req.body);
  Food.addNewMenuItem(req.body, function(err, addItemInfo){
    if (err)
      res.send(err);

    console.log('itemUpdateInfo in foodinfo controller',addItemInfo);
    res.json(addItemInfo);
  });
};










