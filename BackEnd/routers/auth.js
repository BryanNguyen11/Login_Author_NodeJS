
const authController = require('../controller/authController');

const router = require('express').Router();

router.post("/register",authController.registerUser);

module.exports = router; // export router with name 'router'