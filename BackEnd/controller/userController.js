const User = require('../models/user');

const userController = {
    //get all user
    getAllUser: async(req, res) => {
        try {
            const user =  await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

// export userController
module.exports = userController;