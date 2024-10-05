const mongoose = require('mongoose');
const { Schema } = mongoose;
    
const UserSchema = new mongoose.Schema({
        Firstname:{
            type:String,
            required:true,
        },
        Lastname:{
            type:String,
            required:true,
        },
        Password:{
            type:String,
            required:true,
        },
        Confirmpassword:{
            type:String,
            required:true,
        },
        Gender:{
            type:String,
            required:true,
        },
        Email:{
            type:String,
            required:true,
            unique: true,
        },
        Phone:{
            type:String,
            required:true,
        },
        Location:{
            type:String,
            required:true,
        },
        Enquire:{
            type:String,
            required:true,
        },


    });

    const UserModel =  mongoose.model('register', UserSchema);
    module.exports = UserModel;