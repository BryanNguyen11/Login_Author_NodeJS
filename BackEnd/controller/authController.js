const User = require('../models/user');
const bycrypt = require('bcryptjs'); //user for hashing password


const authController = {
    //login for Registered User
    registerUser: async(req, res) => {
        try {
            const salt = await bycrypt.genSalt(10);
            const hashed = await bycrypt.hash(req.body.password, salt);   //hashing password
            //create new user
            
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            //save to database
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({error});
        }
    }
}

//export authController
module.exports = authController;