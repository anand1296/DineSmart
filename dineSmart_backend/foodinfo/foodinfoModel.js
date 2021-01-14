'user strict';
var sql = require('../db.js');
var Buffer = require('buffer').Buffer;
//Customer object constructor
var Food = function (food) {
    this.food = food.food;
};

var i = 0;

Food.getFood = function getFood(passed_id, result) {
    console.log('Foodinfo login model:passed_id', passed_id);

    sql.query("Select * from food_menu JOIN describes_fooddetails JOIN rest_info on food_menu.ItemID=describes_fooddetails.ItemID AND food_menu.RId=rest_info.RId where food_menu.RId=?",passed_id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            console.log('Foodinfo login model',res,'foodonfo login model end');
            console.log('---------------------------------------------------res[0]',res[0]);

            result(null, res);
        }
    });
};


Food.getMenuItemById = function getMenuItemById(IdString, result) {
    console.log('Foodinfo login model:IdString',IdString);
    var IdObject = JSON.parse(IdString);
    console.log('Foodinfo login model:IdObject',IdObject);
    sql.query("Select * from food_menu JOIN describes_fooddetails JOIN rest_info on food_menu.ItemID=describes_fooddetails.ItemID AND food_menu.RId=rest_info.RId where food_menu.RId=? and food_menu.ItemID=?",[IdObject.restId,IdObject.itemId], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            console.log('Foodinfo login model:getMenuItemById',res,'foodonfo login model getMenuItemById end');
            console.log('---------------------------------------------------res[0]',res[0]);

            result(null, res);
        }
    });
};



Food.editItemData = function editItemData(itemUpdateInfo, result){
    console.log('inside itemUpdateInfo in foodInfoModel', itemUpdateInfo);
    sql.query("Update food_menu,describes_fooddetails set food_menu.Rate=?, food_menu.chefsSpecial=?, describes_fooddetails.Name=?, describes_fooddetails.Ingredients=? where food_menu.ItemID=? and food_menu.RId=? and describes_fooddetails.ItemID=?", [itemUpdateInfo.Rate, 
        itemUpdateInfo.chefsSpecial, itemUpdateInfo.Name, itemUpdateInfo.Ingredients, itemUpdateInfo.ItemID, itemUpdateInfo.RId, itemUpdateInfo.ItemID], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log('foodinfoModel - Food.editItemData', res);
            result(null, res);
        }
    });
};

Food.removeMenuItem = function removeMenuItem(IdObject, result){
  
    console.log('Foodinfo login model removeMenuItem:IdObject',IdObject);
    sql.query("Delete from food_menu where ItemID=? and RId=?", [IdObject.itemId, IdObject.restId], function(err,res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log('foodinfoModel - Food.removeMenuItem',res);
            result(null, res);
        }
    } );
};



Food.addNewMenuItem = function addNewMenuItem(newItemInfo, result){
  
    console.log('Foodinfo login model addNewMenuItem:newItemInfo', newItemInfo);
    sql.query("INSERT INTO food_menu(ItemID, RId, Rate, chefsSpecial) VALUES(?, ?, ?, ?);", [newItemInfo.itemId, newItemInfo.restId, newItemInfo.itemPrice, newItemInfo.isChefsSpecial], function(err,res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            sql.query("INSERT INTO describes_fooddetails(ItemID, Type, Name, Ingredients) VALUES(?,?,?,?);", [newItemInfo.itemId, newItemInfo.itemType, newItemInfo.itemName, newItemInfo.itemIngredients], function(err1,res1){
                if (err) {
                    console.log("error: ", err1);
                    result(err1, null);
                }
                else {
                    console.log('foodinfoModel - Food.addNewMenuItem',res1);
                    result(null, res1);  
                }
            });
            // console.log('foodinfoModel - Food.addNewMenuItem',res);
            // result(null, res);  
        }
    });
};




module.exports = Food;