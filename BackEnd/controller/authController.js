const user = require('../models/user');
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
    },
    //Login
    loginUser: async(req, res) => {
        try {
            const user = await User.findOne({username: req.body.username});
            if (!user) {
                res.status(404).json("user not found !");
            }
            const validPassword = await bycrypt.compare(req.body.password,user.password);
            if (!validPassword) {
                res.status(400).json("wrong password !");
            }
            if (user && validPassword){
                res.status(200).json(user);
            }

        } catch (error) {
            res.status(500).json({erroor});
        }
    } 
}

//export authController
module.exports = authController;