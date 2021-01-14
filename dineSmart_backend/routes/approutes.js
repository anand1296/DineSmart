const express = require("express");
const router = express.Router();

//--------------------------------  Login Routes ------------------------------------------
var loginController = require("../Login/LoginController");
router.route("/authenticateUser").post(loginController.authenticateUser);
router.route("/authenticateManager").post(loginController.authenticateManager);

//--------------------------  customerList Routes --------------------------------------
var customerList = require("../Customer/CustController");
router.route("/customers").get(customerList.list_all_customers);
router.route("/customers_walletTopUp").post(customerList.update_customer_wallet);
router.route("/customers/:customerId")
        .get(customerList.read_a_customer)
        .put(customerList.update_a_customer)
        .delete(customerList.delete_a_customer);
router.route("/customers/:email").get(customerList.read_a_customer_email);

//router.route("/customer_updateWallet").post(customerList.update_customer_wallet);

//--------------------------  RegistrationList Routes --------------------------------------
var registrationList = require("../registration/registController");
router.route("/registration").post(registrationList.create_Registration);

var otpl = require("../otpver/otpController");
router.route("/otpver").post(otpl.create_a_otp);

var Editin = require("../editinfo/editinfoController");
router.route("/editinfo").post(Editin.create_a_otp);

var fregistx = require("../finalRegister/fregistController");
router.route("/finalRegister").post(fregistx.create_fregist);


var restPend = require("../restpend/restpendController");
router
        .route("/restpend")
        .get(restPend.list_rest_info);
router.route("/getNote")
        .post(restPend.getNote);



var restPrep = require("../restprep/restprepController");
router
        .route("/restprep")
        .get(restPrep.list_rest_info);

var restRead = require("../restread/restreadController");
router
        .route("/restread")
        .get(restRead.list_rest_info);

var restServe = require("../restserve/restserveController");
router
        .route("/restserve")
        .get(restServe.list_rest_info);

var Notifs = require("../notifs/notifsController");
router
        .route("/notifs")
        .get(Notifs.customerReviews);

var Notifsp = require("../notifsP/notifsPController");
router
        .route("/notifsP")
        .get(Notifsp.customerReviews);

var Notifsr = require("../notifsR/notifsRController");
router
        .route("/notifsR")
        .get(Notifsr.customerReviews);

//--------------------------  restaurant Routes --------------------------------------
var restInfo = require('../restinfo/restinfoController');
router.route('/restinfo')
        .get(restInfo.list_rest_info)
        .post(restInfo.editRestaurantInfo);
router.route('/restinfo_del')
        .post(restInfo.removeRestaurant);
router.route('/restinfo/:passed_id')
        .get(restInfo.rest_info);
router.route("/table_info/:passed_id")
        .get(restInfo.getTable);
router.route('/restinfo_getRId/:passed_id')
        .get(restInfo.getRestId);





// --------------------------  food Routes --------------------------------------
var foodInfo = require('../foodinfo/foodinfoController');
router.route('/foodinfo/:passed_id')
        .get(foodInfo.food_info);
router.route('/foodinfo_getItem/:IdString')
        .get(foodInfo.menuItemInfo);
router.route('/foodinfo_itemEdit')
        .post(foodInfo.editItemData);
router.route('/foodinfo_del')
        .post(foodInfo.removeMenuItem);
router.route('/foodinfo_insert')
        .post(foodInfo.addNewMenuItem);


//--------------------------  Bookinfo Routes --------------------------------------
var bookInfo = require('../bookinfo/bookinfoController');
router.route('/bookinfo')
        .post(bookInfo.create_a_booking_session);
router.route('/booksess')
        .post(bookInfo.create_a_session);
router.route('/setOId').post(bookInfo.setOId);
router.route('/setPoint').post(bookInfo.setPoint);
router.route('/getPoint').post(bookInfo.getPoint);
router.route('/setZero').post(bookInfo.setZero);
router.route("/getBill/:dataString").get(bookInfo.getBillAmount);
router.route("/getIds/:dataString").get(bookInfo.getRestAndTableIds);
router.route('/changeStatus').post(bookInfo.changeBillStatus);
router.route('/changeTableBookingStatus').post(bookInfo.changeTableBookingStatus);



//--------------------------  ReviewList Routes --------------------------------------
var ReviewList = require("../getSetReview/ReviewController");
router.route("/getSetReview/:passed_id").get(ReviewList.customerReviews);
router.route("/getSetReview").post(ReviewList.createReview);

//--------------------------------Order Routes-----------------------------------
var orderList = require("../order/orderController");
router.route("/order").post(orderList.create_a_order);
router.route("/orders/:passed_id").get(orderList.get_all_orders);
router.route("/order/:passed_id").get(orderList.get_orders);
router.route("/orderid").post(orderList.get_orders_id);
//---------------------------------orders---------------------------
var Accpt = require("../accept/acceptController");
router.route("/accept")
        .post(Accpt.accept_order);

        var Upd = require("../update/updateController");
        router.route("/update")
                .post(Upd.accept_order);

var RAccpt = require("../readyAcpt/readyAcptController");
router.route("/readyAcpt")
        .post(RAccpt.accept_order);

var SAccpt = require("../serveAcpt/serveAcptController");
router.route("/serveAcpt")
        .post(SAccpt.accept_order);



module.exports = router;
