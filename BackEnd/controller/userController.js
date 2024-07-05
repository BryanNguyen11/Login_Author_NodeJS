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
    },

    //DELETE User
    deleteUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).josn("Deleted Successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    }

}

// export userController
module.exports = userController;