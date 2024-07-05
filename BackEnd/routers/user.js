const userController = require("../controller/userController");

// create user router
const router = require("express").Router();

//GET ALL USERS
router.get("/",userController.getAllUser);
//DELETE USER
router.delete("/:id",userController.deleteUser);

//export router
module.exports = router;