import mongoose, { Schema } from "mongoose";


export const UserShcema = new mongoose.Schema({
    user_name: {
        type: String
    },
   Fname: {
        type: String
    },
    Lname: {
        type: String
    },
    email: {
        type: String
    },
    mobileNo: {
        type: String
    },
    address: {
        type: String
    },
    password:{
        type: String
    },
    Islogin:{
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })