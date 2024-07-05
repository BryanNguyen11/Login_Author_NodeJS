const userController = require("../controller/userController");

// create user router
const router = require("express").Router();

//GET ALL USERS
router.get("/",userController.getAllUser);

//export router
module.exports = router;