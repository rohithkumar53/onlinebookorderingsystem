const express= require("express");
const router= express.Router();
const controller = require("../controller/ordersController");
router.post("/orderplace", controller.orderPayment);
router.get("/getordersbycustomerid/:customerid", controller.ordersByCustomerId);
router.get("/getorderbyid/:orderid", controller.orderById);
router.get("/getallorders", controller.getallorders);

module.exports=router;