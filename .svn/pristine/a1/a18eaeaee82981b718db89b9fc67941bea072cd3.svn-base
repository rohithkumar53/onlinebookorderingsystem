const express= require("express");
const router= express.Router();
const controller= require("../controller/userController");

router.post('/registration', controller.registration);
router.post('/login', controller.loginuser);
router.post('/update', controller.updateuser);
router.get('/getallusers', controller.getallusers);
router.get('/deleteuser/:userid', controller.deletespecificuser);

module.exports=router;