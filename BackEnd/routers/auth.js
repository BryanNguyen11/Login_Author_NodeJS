
const authController = require('../controller/authController');
const router = require('express').Router();


//Route for register
router.post("/register",authController.registerUser);
//Route for login
router.post("/login",authController.loginUser);


module.exports = router; // export router with name 'router'