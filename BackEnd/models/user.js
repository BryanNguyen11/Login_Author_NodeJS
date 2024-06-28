const mongoose = require('mongoose');


// frame of model's attributes
const userSchema = new mongoose.Schema({
    
        username:{
            type: String,
            required: true,
            minlength: 5, // min length of username
            maxlength: 20, // max length of username
            unique: true, // username must be unique
        },
        email:{
            type: String,
            required: true,
            minlength: 10, // min length of username
            maxlength: 50, // max length of username
            unique: true, // username must be unique
        },
        password:{
            type: String,
            required: true,
            minlength: 6, // min length of password
            maxlength: 1024, // max length of password
        },
        isAdmin:{
            type: Boolean,
            default: false,// every user is not admin by default
        },
    
    
},{timestamps: true,}
);

module.exports = mongoose.model("User",userSchema) // export model with name 'User' and schema 'userSchema'