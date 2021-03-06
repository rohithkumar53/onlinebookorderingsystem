const express= require("express");
const router= express.Router();
const controller = require("../controller/bookController");

router.get("/getallbooks", controller.findBooks);
router.get("/getbookbyid/:bookid", controller.findBookById);
router.post("/addreview", controller.addreview);
router.get("/deletebook/:bookid", controller.deletespecificbook);
router.post("/addbook", controller.addspecificbook);
router.post("/editbook", controller.editspecificbook);
router.get("/newarrival", controller.newarrival);
module.exports=router;