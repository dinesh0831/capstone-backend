const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userList = new Schema({
    email: {
        type: String,
        required:true
    },
    name: {
        type: String,
        
        required: true,
        
    },
    password: {
        type: String,
        
        required: true,
        

    },
    mobileno: {
        required: true,
        
        type: Number,
    },
    wishList:{
        type:Array
    },
    bookedList:{
        type:Array
    }
  

})
const User = mongoose.model("User", userList, "User");
module.exports = User
